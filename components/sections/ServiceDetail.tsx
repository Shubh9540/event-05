import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaCheck, FaClipboardList, FaCog, FaComments, FaHandshake, FaHeart, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { ServiceDetailProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaClipboardList': return <FaClipboardList />;
    case 'FaCog': return <FaCog />;
    case 'FaComments': return <FaComments />;
    case 'FaHandshake': return <FaHandshake />;
    case 'FaHeart': return <FaHeart />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaUsers': return <FaUsers />;
    default: return null;
  }
};

export const ServiceDetail = ({ data, serviceId }: ServiceDetailProps) => {
  if (!data) return null;

  const service = data.services.find((item) => item.id === serviceId);
  if (!service) return null;

  return (
    <section className="bg-[var(--color-white)]">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-8 px-4 py-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-12">
        <div className="relative min-h-[420px] overflow-hidden rounded-[14px] sm:min-h-[560px] lg:min-h-[620px]">
          <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-white)]/80 text-xl text-[var(--color-tone-bd7b37)] backdrop-blur-sm" aria-hidden="true"><FaHeart /></span>
        </div>

        <div className="flex flex-col justify-center">
          <div className="relative min-h-[240px] overflow-hidden rounded-[14px] sm:min-h-[280px]">
            <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="pt-8 lg:pt-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-tone-c98d50)]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-tone-b36e2e)] sm:text-xs">{service.subtitle}</p>
              <span className="h-px w-10 bg-[var(--color-tone-c98d50)]" />
            </div>
            <h1 className="max-w-2xl font-heading text-4xl leading-[0.95] text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{service.heading}</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-tone-766d6b)] sm:text-base">{service.description}</p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.highlights.map((highlight) => (
                <div key={highlight.id} className="flex items-center gap-4">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-tone-fff0df)] text-2xl text-[var(--color-tone-bd7b37)]">{renderIcon(highlight.icon)}</span>
                  <p className="text-sm font-medium leading-5 text-[var(--color-tone-352f30)] sm:text-base">{highlight.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-tone-fff7f1)]">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-4 py-8 md:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-tone-c98d50)]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-tone-b36e2e)] sm:text-xs">{service.offerSubtitle}</p>
              <span className="h-px w-10 bg-[var(--color-tone-c98d50)]" />
            </div>
            <h2 className="font-heading text-4xl leading-none text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{service.offerTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-tone-766d6b)] sm:text-base">{service.offerDescription}</p>
            <ul className="mt-6 space-y-3">
              {service.offers.map((offer) => (
                <li key={offer.id} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-tone-5f5a5b)] sm:text-base">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-tone-b87a3b)] text-[10px] text-[var(--color-white)]"><FaCheck aria-hidden="true" /></span>
                  <span>{offer.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-[620px]">
            <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 text-center md:px-6 lg:px-8 lg:py-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[var(--color-tone-c98d50)]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-tone-b36e2e)] sm:text-xs">{data.processSubtitle}</p>
          <span className="h-px w-10 bg-[var(--color-tone-c98d50)]" />
        </div>
        <h2 className="font-heading text-4xl leading-none text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.processTitle}</h2>
        <div className="relative mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
          <span className="absolute left-[10%] right-[10%] top-10 hidden border-t-2 border-dotted border-[var(--color-tone-dfbd98)] lg:block" />
          {data.processSteps.map((step) => (
            <article key={step.id} className="relative z-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-tone-fff0df)] text-3xl text-[var(--color-tone-bd7b37)]">{renderIcon(step.icon)}</div>
              <p className="mt-3 font-heading text-2xl text-[var(--color-tone-b36e2e)]">{step.number}</p>
              <h3 className="mt-1 font-heading text-xl text-[var(--color-heading)]">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-sm leading-5 text-[var(--color-tone-7b7371)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

