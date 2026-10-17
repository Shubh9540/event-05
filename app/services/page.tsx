import React from 'react';
import { EventTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { OurService } from '@/components/sections/OurService';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      </div>
      <OurService data={sectionData.OurService?.variants?.EventOurService1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
