import React from 'react';
import rawData from '@/data/templates.json';
import { EventTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Faq } from '@/components/sections/Faq';
import { BottomBanner } from '@/components/sections/BottomBanner';
import { GalleryStrip } from '@/components/sections/GalleryStrip';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function FaqsPage() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <Faq data={sectionData.Faq?.variants?.EventFaq1} />
      <BottomBanner data={sectionData.BottomBanner?.variants?.EventBottomBanner1} />
      <GalleryStrip data={sectionData.GalleryStrip?.variants?.EventGalleryStrip1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
