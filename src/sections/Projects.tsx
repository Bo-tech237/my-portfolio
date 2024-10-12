import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { useTranslations } from 'next-intl';

const portfolioProjects = [
    {
        key: 'E-learningLandingPage',
        results: [
            { title: 'title1' },
            { title: 'title2' },
            { title: 'title3' },
        ],
        link: 'https://e-learning-phi-seven.vercel.app',
        image: darkSaasLandingPage,
    },
    {
        key: 'LightSaasLandingPage',
        results: [
            { title: 'title1' },
            { title: 'title2' },
            { title: 'title3' },
        ],
        link: 'https://light-landing-page-seven.vercel.app/',
        image: lightSaasLandingPage,
    },
    {
        key: 'FakeStore',
        results: [
            { title: 'title1' },
            { title: 'title2' },
            { title: 'title3' },
        ],
        link: 'https://fake-store-peach.vercel.app',
        image: aiStartupLandingPage,
    },
];

export const ProjectsSection = () => {
    const t = useTranslations('Projects');

    return (
        <section className="pb-16 lg:py-24" id="project">
            <div className="container">
                <SectionHeader
                    eyebrow={t('Header.eyebrow')}
                    title={t('Header.title')}
                    description={t('Header.description')}
                />

                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card
                            key={t(`ProjectsList.${project.key}.title`)}
                            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                            style={{
                                top: `calc(64px + ${projectIndex * 40}px)`,
                            }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>
                                            {t(
                                                `ProjectsList.${project.key}.company`
                                            )}
                                        </span>
                                        <span>&bull;</span>
                                        <span>
                                            {t(
                                                `ProjectsList.${project.key}.year`
                                            )}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                                        {t(`ProjectsList.${project.key}.title`)}
                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result) => (
                                            <li
                                                key={t(
                                                    `ProjectsList.${project.key}.results.${result.title}`
                                                )}
                                                className="flex gap-2 text-sm md:text-base text-white/50"
                                            >
                                                <CheckCircleIcon className="size-5 md:size-6" />
                                                <span className="">
                                                    {t(
                                                        `ProjectsList.${project.key}.results.${result.title}`
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link}>
                                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                            <span>{t('Header.button')}</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={t(
                                            `ProjectsList.${project.key}.title`
                                        )}
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
