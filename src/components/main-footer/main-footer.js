'use client';

import classes from './main-footer.module.css';

export default function MainFooter() {
  return (
    <footer className={classes.footer}>
      <p>© 2025 okorion Next.js Project. All rights reserved.</p>

      <select
        className={classes.dropdown}
        value={'en'}
        // onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="ko">🇰🇷 한국어</option>
        <option value="en">🇺🇸 English</option>
      </select>
    </footer>
  );
}
