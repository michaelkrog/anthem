import { Module } from '@nestjs/common';
import { EventController } from './controllers/event-controller';
import { PlaylistController } from './controllers/playlist-controller';
import { StationController } from './controllers/station-controller';
import { AudioPlayerService } from './services/audio-player.service';
import { EventService } from './services/event.service';

@Module({
  imports: [],
  controllers: [EventController, PlaylistController, StationController],
  providers: [AudioPlayerService, EventService],
})
export class AppModule {}
