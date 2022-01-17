"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register(app) {
    // define a route handler for the default home page
    app.get("/", (req, res) => {
        res.send("Hello world!");
    });
}
exports.register = register;
//# sourceMappingURL=routes.js.map