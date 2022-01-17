import gstreamer from 'gstreamer-superficial';
import { Singleton } from 'typescript-ioc';
import { MediaItem } from '../models/media-item';

@Singleton
export class AudioPlayerService {

    _list: MediaItem[] = [];
    index = 0;
    pipeline: any;
    playing = false;

    get list() {
        return this._list;
    }

    play() {
        if(this._list.length > this.index) {
            const mediaItem = this._list[this.index];
            // tslint:disable-next-line:no-console
            console.log('Playing: ', mediaItem);
            if(this.pipeline == null) {
                this.pipeline = new gstreamer.Pipeline(`uridecodebin uri=${mediaItem.url} ! audioconvert ! autoaudiosink`);
            }
            this.pipeline.play();
            this.playing = true;
        }

    }

    stop() {
        if(this.pipeline != null) {
            this.pipeline.stop();
            this.pipeline = null;
            this.playing = false;
        }
    }

    pause() {
        if(this.pipeline != null) {
            this.pipeline.pause();
            this.playing = false;
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
}