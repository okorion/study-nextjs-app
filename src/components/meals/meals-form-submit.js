'use client';

import { useTranslations } from 'next-intl';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const t = useTranslations('MealsForm'); // ✅ 다국어 번역 적용
  const { pending } = useFormStatus();

  // 클라이언트에서 환경 변수 읽기
  const isDbWriteEnabled = process.env.NEXT_PUBLIC_ENABLE_DB_WRITE === 'true';

  return (
    <>
      {isDbWriteEnabled ? (
        <button disabled={pending}>{pending ? t('submitting') : t('shareMeal')}</button>
      ) : (
        <button disabled>⚠️ {t('dbWriteDisabled')}</button>
      )}
    </>
  );
}
