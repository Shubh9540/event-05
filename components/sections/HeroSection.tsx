'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { HeroSectionProps } from '@/types/templates.types';

export const HeroSection = ({ data }: HeroSectionProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = data?.slides || [];
  const autoplayDelay = data?.autoplayDelay;

  useEffect(() => {
    if (slides.length <= 1 || !autoplayDelay) return;

    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [autoplayDelay, slides.length]);

  if (!data || slides.length === 0) return null;

  const currentSlide = slides[activeSlide];
  const showPreviousSlide = () => {
    setActiveSlide((currentSlideIndex) => (currentSlideIndex - 1 + slides.length) % slides.length);
  };
  const showNextSlide = () => {
    setActiveSlide((currentSlideIndex) => (currentSlideIndex + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-white)]">
      <Image
        src={data.decorativeImage}
        alt={data.decorativeImageAlt}
        width={360}
        height={280}
        className="pointer-events-none absolute -left-16 top-40 z-10 h-auto w-52 object-contain opacity-90 sm:w-64 lg:-left-10 lg:top-44 lg:w-72"
      />
      <Image
        src={data.decorativeImage}
        alt=""
        width={280}
        height={220}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-36 z-10 hidden h-auto w-56 -scale-x-100 object-contain opacity-30 lg:block"
      />

      <div className="relative mx-auto min-h-[610px] w-full max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 lg:min-h-[590px] lg:px-10 lg:pb-12 lg:pt-6">
        <div className="absolute right-[39%] top-4 hidden h-36 w-40 bg-[var(--color-tone-f7e8e7)] lg:block" />
        <div className="absolute bottom-20 right-[43%] hidden h-28 w-36 bg-[var(--color-tone-fbefeb)] lg:block" />

        <div key={currentSlide.id} className="relative z-20 animate-fade-in-up lg:min-h-[520px]">
          <div className="relative z-20 max-w-xl pt-3 sm:pt-8 lg:absolute lg:left-[5%] lg:top-1/2 lg:w-[48%] lg:max-w-none lg:-translate-y-1/2 lg:pt-0">
            <div className="mb-4 flex items-center gap-3 pl-1 sm:gap-4">
              <span className="h-px w-10 bg-[var(--color-accent-light)] sm:w-12" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)] sm:text-xs">
                {currentSlide.eyebrow}
              </p>
              <span className="h-px w-10 bg-[var(--color-accent-light)] sm:w-12" />
            </div>

            <h1 className="font-heading text-5xl font-medium leading-[0.82] tracking-[-0.035em] text-[var(--color-primary)] sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px]">
              <span className="block italic">{currentSlide.titleLine1}</span>
              <span className="ml-12 mt-3 block text-[var(--color-accent)] sm:ml-20 lg:ml-24">
                {currentSlide.highlightedTitle}
              </span>
            </h1>
          </div>

          <div className="relative mt-10 ml-auto h-[330px] w-[88%] sm:h-[410px] sm:w-[76%] lg:absolute lg:right-[3%] lg:top-0 lg:mt-0 lg:h-[510px] lg:w-[59%]">
            <Image
              src={currentSlide.image}
              alt={currentSlide.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 88vw, 59vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute bottom-8 right-0 z-30 h-32 w-48 border-[7px] border-[var(--color-white)] bg-[var(--color-white)] shadow-[var(--shadow-hero-card)] sm:bottom-10 sm:h-40 sm:w-60 lg:bottom-10 lg:right-[1%] lg:h-[170px] lg:w-[255px]">
            <Image
              src={currentSlide.secondaryImage}
              alt={currentSlide.secondaryImageAlt}
              fill
              sizes="(max-width: 639px) 192px, 255px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="absolute bottom-1 right-5 z-40 flex items-center gap-3 sm:right-8 lg:bottom-1 lg:right-[5%]">
          <button
            type="button"
            aria-label={data.previousSlideLabel}
            onClick={showPreviousSlide}
            className="flex h-10 w-12 items-center justify-center text-2xl text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
          >
            <FiArrowLeft />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`${data.slideNavigationLabel} ${index + 1}`}
                aria-current={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                className={`h-px transition-all duration-300 ${activeSlide === index ? 'w-10 bg-[var(--color-accent)]' : 'w-5 bg-[var(--color-tone-d9c8c4)] hover:bg-[var(--color-accent-light)]'}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={data.nextSlideLabel}
            onClick={showNextSlide}
            className="flex h-10 w-12 items-center justify-center text-2xl text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
