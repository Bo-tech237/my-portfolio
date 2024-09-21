import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

export class Emailer {
    private readonly transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
        });
    }

    public async sendEmail(mailOptions: MailOptions) {
        return await this.transporter.sendMail(mailOptions);
    }

    public async contactAdmin(
        username: string,
        email: string,
        message: string
    ) {
        return await this.sendEmail(
            contactAdminEmailTemplate(username, email, message)
        );
    }
}

export const emailer = new Emailer();

export const contactAdminEmailTemplate = (
    username: string,
    email: string,
    message: string
) => {
    return {
        from: {
            name: username,
            address: email,
        },
        to: process.env.GMAIL_USER,
        subject: 'Inquiry Email',
        text: `Name: ${username}\nEmail: ${email}`,
        html: `
      <h1>Name: ${username}</h1>
      <p>Email: ${email}</p>
      <p>${message}</p>
    `,
    } as MailOptions;
};
