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
import { useTranslations } from 'next-intl';

export function ContactForm({ onSend }: { onSend: () => void }) {
    const { toast } = useToast();

    const t = useTranslations('ContactForm');

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
                result?.success === true ? result.message : t('success')
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
                                <FormLabel>{t('name')}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-black"
                                        placeholder={t('placeholder.name')}
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
                                <FormLabel>{t('email')}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-black"
                                        placeholder={t('placeholder.email')}
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
                                <FormLabel>{t('message')}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={t('placeholder.message')}
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
                                {t('submit')}
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
