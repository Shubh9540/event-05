'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaArrowRight, FaArrowUp, FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';

const renderButtonIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaArrowUp':
      return <FaArrowUp className="rotate-45 text-sm" />;
    case 'FaArrowRight':
      return <FaArrowRight className="text-sm" />;
    default:
      return null;
  }
};

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-white)] px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex h-20 w-full max-w-[1360px] items-center justify-between gap-4 lg:h-[86px]">
        <Link href={data.logoUrl} aria-label={data.logoAlt} className="flex shrink-0 items-center">
          <img src={data.logo} alt={data.logoAlt} className="h-auto w-[210px] object-contain sm:w-[250px] lg:w-[285px]" />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative flex items-center gap-1 whitespace-nowrap py-3 font-navigation text-base font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:bg-[var(--color-accent)] after:transition-transform after:duration-300 xl:text-[17px] ${isActive ? 'text-[var(--color-accent)] after:scale-x-100' : 'text-[var(--color-primary-dark)] after:scale-x-0 hover:text-[var(--color-accent)] hover:after:scale-x-100'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-[10px]" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <Link
            href={data.contactButton.url}
            className="hidden h-11 items-center gap-3 rounded-full bg-[var(--color-tone-8f1835)] pl-5 pr-1 font-navigation text-base font-medium text-[var(--color-white)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-tone-7c132d)] lg:flex xl:gap-4 xl:pl-6 xl:text-[17px]"
          >
            <span>{data.contactButton.text}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-white)]">
              {renderButtonIcon(data.contactButton.icon)}
            </span>
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-xl text-[var(--color-primary)] shadow-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto rounded-b-2xl border border-t-0 border-[var(--color-border)] bg-[var(--color-white)] p-4 shadow-[var(--shadow-mobile-menu)] lg:hidden">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-[var(--color-border)] px-3 py-3.5 font-navigation text-lg font-medium transition-colors ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary-dark)] hover:text-[var(--color-accent)]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-xs" />}
              </Link>
            );
          })}
          <Link
            href={data.contactButton.url}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-between rounded-full bg-[var(--color-tone-8f1835)] py-1.5 pl-6 pr-1.5 font-navigation text-lg font-medium text-[var(--color-white)]"
          >
            <span>{data.contactButton.text}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-white)]">
              {renderButtonIcon(data.contactButton.icon)}
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};
