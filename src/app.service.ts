import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class AppService {
  getHello(): string {
    return `PORT=${process.env.PORT}, DBHOST=${process.env.DBHOST}, DBUSER=${process.env.DBUSER}, INCORRECT=${process.env.DBUSER2}`;
  }
}
