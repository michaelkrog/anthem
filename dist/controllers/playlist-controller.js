"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistController = void 0;
const media_item_1 = require("../models/media-item");
const typescript_rest_1 = require("typescript-rest");
const audio_player_service_1 = require("../services/audio-player.service");
const typescript_ioc_1 = require("typescript-ioc");
let PlaylistController = class PlaylistController {
    list() {
        return this.service.list;
    }
    create(mediaItem) {
        this.service.list.push(mediaItem);
        return mediaItem;
    }
    play() {
        this.service.play();
    }
    stop() {
        this.service.stop();
    }
    pause() {
        this.service.pause();
    }
    next() {
        this.service.next();
    }
    previous() {
        this.service.previous();
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", audio_player_service_1.AudioPlayerService)
], PlaylistController.prototype, "service", void 0);
__decorate([
    typescript_rest_1.GET,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PlaylistController.prototype, "list", null);
__decorate([
    typescript_rest_1.POST,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [media_item_1.MediaItem]),
    __metadata("design:returntype", media_item_1.MediaItem)
], PlaylistController.prototype, "create", null);
__decorate([
    (0, typescript_rest_1.Path)('/actions/play'),
    typescript_rest_1.PUT,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaylistController.prototype, "play", null);
__decorate([
    (0, typescript_rest_1.Path)('/actions/stop'),
    typescript_rest_1.PUT,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaylistController.prototype, "stop", null);
__decorate([
    (0, typescript_rest_1.Path)('/actions/pause'),
    typescript_rest_1.PUT,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaylistController.prototype, "pause", null);
__decorate([
    (0, typescript_rest_1.Path)('/actions/next'),
    typescript_rest_1.PUT,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaylistController.prototype, "next", null);
__decorate([
    (0, typescript_rest_1.Path)('/actions/previous'),
    typescript_rest_1.PUT,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaylistController.prototype, "previous", null);
PlaylistController = __decorate([
    (0, typescript_rest_1.Path)("/playlist")
], PlaylistController);
exports.PlaylistController = PlaylistController;
//# sourceMappingURL=playlist-controller.js.map