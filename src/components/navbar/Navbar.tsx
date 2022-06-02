import useDarkMode from '@/lib/hooks/useDarkMode';
import { ReactNode } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineNightsStay } from 'react-icons/md';
import clsxm from '@/lib/clsxm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
  const [theme, setTheme] = useDarkMode();

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <nav className="flex flex-row justify-between p-4 sticky top-0 z-50 my-6">
      <ul id="left">
        <NavLink
          href="/"
          className="bg-opacity-5 hover:bg-slate-600 rounded-md p-1"
        >
          <BiHomeAlt
            className="hover:text-black dark:hover:text-gray-300"
            size={32}
          />
        </NavLink>
      </ul>
      <ul id="right" className="flex flex-row">
        {/*
        <NavLink href="/blogs" underline>
          <h3 className="font-semibold">Blog</h3>
        </NavLink>
        */}
        <NavLink href="/about" underline>
          <h3 className="font-semibold">About</h3>
        </NavLink>
        <NavLink href="/contact" underline>
          <h3 className="font-semibold">Contact</h3>
        </NavLink>
        <NavItem
          className="hover:bg-slate-200 dark:hover:text-black transition-colors rounded-md p-2"
          onClick={handleThemeChange}
        >
          {theme === 'dark' ? (
            <WiDaySunny size={27} />
          ) : (
            <MdOutlineNightsStay size={27} />
          )}
        </NavItem>
      </ul>
    </nav>
  );
};

type NavItemProps = {} & React.ComponentPropsWithRef<'button'>;

const NavItem: React.FC<NavItemProps> = props => {
  const { children, className, ...restProps } = props;
  return (
    <button className={clsxm('mx-3', className)} {...restProps}>
      <li>{children}</li>
    </button>
  );
};

type NavLinkProps = {
  underline?: boolean;
} & React.ComponentPropsWithRef<'a'>;

const NavLink: React.FC<NavLinkProps> = props => {
  const router = useRouter();
  const isActive: (path: string) => boolean = name => router.pathname === name;

  const { href, underline } = props;
  const canUnderline = !!underline;

  return (
    <Link href={href ?? '/'}>
      <NavItem
        className={clsxm(
          //          isActive(href ?? '/') !== null ? 'bg-green-700' : undefined,
          canUnderline === true ? 'hover:underline' : null
        )}
      >
        {props.children}
      </NavItem>
    </Link>
  );
};

export default Navbar;
