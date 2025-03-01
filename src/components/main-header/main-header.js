'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import { Link, usePathname } from '@/i18n/navigation';

import MainHeaderBackground from './main-header-background';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  const t = useTranslations('Header');

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg.src} alt={t('logoAlt')} width={80} height={80} priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">{t('browseMeals')}</NavLink>
            </li>
            <li>
              <NavLink href="/community">{t('community')}</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
