"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typescript_rest_1 = require("typescript-rest");
const playlist_controller_1 = require("./controllers/playlist-controller");
const station_controller_1 = require("./controllers/station-controller");
const port = 8080; // default port to listen
const app = (0, express_1.default)();
typescript_rest_1.Server.buildServices(app, playlist_controller_1.PlaylistController, station_controller_1.StationController);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map