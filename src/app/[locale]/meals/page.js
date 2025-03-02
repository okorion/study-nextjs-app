import { Suspense } from 'react';

import { getTranslations } from 'next-intl/server';

import MealsGrid from '@/components/meals/meals-grid';
import { Link } from '@/i18n/navigation';
import { getMeals } from '@/lib/meals';

import classes from './page.module.css';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community!',
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  const t = await getTranslations('Meals');

  return (
    <>
      <header className={classes.header}>
        <h1>
          {t('title')} <span className={classes.highlight}>{t('highlight')}</span>
        </h1>
        <p>{t('description')}</p>
        <p className={classes.cta}>
          <Link href="/meals/share">{t('shareRecipe')}</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>{t('loading')}</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
