'use client';

import { useEffect, useState } from 'react';
import { WhatsappShareButton, WhatsappIcon } from 'next-share';
import { useTranslations } from 'next-intl';

export const RevealChat = () => {
    const [isVisible, setIsVisible] = useState(false);

    const t = useTranslations('Chat');

    // Construct the share message
    const message = `${t('welcome')}\n\n${t('thankYou')}\n\n${t(
        'portfolioLink'
    )}\n\n${t('support')}`;
    const encodedMessage = encodeURIComponent(message);

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

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-10 right-2">
                    <WhatsappShareButton
                        url={process.env.WHATSAPP_API!}
                        title={encodedMessage}
                    >
                        <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                </div>
            )}
        </>
    );
};
