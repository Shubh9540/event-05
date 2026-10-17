'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaCalendarAlt, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhoneAlt, FaRing } from 'react-icons/fa';
import { ContactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaRing': return <FaRing />;
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaHeart': return <FaHeart />;
    default: return null;
  }
};

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);
  if (!data) return null;

  return (
    <>
      <section className="w-full bg-[var(--color-white)]">
        <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0 sm:h-80 lg:h-[420px]" />
      </section>

      <section className="relative overflow-hidden bg-[var(--color-tone-fffaf6)] py-8 lg:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3"><span className="h-px w-12 bg-[var(--color-accent)]" /><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-tone-a66646)]">{data.intro.eyebrow}</p><span className="h-px w-12 bg-[var(--color-accent)]" /></div>
            <h1 className="mt-3 font-heading text-4xl leading-tight text-[var(--color-heading)] sm:text-5xl">{data.intro.title1} <span className="text-[var(--color-accent)]">{data.intro.titleHighlight}</span></h1>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-tone-b92232)]">{data.intro.subtitle}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.intro.description}</p>
          </div>

          <div className="grid grid-cols-1 overflow-hidden bg-[var(--color-white)] lg:grid-cols-[0.8fr_1.05fr_1.2fr]">
            <div className="relative min-h-[420px] lg:min-h-[590px]"><Image src={data.visual.image} alt={data.visual.imageAlt} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" /></div>
            <div className="flex flex-col justify-center px-5 py-7 sm:px-8">
              {data.contactItems.map((item) => (
                <a key={item.id} href={item.url} className="flex items-start gap-4 border-b border-[var(--color-tone-eee2dc)] py-6 last:border-b-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-tone-faeee9)] text-xl text-[var(--color-tone-b92232)]">{renderIcon(item.icon)}</span>
                  <div><h2 className="font-heading text-2xl text-[var(--color-tone-b92232)]">{item.title}</h2><div className="mt-1 text-sm leading-6 text-[var(--color-heading)]">{item.lines.map((line) => <p key={line.id}>{line.text}</p>)}</div></div>
                </a>
              ))}
            </div>

            <div className="bg-[var(--color-tone-fdf4f0)] p-5 sm:p-8">
              <h2 className="text-center font-heading text-3xl text-[var(--color-heading)]">{data.form.title}</h2>
              <div className="mx-auto mt-3 h-px w-16 bg-[var(--color-accent)]" />
              <form className="mt-7 space-y-4" onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"><input name="name" required placeholder={data.form.namePlaceholder} className="w-full border border-[var(--color-tone-eadfd8)] bg-[var(--color-white)] px-4 py-3 text-sm outline-none focus:border-[var(--color-tone-b92232)]" /><input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full border border-[var(--color-tone-eadfd8)] bg-[var(--color-white)] px-4 py-3 text-sm outline-none focus:border-[var(--color-tone-b92232)]" /></div>
                <input name="subject" required placeholder={data.form.subjectPlaceholder} className="w-full border border-[var(--color-tone-eadfd8)] bg-[var(--color-white)] px-4 py-3 text-sm outline-none focus:border-[var(--color-tone-b92232)]" />
                <textarea name="message" required rows={6} placeholder={data.form.messagePlaceholder} className="w-full resize-none border border-[var(--color-tone-eadfd8)] bg-[var(--color-white)] px-4 py-3 text-sm outline-none focus:border-[var(--color-tone-b92232)]" />
                <button type="submit" className="flex w-full items-center justify-center gap-3 bg-[var(--color-tone-b81525)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-tone-94111e)]">{data.form.buttonText}<FaArrowRight /></button>
                {submitted && <p role="status" className="border border-[var(--color-tone-d7b47c)] bg-[var(--color-tone-fff7ea)] px-4 py-3 text-sm text-[var(--color-tone-72542f)]">{data.form.successMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[380px] overflow-hidden py-12">
        <Image src={data.visual.backgroundImage} alt={data.visual.backgroundImageAlt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[var(--color-tone-5b3025)]/15" />
        <div className="relative mx-auto flex min-h-[285px] w-[calc(100%-2rem)] max-w-6xl items-center rounded-[28px] bg-[var(--color-white)]/95 px-5 py-8 sm:px-8">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            {data.features.map((feature) => <div key={feature.id} className="text-center md:border-r md:border-[var(--color-tone-eadfd8)] md:last:border-r-0"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-tone-fae9e3)] text-2xl text-[var(--color-tone-b92232)]">{renderIcon(feature.icon)}</span><h2 className="mt-3 font-heading text-2xl text-[var(--color-heading)]">{feature.title}</h2><p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-[var(--color-text)]">{feature.description}</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
};

