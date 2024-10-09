'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import { contactSchema, contactTypes } from '@/schemas/schema';
import { contactMe } from '@/actions/contactMe';

export function ContactForm({ onSend }: { onSend: () => void }) {
    const { toast } = useToast();

    const form = useForm<contactTypes>({
        resolver: zodResolver(contactSchema),
    });

    async function onSubmit(data: contactTypes) {
        const result = await contactMe(data);

        if (result?.success === false) {
            return form.setError('root', { message: result.message });
        }

        form.reset({
            name: '',
            email: '',
            message: '',
        });

        onSend();

        toast({
            variant: 'success',
            title: `${
                result?.success === true
                    ? result.message
                    : 'Message sent successfully'
            }`,
            description: `${new Date().toUTCString()}`,
        });
    }

    return (
        <div className="mt-5 md:mt-0 w-max">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-black"
                                        placeholder="Enter your name"
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-black"
                                        placeholder="Enter your email"
                                        type="email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Leave a message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter message"
                                        className="resize-none text-black"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="mt-4">
                        <Button
                            className="bg-gray-900 w-full"
                            type="submit"
                            disabled={form.formState.isSubmitting}
                        >
                            <span className="flex items-center justify-center gap-1">
                                {form.formState.isSubmitting && (
                                    <Loader2
                                        size={16}
                                        className="animate-spin"
                                    />
                                )}
                                Contact me
                            </span>
                        </Button>
                    </div>
                    <div
                        className="flex items-end space-x-1 py-3"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {form.formState.errors.root && (
                            <p className="text-xl text-red-900">
                                {form.formState.errors.root.message}
                            </p>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    );
}
