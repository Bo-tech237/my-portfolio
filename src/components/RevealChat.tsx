'use client';

import { useEffect, useState } from 'react';
import { WhatsappIcon } from 'next-share';
import { useTranslations } from 'next-intl';

export const RevealChat = () => {
    const [isVisible, setIsVisible] = useState(false);

    const t = useTranslations('Chat');

    // Construct the share message
    const message = `${t('welcome')}\n\n${t('thankYou')}\n\n${t(
        'portfolioLink'
    )}\n\n${t('support')}`;
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappApi = process.env.NEXT_PUBLIC_WHATSAPP_API!;

    const whatsappLink = `${whatsappApi}?text=${encodedMessage}`;

    const toggleVisibility = () => {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    console.log('WhatsApp Link:', whatsappLink);
    return (
        <>
            {isVisible && (
                <div className="fixed bottom-10 right-2">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsappIcon size={40} round />
                    </a>
                </div>
            )}
        </>
    );
};
