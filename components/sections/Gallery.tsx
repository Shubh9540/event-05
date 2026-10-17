'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { GalleryImageProps, GalleryProps } from '@/types/templates.types';

const GalleryImage = ({ item, size, index, openLabel, onOpen }: GalleryImageProps) => (
  <button
    type="button"
    onClick={() => onOpen(index)}
    aria-label={`${openLabel}: ${item.imageAlt}`}
    className={`group relative block w-full overflow-hidden ${size === 'tall' ? 'h-[588px] xl:h-[668px]' : 'h-[280px] xl:h-[320px]'}`}
  >
    <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
  </button>
);

export const Gallery = ({ data }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null || !data?.images.length) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((activeIndex - 1 + data.images.length) % data.images.length);
      if (event.key === 'ArrowRight') setActiveIndex((activeIndex + 1) % data.images.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, data]);

  if (!data?.images.length) return null;

  const showPrevious = () => setActiveIndex((current) => current === null ? 0 : (current - 1 + data.images.length) % data.images.length);
  const showNext = () => setActiveIndex((current) => current === null ? 0 : (current + 1) % data.images.length);
  const activeImage = activeIndex === null ? null : data.images[activeIndex];

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
          {data.images.map((item, index) => (
            <button key={item.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`${data.openLabel}: ${item.imageAlt}`} className="relative h-[320px] overflow-hidden sm:h-[360px]">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </button>
          ))}
        </div>

        <div className="hidden grid-cols-3 gap-7 lg:grid">
          <div className="space-y-7">
            {[0, 1, 2, 0].map((imageIndex, position) => (
              <GalleryImage key={`${data.images[imageIndex].id}-${position}`} item={data.images[imageIndex]} index={imageIndex} size="short" openLabel={data.openLabel} onOpen={setActiveIndex} />
            ))}
          </div>
          <div className="space-y-7">
            {[3, 4, 5].map((imageIndex, position) => (
              <GalleryImage key={data.images[imageIndex].id} item={data.images[imageIndex]} index={imageIndex} size={position === 0 ? 'tall' : 'short'} openLabel={data.openLabel} onOpen={setActiveIndex} />
            ))}
          </div>
          <div className="space-y-7">
            {[6, 7, 8].map((imageIndex, position) => (
              <GalleryImage key={data.images[imageIndex].id} item={data.images[imageIndex]} index={imageIndex} size={position === 1 ? 'tall' : 'short'} openLabel={data.openLabel} onOpen={setActiveIndex} />
            ))}
          </div>
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={activeImage.imageAlt}>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label={data.closeLabel} className="absolute inset-0 bg-[#1f1518]/90 backdrop-blur-sm" />
          <div className="relative z-10 h-[75vh] w-full max-w-5xl">
            <Image src={activeImage.image} alt={activeImage.imageAlt} fill sizes="100vw" className="object-contain" priority />
            <button type="button" onClick={() => setActiveIndex(null)} aria-label={data.closeLabel} className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-[#9f1738] text-lg text-white shadow-lg transition-colors duration-300 hover:bg-white hover:text-[#9f1738]"><FaTimes aria-hidden="true" /></button>
            <button type="button" onClick={showPrevious} aria-label={data.previousLabel} className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#9f1738] shadow-lg transition-colors duration-300 hover:bg-[#9f1738] hover:text-white sm:-left-4"><FaArrowLeft aria-hidden="true" /></button>
            <button type="button" onClick={showNext} aria-label={data.nextLabel} className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#9f1738] shadow-lg transition-colors duration-300 hover:bg-[#9f1738] hover:text-white sm:-right-4"><FaArrowRight aria-hidden="true" /></button>
          </div>
        </div>
      )}
    </section>
  );
};
