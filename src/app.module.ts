import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { HelloModule } from './hello/hello.module';
import { QueueModule } from './queue/queue.module';

const url = new URL(process.env.STACKHERO_REDIS_URL_TLS);

@Module({
  imports: [
    HelloModule,
    QueueModule,
    BullModule.forRoot({
      redis: {
        host: url.hostname,
        port: +url.port,
        password: url.password,
        // db: 0,
        // tls: {},
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
