import { Controller, Get, Post, Put } from '@nestjs/common';
import { MediaItem } from '../models/media-item';
import { AudioPlayerService } from '../services/audio-player.service';

@Controller('/playlist')
export class PlaylistController {
  constructor(private service: AudioPlayerService) {}

  @Get()
  list(): MediaItem[] {
    return this.service.list;
  }

  @Post()
  create(mediaItem: MediaItem): MediaItem {
    this.service.addItem(mediaItem);
    return mediaItem;
  }

  @Put('/actions/play')
  play(): void {
    this.service.play();
  }

  @Put('/actions/stop')
  stop(): void {
    this.service.stop();
  }

  @Put('/actions/pause')
  pause(): void {
    this.service.pause();
  }

  @Put('/actions/next')
  next(): void {
    this.service.next();
  }

  @Put('/actions/previous')
  previous(): void {
    this.service.previous();
  }
}
