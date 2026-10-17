'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaLeaf, FaQuoteRight } from 'react-icons/fa';
import { TestimonialProps } from '@/types/templates.types';

export const Testimonial = ({ data }: TestimonialProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.testimonials.length) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.testimonials.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.testimonials.length) return null;

  const activeTestimonial = data.testimonials[activeIndex];
  const showPrevious = () => setActiveIndex((current) => (current - 1 + data.testimonials.length) % data.testimonials.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % data.testimonials.length);

  return (
    <section className="w-full overflow-hidden bg-[#fffaf6] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b55d55]">{data.subtitle}</p>
            <span className="h-px w-12 bg-[#d1a06d]" />
          </div>
          <h2 className="mt-5 max-w-md font-heading text-4xl leading-[0.98] text-[#292325] sm:text-5xl lg:text-[56px]">
            {data.title1}{' '}
            <span className="text-[#b55d55]">{data.highlightedTitle}</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#756d6b]">{data.description}</p>

          <div className="mt-8 flex items-center gap-6">
            {data.testimonials.map((testimonial, index) => (
              <button key={testimonial.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`${data.slideLabel} ${index + 1}`} className="relative">
                <span className={`relative block h-16 w-16 overflow-hidden rounded-full bg-[#f0e5df] transition-all duration-300 sm:h-20 sm:w-20 ${activeIndex === index ? 'ring-2 ring-[#b55d55] ring-offset-4 ring-offset-[#fffaf6]' : 'opacity-70 hover:opacity-100'}`}>
                  <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="80px" className="object-cover" />
                </span>
                {activeIndex === index && (
                  <span className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#b55d55] text-sm text-white"><FaQuoteRight aria-hidden="true" /></span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-7">
            <span className="block h-px w-6 bg-[#c8873e]" />
            <h3 className="mt-3 font-heading text-2xl text-[#a94d4d]">{activeTestimonial.name}</h3>
            <p className="mt-1 text-sm text-[#756d6b]">{activeTestimonial.location}</p>
          </div>

          <div className="mt-7 flex gap-4">
            <button type="button" onClick={showPrevious} aria-label={data.previousLabel} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7a0a0] text-[#b55d55] transition-colors duration-300 hover:bg-[#b55d55] hover:text-white"><FaArrowLeft aria-hidden="true" /></button>
            <button type="button" onClick={showNext} aria-label={data.nextLabel} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b55d55] text-white transition-colors duration-300 hover:bg-[#8f253a]"><FaArrowRight aria-hidden="true" /></button>
          </div>
        </div>

        <div className="relative border border-[#eadbd1] bg-white px-7 py-9 shadow-[0_14px_45px_rgba(96,62,55,0.08)] sm:px-12 sm:py-12 lg:px-16 lg:py-14">
          <span className="absolute left-0 top-0 h-16 w-16 rounded-tl-[38px] border-l-2 border-t-2 border-[#c8873e]" aria-hidden="true" />
          <FaLeaf className="absolute right-5 top-5 rotate-[-30deg] text-6xl text-[#d8ad82]/55" aria-hidden="true" />
          <FaLeaf className="absolute bottom-6 right-6 rotate-[25deg] text-8xl text-[#d8ad82]/55" aria-hidden="true" />
          <FaQuoteRight className="relative text-5xl text-[#ecd5d0] sm:text-6xl" aria-hidden="true" />

          <div className="relative mt-4 max-w-3xl">
            <p className="font-heading text-base leading-7 text-[#453d3e] sm:text-lg sm:leading-8">{activeTestimonial.quote}</p>
            {activeTestimonial.secondaryQuote && <p className="mt-5 font-heading text-base leading-7 text-[#453d3e] sm:text-lg sm:leading-8">{activeTestimonial.secondaryQuote}</p>}

            <span className="mt-7 block h-px w-12 bg-[#c8873e]" />
            <h3 className="mt-3 font-heading text-2xl text-[#292325]">{activeTestimonial.name}</h3>
            <p className="mt-1 text-sm text-[#756d6b]">{activeTestimonial.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

