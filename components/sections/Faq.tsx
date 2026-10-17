'use client';

import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaqProps } from '@/types/templates.types';

export const Faq = ({ data }: FaqProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (!data?.items.length) return null;

  return (
    <section className="bg-[var(--color-tone-fffdfa)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
        <div className="mx-auto mb-7 text-center lg:mb-9">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[var(--color-tone-c8873e)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-tone-b36e2e)]">{data.subtitle}</p>
            <span className="h-px w-12 bg-[var(--color-tone-c8873e)]" />
          </div>
          <h2 className="font-heading text-4xl leading-none text-[var(--color-heading)] sm:text-5xl lg:text-[56px]">
            {data.title1}{' '}
            <span className="text-[var(--color-tone-b67a39)]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--color-tone-786f6e)]">{data.description}</p>
        </div>

        <div>
          {data.items.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <article key={item.id} className="border-b border-[var(--color-tone-e4d7ce)]">
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  aria-label={isOpen ? `${data.collapseLabel}: ${item.question}` : `${data.expandLabel}: ${item.question}`}
                  className="flex w-full items-center gap-5 py-4 text-left text-[var(--color-heading)] transition-colors duration-300 hover:text-[var(--color-tone-9f1738)]"
                >
                  <span className="flex-1 font-heading text-xl leading-6 sm:text-2xl">{item.question}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-sm">{isOpen ? <FaMinus aria-hidden="true" /> : <FaPlus aria-hidden="true" />}</span>
                </button>
                <div id={`${item.id}-answer`} className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-sm leading-7 text-[var(--color-tone-756d6b)]">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

