import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

const Header = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};
export { Header };
