import { NextFunction, Request, Response } from "express";
import SSE from "express-sse-ts";
import { Event } from "../models/event";
import { Singleton } from "typescript-ioc";
import { ServiceContext } from "typescript-rest";

@Singleton
export class EventService {
    sse = new SSE();

    registerClient(context: ServiceContext) {
        // tslint:disable-next-line:no-console
        console.log('New client: ');
        this.sse.init(context.request, context.response, context.next);
    }

    emit(event: Event) {
        // tslint:disable-next-line:no-console
        console.log('Event: ', event);

        this.sse.send(JSON.stringify(event));
    }
}