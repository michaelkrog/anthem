import express from "express";
import SSE from "express-sse-ts";
import {Server, Path, GET, PathParam} from "typescript-rest";
import { EventController } from "./controllers/event-controller";
import { PlaylistController } from "./controllers/playlist-controller";
import { StationController } from "./controllers/station-controller";


const port = 8080; // default port to listen
const app = express();
const sse = new SSE();
Server.buildServices(app, PlaylistController, StationController, EventController);

// app.get('/events', sse.init);

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});