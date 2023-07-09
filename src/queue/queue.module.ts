import { Module } from '@nestjs/common';
import { Consumer } from './consumer';

@Module({ providers: [Consumer] })
export class QueueModule {}
