import React from 'react';
import { EventTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Blogs } from '@/components/sections/Blogs';
import { GalleryStrip } from '@/components/sections/GalleryStrip';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BlogsPage() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <Blogs data={sectionData.Blogs?.variants?.EventBlogs1} />
      <GalleryStrip data={sectionData.GalleryStrip?.variants?.EventGalleryStrip1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
