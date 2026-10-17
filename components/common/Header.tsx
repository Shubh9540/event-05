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
    <header className="sticky top-0 z-50 w-full bg-white px-4 sm:px-6 lg:px-10">
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
                className={`relative flex items-center gap-1 whitespace-nowrap py-3 font-navigation text-base font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:bg-[#b6485f] after:transition-transform after:duration-300 xl:text-[17px] ${isActive ? 'text-[#b6485f] after:scale-x-100' : 'text-[#261b1e] after:scale-x-0 hover:text-[#b6485f] hover:after:scale-x-100'}`}
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
            className="hidden h-11 items-center gap-3 rounded-full bg-[#8f1835] pl-5 pr-1 font-navigation text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7c132d] lg:flex xl:gap-4 xl:pl-6 xl:text-[17px]"
          >
            <span>{data.contactButton.text}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c99a5b] text-white">
              {renderButtonIcon(data.contactButton.icon)}
            </span>
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadbd6] bg-white text-xl text-[#3f2a2f] shadow-sm transition-colors hover:border-[#b6485f] hover:text-[#b6485f] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto rounded-b-2xl border border-t-0 border-[#eadbd6] bg-white p-4 shadow-[0_18px_45px_rgba(63,42,47,0.16)] lg:hidden">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-[#eadbd6] px-3 py-3.5 font-navigation text-lg font-medium transition-colors ${isActive ? 'text-[#b6485f]' : 'text-[#261b1e] hover:text-[#b6485f]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-xs" />}
              </Link>
            );
          })}
          <Link
            href={data.contactButton.url}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-between rounded-full bg-[#8f1835] py-1.5 pl-6 pr-1.5 font-navigation text-lg font-medium text-white"
          >
            <span>{data.contactButton.text}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c99a5b] text-white">
              {renderButtonIcon(data.contactButton.icon)}
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};
