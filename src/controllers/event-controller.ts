import { EventService } from "../services/event.service";
import { Inject } from "typescript-ioc";
import { Context, GET, Path, ServiceContext } from "typescript-rest";

@Path('/events')
export class EventController {

    @Inject
    eventService: EventService;

    @Context
    context: ServiceContext;

    @GET
    stream() {
        // tslint:disable-next-line:no-console
        console.log('regsitering client ');
        this.eventService.registerClient(this.context);
    }
}