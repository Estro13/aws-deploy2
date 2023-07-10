import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { HelloModule } from './hello/hello.module';
import { QueueModule } from './queue/queue.module';

// const number = parseFloat(process.env.REDIS_PORT);

@Module({
  imports: [
    HelloModule,
    QueueModule,
    BullModule.forRoot({
      redis: {
        // host: process.env.REDIS_HOST,
        // port: number,
        host: '127.0.0.2',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
