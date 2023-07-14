import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class AppService {
  getHello(): string {
    return `PORT=${process.env.PORT}, TEST_EBEXTENSIONS=${process.env.TEST_EBEXTENSIONS}`;
  }
}
