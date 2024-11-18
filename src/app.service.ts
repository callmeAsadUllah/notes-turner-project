import { Injectable } from '@nestjs/common';
// response
import { IResponse } from './common/interfaces/response.interface';

@Injectable()
export class AppService {
  // hello service
  async hello(): Promise<IResponse> {
    return {
      message: 'Hello, World!',
    };
  }
}
