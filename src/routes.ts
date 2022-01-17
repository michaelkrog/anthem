import {Express} from "express";

export function register(app: Express) {
    // define a route handler for the default home page
    app.get("/", (req, res) => {
        res.send("Hello world!");
    });
}