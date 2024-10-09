'use client';

import { ContactForm } from './ContactForm';
import { Button } from './ui/button';
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

    return (
        <div>
            <Dialog onOpenChange={setIsOpen} open={isOpen}>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className="w-80 sm:max-w-[425px] flex flex-col items-center bg-popover-foreground text-popover">
                    <DialogHeader>
                        <DialogTitle>Let&apos;s get in touch</DialogTitle>
                        <DialogDescription>
                            Will reply to you as soon as possible
                        </DialogDescription>
                    </DialogHeader>

                    <ContactForm onSend={() => setIsOpen(false)} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ContactDialog;
