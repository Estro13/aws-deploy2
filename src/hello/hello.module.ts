import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloQueueService } from './hello.queue.service';

@Module({
  imports: [BullModule.registerQueue({ name: 'write' })],
  controllers: [HelloController],
  providers: [HelloQueueService],
})
export class HelloModule {}
