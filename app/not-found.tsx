import React from 'react';
import { EventTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFoundSection } from '@/components/sections/NotFoundSection';

export default function NotFoundPage() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} logoData={sectionData.Header?.variants?.EventHeader1} />
      <Header data={sectionData.Header?.variants?.EventHeader1} />
      
      <NotFoundSection data={commonData.notFound} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
