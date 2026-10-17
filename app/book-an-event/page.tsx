import rawData from '@/data/templates.json';
import { EventTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BookEvent } from '@/components/sections/BookEvent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BookAnEventPage() {
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData.categories.Event.sections;
  const commonData = templateData.common;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} logoData={sectionData.Header?.variants?.EventHeader1} />
      <Header data={sectionData.Header?.variants?.EventHeader1} />
      <Breadcrumb data={commonData.bookEventBreadcrumb} ui={commonData.globalUI} />
      <BookEvent data={sectionData.BookEvent?.variants?.EventBookEvent1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
