import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { ContactDto } from './dto/contact.dto';

@Controller('mailer')
export class MailerController {
    constructor (
        private readonly mailerService: MailerService
    ){}

    @Post('contact')
    async sendContactMessage(@Body() contactDto: ContactDto) {
        await this.mailerService.sendContactUsEmail(contactDto);
        return { message: 'Your message has been sent successfully!' };
    }
}
