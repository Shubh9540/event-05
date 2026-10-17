import Image from 'next/image';
import { FaLeaf } from 'react-icons/fa';
import { WhyChooseUsProps } from '@/types/templates.types';

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-tone-3c3435)]">{data.subtitle}</p>
          <span className="mt-4 block h-px w-16 bg-[var(--color-tone-c8873e)]" />

          <h2 className="mt-5 max-w-xl font-heading text-4xl leading-[0.98] text-[var(--color-heading)] sm:text-5xl lg:text-[56px]">
            {data.title}{' '}
            <span className="italic text-[var(--color-tone-9f1738)]">{data.highlightedTitle}</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-tone-736a69)]">{data.description}</p>

          <div className="mt-7">
            {data.features.map((feature) => (
              <article key={feature.id} className="flex gap-5 border-b border-[var(--color-tone-d9a66f)] py-5 last:border-b-0">
                <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-[var(--color-tone-d39a5d)] bg-[var(--color-tone-fff6ee)] font-heading text-2xl text-[var(--color-tone-9f1738)] shadow-[inset_0_0_0_5px_var(--color-white)] sm:h-20 sm:w-20 sm:text-3xl">
                  {feature.number}
                </span>
                <div className="pt-1">
                  <h3 className="font-heading text-xl leading-none text-[var(--color-heading)] sm:text-2xl">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-tone-736a69)]">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative pb-16 sm:pb-20 lg:pb-12 lg:pl-8">
          <span className="absolute left-3 top-5 h-[86%] w-[90%] bg-[var(--color-tone-fff3e9)] lg:left-3" aria-hidden="true" />
          <div className="relative min-h-[460px] overflow-hidden sm:min-h-[600px] lg:min-h-[640px]">
            <Image src={data.imageMain} alt={data.imageAlt} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
          </div>

          <div className="absolute bottom-0 right-0 z-10 w-[88%] overflow-hidden bg-gradient-to-br from-[var(--color-tone-8d1732)] to-[var(--color-tone-a92c42)] px-7 py-7 text-[var(--color-white)] shadow-xl sm:w-[62%] sm:px-10 sm:py-9 lg:w-[66%]">
            <FaLeaf className="absolute -right-4 -top-4 text-8xl text-[var(--color-white)]/10" aria-hidden="true" />
            <FaLeaf className="absolute -bottom-8 left-0 rotate-45 text-8xl text-[var(--color-white)]/10" aria-hidden="true" />
            <p className="relative font-heading text-2xl leading-[1.05] sm:text-3xl lg:text-4xl">{data.calloutText}</p>
            <span className="relative mt-6 block h-px w-24 bg-[var(--color-tone-d9a66f)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

