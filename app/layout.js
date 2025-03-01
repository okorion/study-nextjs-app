import MainFooter from '@/components/main-footer/main-footer.js';
import MainHeader from '@/components/main-header/main-header.js';
import { LanguageProvider } from '@/lib/context/LanguageContext';

import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <MainHeader />
          {children}
          <MainFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
