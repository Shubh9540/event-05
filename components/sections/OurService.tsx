import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBirthdayCake,
  FaBuilding,
  FaCamera,
  FaHeart,
  FaLeaf,
  FaMapMarkerAlt,
  FaMusic,
  FaUtensils,
} from 'react-icons/fa';
import { OurServiceProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBirthdayCake':
      return <FaBirthdayCake />;
    case 'FaBuilding':
      return <FaBuilding />;
    case 'FaCamera':
      return <FaCamera />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaLeaf':
      return <FaLeaf />;
    case 'FaUtensils':
      return <FaUtensils />;
    case 'FaMusic':
      return <FaMusic />;
    case 'FaHeart':
      return <FaHeart />;
    default:
      return null;
  }
};

export const OurService = ({ data, limit }: OurServiceProps) => {
  if (!data?.services.length) return null;

  const visibleServices = typeof limit === 'number' ? data.services.slice(0, limit) : data.services;

  return (
    <section id="our-services" className="w-full bg-[var(--color-tone-fffaf7)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-tone-cf9a63)]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-[var(--color-tone-9f1738)] sm:text-xs">
              {data.subtitle}
            </p>
            <span className="h-px w-10 bg-[var(--color-tone-cf9a63)]" />
          </div>
          <h2 className="font-heading text-3xl leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.title}{' '}
            <span className="text-[var(--color-tone-b66b25)]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-tone-786e6d)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="overflow-hidden border border-[var(--color-tone-f1e5dd)]">
          {visibleServices.map((service, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article id={service.id} key={service.id} className="grid scroll-mt-28 grid-cols-1 md:grid-cols-2">
                <div className={`relative h-[300px] overflow-hidden sm:h-[360px] lg:h-[410px] ${imageFirst ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[var(--color-bg-main)] p-7 sm:min-h-[360px] sm:p-10 lg:min-h-[410px] lg:p-14 ${imageFirst ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative z-10">
                    <div className="mb-1 flex items-center gap-4">
                      <span className="font-heading text-5xl leading-none text-[var(--color-tone-eadfd7)] lg:text-6xl">{service.number}</span>
                      <span className="h-px w-12 bg-[var(--color-tone-d3a071)]" />
                    </div>
                    <h3 className="font-heading text-3xl leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-[44px]">
                      {service.title}{' '}
                      {service.highlightedTitle && <span className="text-[var(--color-tone-b66b25)]">{service.highlightedTitle}</span>}
                    </h3>
                  </div>

                  <Link href={service.url} className="relative z-10 mt-8 inline-flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-tone-a85b43)] transition-colors duration-300 hover:text-[var(--color-tone-79142d)] sm:text-xs">
                    <span className="border-b border-[var(--color-tone-d7aa83)] pb-1">{data.linkText}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-tone-c9905d)] text-sm">
                      <FaArrowRight aria-hidden="true" />
                    </span>
                  </Link>

                  <span className="pointer-events-none absolute bottom-6 right-6 text-7xl text-[var(--color-tone-dfc8ad)]/55 sm:text-8xl" aria-hidden="true">
                    {renderIcon(service.decorationIcon)}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
