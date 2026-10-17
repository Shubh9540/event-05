import React from 'react';
import { EventTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonial } from '@/components/sections/Testimonial';
import { GalleryStrip } from '@/components/sections/GalleryStrip';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      </div>
      <AboutUs data={sectionData.AboutUs?.variants?.EventAboutUs1} hideButton={true} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.EventAboutWhyChooseUs1} />
      <Testimonial data={sectionData.Testimonials?.variants?.EventTestimonials1} />
      <GalleryStrip data={sectionData.GalleryStrip?.variants?.EventGalleryStrip1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
