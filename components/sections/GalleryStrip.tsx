'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GalleryStripProps } from '@/types/templates.types';

export const GalleryStrip = ({ data }: GalleryStripProps) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || !data?.images.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let frameId = 0;
    let previousTime = performance.now();

    const moveStrip = (currentTime: number) => {
      const elapsed = currentTime - previousTime;
      previousTime = currentTime;

      if (!pausedRef.current) {
        strip.scrollLeft += elapsed * 0.045;
        if (strip.scrollLeft >= strip.scrollWidth / 2) strip.scrollLeft -= strip.scrollWidth / 2;
      }

      frameId = window.requestAnimationFrame(moveStrip);
    };

    frameId = window.requestAnimationFrame(moveStrip);
    return () => window.cancelAnimationFrame(frameId);
  }, [data]);

  if (!data?.images.length) return null;

  const repeatedImages = [...data.images, ...data.images];

  return (
    <section className="w-full overflow-hidden bg-[var(--color-tone-fbf7f4)] py-8">
      <div
        ref={stripRef}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        className="w-full overflow-hidden"
      >
        <div className="flex w-max gap-4 px-4">
          {repeatedImages.map((item, index) => (
            <div key={`${item.id}-${index}`} className="relative h-[280px] w-[72vw] flex-none overflow-hidden sm:h-[320px] sm:w-[42vw] md:w-[30vw] lg:h-[350px] lg:w-[22vw] xl:w-[18vw]">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, (min-width: 640px) 42vw, 72vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
