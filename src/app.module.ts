import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeController } from './me/me.controller';
import { WebModule } from './web/web.module';

@Module({
  imports: [WebModule.forRoot()],
  controllers: [AppController, MeController],
  providers: [AppService],
})
export class AppModule {}
