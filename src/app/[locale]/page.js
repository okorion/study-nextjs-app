import { useTranslations } from 'next-intl';

import ImageSlideshow from '@/components/images/image-slideshow';
import { Link } from '@/i18n/navigation';

import classes from './page.module.css';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>{t('heroTitle')}</h1>
            <p>{t('heroTagline')}</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">{t('joinCommunity')}</Link>
            <Link href="/meals">{t('exploreMeals')}</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>{t('howItWorks')}</h2>
          <p>{t('howItWorksDesc1')}</p>
          <p>{t('howItWorksDesc2')}</p>
        </section>

        <section className={classes.section}>
          <h2>{t('whyNextLevel')}</h2>
          <p>{t('whyDesc1')}</p>
          <p>{t('whyDesc2')}</p>
        </section>
      </main>
    </>
  );
}
