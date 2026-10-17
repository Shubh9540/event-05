import React from 'react';
import rawData from '@/data/templates.json';
import { EventTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Gallery } from '@/components/sections/Gallery';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      </div>
      <Gallery data={sectionData.Gallery?.variants?.EventGallery1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
