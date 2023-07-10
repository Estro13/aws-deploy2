import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`PORT ${process.env.PORT}`);
  // console.log(`PORT ${process.env.STACKHERO_REDIS_URL_TLS}`);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
