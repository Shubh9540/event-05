'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaBirthdayCake, FaBuilding, FaCog, FaConciergeBell, FaGlassCheers, FaHeart, FaRing, FaStar, FaUserFriends, FaUsers } from 'react-icons/fa';
import { BookEventProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRing': return <FaRing />;
    case 'FaBirthdayCake': return <FaBirthdayCake />;
    case 'FaBuilding': return <FaBuilding />;
    case 'FaHeart': return <FaHeart />;
    case 'FaGlassCheers': return <FaGlassCheers />;
    case 'FaUsers': return <FaUsers />;
    case 'FaStar': return <FaStar />;
    case 'FaCog': return <FaCog />;
    case 'FaConciergeBell': return <FaConciergeBell />;
    case 'FaUserFriends': return <FaUserFriends />;
    default: return null;
  }
};

export const BookEvent = ({ data }: BookEventProps) => {
  const [submitted, setSubmitted] = useState(false);
  if (!data) return null;

  return (
    <>
      <section className="bg-white py-8 lg:py-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9f5f4d]">{data.intro.eyebrow}</p>
            <h1 className="mt-2 font-heading text-4xl leading-tight text-[var(--color-heading)] sm:text-5xl">{data.form.title1}</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.form.description}</p>
            <form className="mt-6" onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[var(--color-heading)]"><span>{data.form.fullNameLabel}</span><input name="fullName" required placeholder={data.form.fullNamePlaceholder} className="mt-2 w-full rounded border border-[#d8d8d8] px-4 py-3 text-sm outline-none focus:border-[#9f5f4d]" /></label>
                <label className="block text-sm font-medium text-[var(--color-heading)]"><span>{data.form.emailLabel}</span><input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="mt-2 w-full rounded border border-[#d8d8d8] px-4 py-3 text-sm outline-none focus:border-[#9f5f4d]" /></label>
                <label className="block text-sm font-medium text-[var(--color-heading)]"><span>{data.form.phoneLabel}</span><input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="mt-2 w-full rounded border border-[#d8d8d8] px-4 py-3 text-sm outline-none focus:border-[#9f5f4d]" /></label>
                <label className="block text-sm font-medium text-[var(--color-heading)]"><span>{data.form.eventTypeLabel}</span><select name="eventType" required defaultValue="" className="mt-2 w-full rounded border border-[#d8d8d8] bg-white px-4 py-3 text-sm outline-none focus:border-[#9f5f4d]"><option value="" disabled>{data.form.eventTypePlaceholder}</option>{data.form.eventTypeOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}</select></label>
                <label className="block text-sm font-medium text-[var(--color-heading)]"><span>{data.form.dateLabel}</span><input name="eventDate" type="date" required className="mt-2 w-full rounded border border-[#d8d8d8] px-4 py-3 text-sm outline-none focus:border-[#9f5f4d]" /></label>
                <label className="block text-sm font-medium text-[var(--color-heading)]"><span>{data.form.weightLabel}</span><input name="guestCount" required placeholder={data.form.weightPlaceholder} className="mt-2 w-full rounded border border-[#d8d8d8] px-4 py-3 text-sm outline-none focus:border-[#9f5f4d]" /></label>
                <label className="block text-sm font-medium text-[var(--color-heading)]"><span>{data.form.messageLabel}</span><textarea name="message" rows={4} placeholder={data.form.messagePlaceholder} className="mt-2 w-full resize-none rounded border border-[#d8d8d8] px-4 py-3 text-sm outline-none focus:border-[#9f5f4d]" /></label>
              </div>
              <button type="submit" className="mt-5 flex w-full items-center justify-center gap-3 rounded bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary)]">{data.form.buttonText}<FaArrowRight /></button>
              <p className="mt-3 text-center text-xs text-[var(--color-text-light)]">{data.form.consentText}</p>
              {submitted && <p role="status" className="mt-4 border border-[#d7b47c] bg-[#fff7ea] px-4 py-3 text-sm text-[#72542f]">{data.form.successMessage}</p>}
            </form>
          </div>

          <div>
            <div className="relative aspect-[5/4] overflow-hidden rounded"><Image src={data.visual.image} alt={data.visual.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
            <div className="mt-5 bg-[#fdf7f2] px-4 py-7 sm:px-7">
              <h2 className="text-center font-heading text-2xl text-[var(--color-heading)] sm:text-3xl">{data.visual.eventTypesTitle}</h2>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3">
                {data.visual.eventTypes.map((eventType) => <div key={eventType.id} className="text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center text-3xl text-[#9f5f4d]">{renderIcon(eventType.icon)}</span><p className="mt-2 text-sm text-[#573d38]">{eventType.title}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdf8f3] py-8 lg:py-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-7 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {data.features.map((feature) => <div key={feature.id} className="text-center lg:border-r lg:border-[#eadfd7] lg:last:border-r-0"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f4dfd2] text-2xl text-[#9f5f4d]">{renderIcon(feature.icon)}</span><h2 className="mt-3 font-heading text-2xl text-[var(--color-heading)]">{feature.title}</h2><p className="mx-auto mt-1 max-w-[220px] text-sm leading-5 text-[var(--color-text)]">{feature.description}</p></div>)}
        </div>
      </section>
    </>
  );
};

