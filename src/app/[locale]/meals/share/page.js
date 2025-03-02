'use client';

import { useTranslations } from 'next-intl';

import { useFormState } from 'react-dom';

import ImagePicker from '@/components/meals/image-picker';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import { shareMeal } from '@/lib/action';

import classes from './page.module.css';

export default function ShareMealPage() {
  const t = useTranslations('ShareMeal'); // ✅ 다국어 번역 적용
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          {t('title')} <span className={classes.highlight}>{t('highlight')}</span>
        </h1>
        <p>{t('description')}</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">{t('nameLabel')}</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">{t('emailLabel')}</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">{t('mealTitleLabel')}</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">{t('summaryLabel')}</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">{t('instructionsLabel')}</label>
            <textarea id="instructions" name="instructions" rows="10" required></textarea>
          </p>
          <ImagePicker label={t('imageLabel')} name="image" />

          {state.message && <p>{state.message}</p>}

          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
