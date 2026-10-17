import React from 'react';
import { EventTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { OurService } from '@/components/sections/OurService';
import { BottomBanner } from '@/components/sections/BottomBanner';
import { GalleryStrip } from '@/components/sections/GalleryStrip';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.EventHero1} />
      </div>
      <AboutUs data={sectionData.AboutUs?.variants?.EventAboutUs1} />
      <OurService data={sectionData.OurService?.variants?.EventOurService1} limit={6} />
      <BottomBanner data={sectionData.BottomBanner?.variants?.EventBottomBanner1} />
      <GalleryStrip data={sectionData.GalleryStrip?.variants?.EventGalleryStrip1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
