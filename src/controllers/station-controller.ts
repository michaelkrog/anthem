import { Controller, Get } from '@nestjs/common';
import jworg from '../stations/jw.org.json';
import { Station } from '../models/station';

@Controller('/stations')
export class StationController {
  stations: Station[] = [jworg];

  @Get()
  list(): Station[] {
    return this.stations;
  }
}
