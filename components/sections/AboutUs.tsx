'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { GiFlowerStar } from 'react-icons/gi';
import { AboutUsProps } from '@/types/templates.types';

const renderExperienceIcon = (iconName: string) => {
  switch (iconName) {
    case 'GiFlowerStar':
      return <GiFlowerStar />;
    default:
      return null;
  }
};

export const AboutUs = ({ data, hideButton = false }: AboutUsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!data) return;

    if (shouldReduceMotion) {
      setDisplayValue(data.experienceValue);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        const startedAt = performance.now();

        const updateCounter = (currentTime: number) => {
          const progress = Math.min((currentTime - startedAt) / data.countDuration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(data.experienceValue * easedProgress));

          if (progress < 1) window.requestAnimationFrame(updateCounter);
        };

        window.requestAnimationFrame(updateCounter);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [data, shouldReduceMotion]);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="w-full bg-[var(--color-tone-fbf6f2)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 lg:px-8">
        <div className="relative z-20 md:col-span-2 lg:col-span-6 lg:pt-6">
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              {data.subtitle}
            </p>
            <span className="h-px w-12 bg-[var(--color-tone-d9a0a8)]" />
          </div>

          <h2 className="mt-5 max-w-[620px] font-heading text-4xl font-medium leading-[0.95] tracking-[-0.025em] text-[var(--color-primary)] sm:text-5xl lg:text-[62px]">
            <span>{data.titleLine1} </span>
            <span className="text-[var(--color-accent)]">{data.highlightedTitle}</span>
          </h2>

          <div className="mt-6 flex items-center gap-4 text-[var(--color-secondary)]">
            <span className="text-2xl">{renderExperienceIcon(data.experienceIcon)}</span>
            <span className="h-px w-20 bg-[var(--color-tone-d7b989)]" />
          </div>
        </div>

        <div className="relative h-[380px] md:col-span-2 md:h-[480px] lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:h-[520px]">
          <div className="absolute -right-4 -top-4 h-32 w-40 bg-[var(--color-tone-ead5d1)] sm:-right-6 sm:-top-6 lg:h-40 lg:w-48" />
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={data.imageMain}
              alt={data.imageMainAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex items-start md:col-span-1 lg:col-span-2 lg:row-start-2 lg:pt-16">
          <div>
            <p className="font-heading text-6xl font-medium italic leading-none text-[var(--color-accent)] lg:text-7xl">
              {displayValue}{data.experienceSuffix}
            </p>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-tone-b08064)]">
              {data.experienceLabel}
            </p>
            <span className="mt-4 block h-px w-12 bg-[var(--color-tone-d7b989)]" />
          </div>
        </div>

        <div className="relative h-[320px] md:col-span-1 md:h-[360px] lg:col-span-4 lg:col-start-3 lg:row-start-2 lg:h-[380px]">
          <Image
            src={data.experienceImage}
            alt={data.experienceImageAlt}
            fill
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center md:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:pl-2 lg:pt-8">
          <p className="max-w-xl text-sm leading-7 text-[var(--color-tone-6f6264)]">
            {data.description}
          </p>

          {!hideButton && (
            <Link
              href={data.button.url}
              className="mt-6 inline-flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-tone-b08064)] transition-colors hover:text-[var(--color-accent)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-secondary)] text-[var(--color-accent)]">
                <FaArrowRight className="text-xs" />
              </span>
              <span>{data.button.text}</span>
              <span className="h-px w-20 bg-[var(--color-tone-d7b989)]" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

