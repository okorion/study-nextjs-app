'use client';

import { useEffect, useState } from 'react';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';

import classes from './main-footer.module.css';

export default function MainFooter() {
  const router = useRouter();
  const path = usePathname();
  const locale = useLocale();

  // ✅ 현재 언어 감지 (useState 사용하여 변경 유지)
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale); // ✅ 경로 변경 시 select 값 업데이트
  }, [locale]);

  // ✅ 언어 변경 시 URL 업데이트
  const handleLanguageChange = (e) => {
    const newLocale = e.target.value; // 선택한 언어 가져오기

    // ✅ select 값 업데이트 (새로고침 없이 반영)
    setCurrentLocale(newLocale);

    // ✅ 새로운 언어 적용 후 이동 (Next.js의 `router.push()`에 `locale` 옵션 사용)
    router.push(path, { locale: newLocale });
  };

  return (
    <footer className={classes.footer}>
      <p>© 2025 okorion Next.js Project. All rights reserved.</p>

      <select
        className={classes.dropdown}
        value={currentLocale}
        onChange={handleLanguageChange} // ✅ 선택된 값으로 언어 변경
      >
        <option value="ko">🇰🇷 한국어</option>
        <option value="en">🇺🇸 English</option>
      </select>
    </footer>
  );
}
