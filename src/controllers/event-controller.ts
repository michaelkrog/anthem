import { Controller, Sse } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { EventService } from '../services/event.service';

@Controller('/events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Sse()
  sse(): Observable<MessageEvent> {
    return this.eventService.eventStream.pipe(
      map((e) => {
        return { data: e } as MessageEvent;
      }),
    );
  }
}
