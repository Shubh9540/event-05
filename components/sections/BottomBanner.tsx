'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { BottomBannerProps } from '@/types/templates.types';

export const BottomBanner = ({ data }: BottomBannerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  if (!data) return null;

  const videoId = data.videoUrl.includes('youtu.be/')
    ? data.videoUrl.split('youtu.be/')[1]?.split(/[?&]/)[0]
    : data.videoUrl.split('v=')[1]?.split('&')[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <section className="w-full bg-white px-4 py-8 md:px-6 lg:px-8 lg:py-12">
      <div className="relative mx-auto min-h-[300px] w-full max-w-[1320px] overflow-hidden sm:min-h-[420px] lg:min-h-[570px]">
        <Image src={data.image} alt={data.imageAlt} fill sizes="100vw" className="object-cover" />
        <span className="absolute inset-0 bg-[#21181a]/10" />
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={data.playLabel}
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-2xl text-[#b86f63] shadow-[0_0_0_14px_rgba(255,255,255,0.18)] transition-transform duration-300 hover:scale-105 sm:h-24 sm:w-24 sm:text-3xl"
        >
          <FaPlay className="ml-1" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={data.videoTitle}>
          <button type="button" onClick={() => setIsOpen(false)} aria-label={data.closeLabel} className="absolute inset-0 bg-[#1f1518]/90 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={data.closeLabel}
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-[#9f1738] text-lg text-white shadow-lg transition-colors duration-300 hover:bg-white hover:text-[#9f1738] sm:right-4 sm:top-4"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <div className="aspect-video overflow-hidden bg-black shadow-2xl">
              <iframe
                src={embedUrl}
                title={data.videoTitle}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
