import { Controller, Get } from '@nestjs/common';
import { HelloQueueService } from './hello.queue.service';

@Controller('hello')
export class HelloController {
  constructor(private helloQueueService: HelloQueueService) {}

  @Get()
  async writeHello() {
    await this.helloQueueService.put();
  }
}
