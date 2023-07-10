import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { HelloModule } from './hello/hello.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    HelloModule,
    QueueModule,
    BullModule.forRoot({
      redis: {
        // host: process.env.REDIS_HOST,
        // port: 6379,
        // host: url.hostname,
        // port: +url.port,
        // password: url.password,
        // db: 0,
        // tls: {},
        // host: process.env.REDIS_HOST,
        host: '127.0.0.1',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
