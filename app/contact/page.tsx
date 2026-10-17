import React from 'react';
import { EventTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-white)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} logoData={sectionData.Header?.variants?.EventHeader1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      </div>
      
      <Contact data={sectionData.contact?.variants?.EventContact1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
