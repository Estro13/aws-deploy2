import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class AppService {
  getHello(): string {
    return `PORT=${process.env.PORT}, STACKHERO_REDIS_URL_TLS=${process.env.STACKHERO_REDIS_URL_TLS}`;
  }
}
