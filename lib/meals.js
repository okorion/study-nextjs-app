import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

import { dummyMeals } from './dummy-data';

const isDbWriteEnabled = process.env.NEXT_PUBLIC_ENABLE_DB_WRITE === 'true';
const db = isDbWriteEnabled ? sql('meals.db') : null;

export async function getMeals() {
  if (!isDbWriteEnabled) {
    console.log('⚠️ Using dummy meals because DB write is disabled.');
    return dummyMeals;
  }

  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  if (!isDbWriteEnabled) {
    console.log(`⚠️ Using dummy meal for slug: ${slug}`);
    return dummyMeals.find((meal) => meal.slug === slug) || null;
  }

  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  if (!isDbWriteEnabled) {
    throw new Error('Database writes are disabled in this environment.');
  }

  // XSS 방지 및 Slugify 적용
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  if (!meal.image || !meal.image.name) {
    throw new Error('Invalid image file.');
  }

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const filePath = `public/images/${fileName}`;

  try {
    const stream = fs.createWriteStream(filePath);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error('Saving image failed!');
      }
    });

    meal.image = `/images/${fileName}`;
  } catch (error) {
    throw new Error('Error writing image file.');
  }

  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `,
  ).run(meal);
}
