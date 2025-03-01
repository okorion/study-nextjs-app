import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import MainFooter from '@/components/main-footer/main-footer.js';
import MainHeader from '@/components/main-header/main-header.js';
import { routing } from '@/i18n/routing';

import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default async function RootLocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MainHeader />
          {children}
          <MainFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
