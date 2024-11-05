import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ContactDto } from './dto/contact.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailerService {
    constructor(private readonly configService: ConfigService) {}
  private transporter = nodemailer.createTransport({
    host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      auth: {
        user: this.configService.get<string>('USER'),
        pass: this.configService.get<string>('PASSWORD'),
      },
      tls: {
        rejectUnauthorized: false,
      },
  });

  async sendContactUsEmail(contactDto: ContactDto): Promise<void> {
    const { name, email, message } = contactDto;
    await this.transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'pshubomi@gmail.com',
      subject: 'New Contact Us Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
  }
}
