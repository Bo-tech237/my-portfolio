import { useTranslations } from 'next-intl';

export const Header = () => {
    const t = useTranslations('Nav');

    return (
        <div className="flex items-center justify-center fixed top-3 z-10 w-full">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="#hero" className="nav-item">
                    {t('nav1')}
                </a>
                <a href="#project" className="nav-item">
                    {t('nav2')}
                </a>
                <a href="#about" className="nav-item">
                    {t('nav3')}
                </a>
                <a
                    href="#contact"
                    className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                >
                    {t('nav4')}
                </a>
            </nav>
        </div>
    );
};
