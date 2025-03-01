'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from './meals';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  // 서버 환경 변수 확인 (배포 환경에서 DB 쓰기 제한)
  const isDbWriteEnabled = process.env.NEXT_PUBLIC_ENABLE_DB_WRITE === 'true';

  if (!isDbWriteEnabled) {
    return { message: 'Database writes are disabled in this environment.' };
  }

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.image) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: 'Invalid input.' };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}
