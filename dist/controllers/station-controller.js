"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationController = void 0;
const typescript_rest_1 = require("typescript-rest");
const jw_org_json_1 = __importDefault(require("../stations/jw.org.json"));
let StationController = class StationController {
    constructor() {
        this.stations = [jw_org_json_1.default];
    }
    list() {
        return this.stations;
    }
};
__decorate([
    typescript_rest_1.GET,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], StationController.prototype, "list", null);
StationController = __decorate([
    (0, typescript_rest_1.Path)("/stations")
], StationController);
exports.StationController = StationController;
//# sourceMappingURL=station-controller.js.map