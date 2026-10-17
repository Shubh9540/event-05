import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { BlogDetailsPageProps, EventTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetail } from '@/components/sections/BlogDetail';
import { GalleryStrip } from '@/components/sections/GalleryStrip';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  const templateData: EventTemplateData = rawData;
  const sectionData = templateData?.categories?.Event?.sections;
  const commonData = templateData?.common;
  const blogData = sectionData?.Blogs?.variants?.EventBlogs1;
  const selectedPost = blogData?.posts.slice(0, 6).find((post) => post.id === id);

  if (!sectionData || !commonData) return null;
  if (!blogData || !selectedPost) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EventTopBar1} />
        <Header data={sectionData.Header?.variants?.EventHeader1} />
        <Breadcrumb data={selectedPost.breadcrumb} ui={commonData.globalUI} />
      </div>
      <BlogDetail data={blogData} postId={id} />
      <GalleryStrip data={sectionData.GalleryStrip?.variants?.EventGalleryStrip1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
