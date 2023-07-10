import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('write')
export class Consumer {
  @Process('write-hello')
  async writeHello({ data }: Job) {
    console.log(`----------DATA----------, ${data}`);
    // throw new BadRequestException('ERROR');
  }
}
