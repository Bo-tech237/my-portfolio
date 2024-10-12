import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import Card from '@/components/Card';
import { Fragment } from 'react';
import { useTranslations } from 'next-intl';

const testimonials = [
    {
        name: 'Alex Turner',
        avatar: memojiAvatar1,
    },
    {
        name: 'Olivia Green',
        avatar: memojiAvatar2,
    },
    {
        name: 'Daniel White',
        avatar: memojiAvatar3,
    },
    {
        name: 'Emily Carter',
        avatar: memojiAvatar4,
    },
    {
        name: 'Michael Brown',
        avatar: memojiAvatar5,
    },
];

export const TestimonialsSection = () => {
    const t = useTranslations('Testimonials');

    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t('title')}
                    description={t('description')}
                />
                <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
                    <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {testimonials.map((testimonial) => (
                                    <Card
                                        key={testimonial.name}
                                        className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                                    >
                                        <div className="flex gap-4 items-center">
                                            <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="max-h-full"
                                                />
                                            </div>
                                            <div className="">
                                                <div className="font-semibold">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    {t(
                                                        `${testimonial.name}.position`
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-4 md:mt-6 text-sm md:text-base">
                                            {t(`${testimonial.name}.text`)}
                                        </p>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
