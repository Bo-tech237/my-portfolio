'use client';

import { useParams } from 'next/navigation';
import { ReactNode, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label,
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    // const isDesktop = useMediaQuery('(min-width: 768px)');

    function onSelectChange(value: string) {
        const nextLocale = value as Locale;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <Select
            defaultValue={defaultValue}
            onValueChange={onSelectChange}
            disabled={isPending}
        >
            <SelectTrigger className="bg-emerald-300/30 text-white w-[140px]">
                <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent side="top" className="bg-emerald-300/30 text-white">
                {children}
            </SelectContent>
        </Select>
    );
}
