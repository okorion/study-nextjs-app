import { useTranslations } from 'next-intl';
import Image from 'next/image';

import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import mealIcon from '@/assets/icons/meal.png';

import classes from './page.module.css';

export default function CommunityPage() {
  const t = useTranslations('Community'); // ✅ 다국어 번역 적용

  return (
    <>
      <header className={classes.header}>
        <h1>
          {t('title')} <span className={classes.highlight}>{t('titleHighlight')}</span>
        </h1>
        <p>{t('description')}</p>
      </header>
      <main className={classes.main}>
        <h2>{t('perksTitle')}</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt={t('perks.share')} />
            <p>{t('perks.share')}</p>
          </li>
          <li>
            <Image src={communityIcon} alt={t('perks.friends')} />
            <p>{t('perks.friends')}</p>
          </li>
          <li>
            <Image src={eventsIcon} alt={t('perks.events')} />
            <p>{t('perks.events')}</p>
          </li>
        </ul>
      </main>
    </>
  );
}
