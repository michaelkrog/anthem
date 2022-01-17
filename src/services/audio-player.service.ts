import gstreamer from 'gstreamer-superficial';
import { Event } from '../models/event';
import { Inject, Singleton } from 'typescript-ioc';
import { MediaItem } from '../models/media-item';
import { EventService } from './event.service';

type State = 'playing' | 'stopped' | 'paused';

@Singleton
export class AudioPlayerService {

    @Inject
    eventService: EventService;

    _list: MediaItem[] = [];
    index = 0;
    pipeline: any;
    _state: State = 'stopped';
    durationEventTimer: number;

    get state(): State {
        return this._state;
    }

    set state(value: State) {
        this._state = value;

        switch(value) {
            case 'playing':
                this.durationEventTimer = setInterval(_ => {
                    if(this.pipeline != null) {
                        const event = new Event('positionChanged', {
                            position: this.pipeline.queryPosition(),
                            duration: this.pipeline.queryDuration()
                        });
                        this.eventService.emit(event);
                    }
                }, 500);
                break;
            case 'paused':
            case 'stopped':
                clearInterval(this.durationEventTimer);
                break;
        }
    }

    get list() {
        return this._list;
    }

    play() {
        if(this.state === 'playing') return;
        if(this._list.length > this.index) {
            const mediaItem = this._list[this.index];
            // tslint:disable-next-line:no-console
            console.log('Playing: ', mediaItem);
            if(this.pipeline == null) {
                this.pipeline = new gstreamer.Pipeline(`uridecodebin uri=${mediaItem.url} ! audioconvert ! autoaudiosink`);
            }
            this.pipeline.pollBus((msg: any) => this.handleMessage(msg));
            this.pipeline.play();
        }

    }

    stop() {
        if(this.state === 'stopped') return;
        this.state = 'stopped';
        if(this.pipeline != null) {
            this.pipeline.stop();
            this.pipeline = null;
        }
    }

    pause() {
        if(this.state !== 'playing') return;
        if(this.pipeline != null) {
            this.pipeline.pause();
        }
    }

    next() {
        this.stop();
        this.index = Math.min(this._list.length - 1, this.index + 1);
        this.play();
    }

    previous() {
        this.stop();
        this.index = Math.max(0, this.index - 1);
        this.play();
    }

    private handleMessage(msg: any) {
        const type = msg.type;
        switch(type) {
            case 'state-changed':
                this.handleStateChanged(msg);
                break;
        }
    }

    private handleStateChanged(msg: any) {
        const newState = msg['new-state'];
        switch(newState) {
            case 'GST_STATE_PLAYING':
                this.state = 'playing';
                break;
            case 'GST_STATE_PAUSED':
                this.state = 'paused';
                break;
            case 'GST_STATE_READY':
                this.state = 'stopped';
                break;

        }
    }
}