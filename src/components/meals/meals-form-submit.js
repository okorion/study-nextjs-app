'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  // 클라이언트에서 환경 변수 읽기
  const isDbWriteEnabled = process.env.NEXT_PUBLIC_ENABLE_DB_WRITE === 'true';

  return (
    <>
      {isDbWriteEnabled ? (
        <button disabled={pending}>{pending ? 'Submitting...' : 'Share Meal'}</button>
      ) : (
        <button disabled>⚠️ Database writes are disabled in this environment.</button>
      )}
    </>
  );
}
