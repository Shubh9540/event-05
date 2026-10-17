import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data, ui }: BreadcrumbProps) => {
  if (!data || !ui) return null;

  return (
    <section
      className="relative flex min-h-64 w-full items-center justify-center overflow-hidden bg-[var(--color-tone-f2f2ee)] bg-cover bg-center px-4 py-10 sm:min-h-72 lg:min-h-80"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
      >
        <h1 className="font-heading text-4xl font-semibold leading-none tracking-[-0.025em] text-[var(--color-primary-dark)] sm:text-[42px]">
          {data.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[var(--color-text)]">
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {path.url ? (
                <Link href={path.url} className="transition-colors duration-300 hover:text-[var(--color-accent)]">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              {index < data.paths.length - 1 && <span className="text-[var(--color-accent)]">{ui.breadcrumbSeparator}</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
