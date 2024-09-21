'use server';

import { emailer } from '@/email/sendEmail';
import { contactTypes } from '@/schemas/schema';

export async function contactMe(data: contactTypes) {
    const { name, email, message } = data;

    try {
        const result = await emailer.contactAdmin(name, email, message);

        console.log('nodemailer response', result);

        if (result.rejected.length > 0) {
            return {
                success: false,
                message: 'Message not sent retry later.',
            };
        }

        return {
            success: true,
            message: 'Message sent successfully',
        };
    } catch (error) {
        console.log(error);
    }
}
