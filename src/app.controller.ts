import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// response
import { IResponse } from './common/interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // hello route
  @Get()
  async hello(): Promise<IResponse> {
    return this.appService.hello();
  }
}
