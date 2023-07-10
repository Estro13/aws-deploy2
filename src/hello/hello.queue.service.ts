import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class HelloQueueService {
  constructor(
    @InjectQueue('write')
    private writeQueue: Queue,
  ) {}

  async put() {
    await this.writeQueue.add(
      'write-hello',
      { name: 'Yura Pezdyuk' },
      { delay: 3000 },
    );
  }
}
