import { Link, usePathname } from '@/i18n/navigation';

import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={href.endsWith(path) ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
}
