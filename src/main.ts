import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // URL 網址前綴 + 'api'
    app.setGlobalPrefix('api');
    await app.listen(3333);
}
bootstrap();
