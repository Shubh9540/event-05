import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { ServiceDetailsPageProps, EventTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetail } from '@/components/sections/ServiceDetail';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { id } = await params;
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;
  const detailData = sectionData?.ServiceDetail?.variants?.EventServiceDetail1;
  const selectedService = detailData?.services.find((service) => service.id === id);

  if (!sectionData || !commonData) return null;
  if (!detailData || !selectedService) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={selectedService.breadcrumb} ui={commonData.globalUI} />
      </div>
      <ServiceDetail data={detailData} serviceId={id} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
