import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerService } from './mailer/mailer.service';
import { MailerModule } from './mailer/mailer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MailerModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, MailerService],
})
export class AppModule {}
