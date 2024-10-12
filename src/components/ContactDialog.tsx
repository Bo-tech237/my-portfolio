'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from './ContactForm';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
};

function ContactDialog({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const t = useTranslations('ContactDialog');

    return (
        <div className="z-40">
            <Dialog onOpenChange={setIsOpen} open={isOpen}>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className="w-80 sm:max-w-[425px] flex flex-col items-center bg-popover-foreground text-popover">
                    <DialogHeader>
                        <DialogTitle>{t('title')}</DialogTitle>
                        <DialogDescription>
                            {t('description')}
                        </DialogDescription>
                    </DialogHeader>

                    <ContactForm onSend={() => setIsOpen(false)} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ContactDialog;
