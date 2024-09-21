import * as z from 'zod';

export const contactSchema = z.object({
    name: z.string().min(1, { message: 'Name required' }),
    email: z.string().min(1, { message: 'Email required' }).email(),
    message: z.string().min(1, { message: 'Message required' }).min(10, {
        message: 'Message must be at least 10 characters.',
    }),
});

export type contactTypes = z.infer<typeof contactSchema>;
