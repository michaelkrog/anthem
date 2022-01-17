import express from "express";
import {Server, Path, GET, PathParam} from "typescript-rest";
import { PlaylistController } from "./controllers/playlist-controller";
import { StationController } from "./controllers/station-controller";


const port = 8080; // default port to listen
const app = express();
Server.buildServices(app, PlaylistController, StationController);



// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});