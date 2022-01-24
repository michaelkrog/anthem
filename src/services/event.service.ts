import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { Event } from '../models/event';

@Injectable()
export class EventService {
  private _eventStream = new Subject<Event>();

  get eventStream(): Observable<Event> {
    return this._eventStream;
  }

  emit(event: Event) {
    // tslint:disable-next-line:no-console
    console.log('Event: ', event);
    this._eventStream.next(event);
  }
}
