"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerService = void 0;
const gstreamer_superficial_1 = __importDefault(require("gstreamer-superficial"));
const typescript_ioc_1 = require("typescript-ioc");
let AudioPlayerService = class AudioPlayerService {
    constructor() {
        this._list = [];
        this.index = 0;
        this.playing = false;
    }
    get list() {
        return this._list;
    }
    play() {
        if (this._list.length > this.index) {
            const mediaItem = this._list[this.index];
            // tslint:disable-next-line:no-console
            console.log('Playing: ', mediaItem);
            if (this.pipeline == null) {
                this.pipeline = new gstreamer_superficial_1.default.Pipeline(`uridecodebin uri=${mediaItem.url} ! audioconvert ! autoaudiosink`);
            }
            this.pipeline.play();
            this.playing = true;
        }
    }
    stop() {
        if (this.pipeline != null) {
            this.pipeline.stop();
            this.pipeline = null;
            this.playing = false;
        }
    }
    pause() {
        if (this.pipeline != null) {
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
};
AudioPlayerService = __decorate([
    typescript_ioc_1.Singleton
], AudioPlayerService);
exports.AudioPlayerService = AudioPlayerService;
//# sourceMappingURL=audio-player.service.js.map