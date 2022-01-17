import { GET, Path, POST, PUT } from "typescript-rest";
import { Station } from "../models/station";
import jworg from '../stations/jw.org.json';

@Path("/stations")
export class StationController {

    stations: Station[] = [jworg];
    
    @GET
    list(): Station[] {
        return this.stations;
    }

}
