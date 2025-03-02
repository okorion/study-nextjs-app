import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';

import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  const t = useTranslations('MealsItem');

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>{t('detailLabel')}</Link>
        </div>
      </div>
    </article>
  );
}
