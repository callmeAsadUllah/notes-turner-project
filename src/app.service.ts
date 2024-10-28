import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async app(): Promise<object> {
    return {
      routes: 'App',
    };
  }
}
