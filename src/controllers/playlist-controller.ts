import { MediaItem } from "../models/media-item";
import { GET, Path, POST, PUT } from "typescript-rest";
import { AudioPlayerService } from "../services/audio-player.service";
import { Inject } from "typescript-ioc";

@Path("/playlist")
export class PlaylistController {

    @Inject
    service: AudioPlayerService;

    @GET
    list(): MediaItem[] {
        return this.service.list;
    }

    @POST
    create(mediaItem: MediaItem): MediaItem {
        this.service.list.push(mediaItem);
        return mediaItem;
    }

    @Path('/actions/play')
    @PUT
    play(): void {
        this.service.play();
    }

    @Path('/actions/stop')
    @PUT
    stop(): void {
        this.service.stop();
    }

    @Path('/actions/pause')
    @PUT
    pause(): void {
        this.service.pause();
    }

    @Path('/actions/next')
    @PUT
    next(): void {
        this.service.next();
    }

    @Path('/actions/previous')
    @PUT
    previous(): void {
        this.service.previous();
    }
}
