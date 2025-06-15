import Link from 'next/link';
import { Menu } from './Menu';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Trackify
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/overview" className="hover:text-gray-600">
              Overview
            </Link>
            <Link href="/performance" className="hover:text-gray-600">
              Performance
            </Link>
            <Link href="/trade" className="hover:text-gray-600">
              Trade
            </Link>
          </div>
          <div className="grid place-items-center md:hidden">
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
} 