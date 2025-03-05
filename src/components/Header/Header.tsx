// Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            {/* Update this section with your logo */}
            <Image 
              src="/images/logo.png"
              alt="Ai2 Logo" 
              width={150} // adjust based on your logo dimensions
              height={50} // adjust based on your logo dimensions
              className={styles.logoImage}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          {/* <NavLink href="/technologies">Open technologies +</NavLink> */}
          {/* <NavLink href="/research">Research +</NavLink> */}
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          {/* <NavLink href="/playground">Playground</NavLink> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;