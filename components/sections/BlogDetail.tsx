import Image from 'next/image';
import { BlogDetailProps } from '@/types/templates.types';

export const BlogDetail = ({ data, postId }: BlogDetailProps) => {
  if (!data) return null;
  const post = data.posts.slice(0, 6).find((item) => item.id === postId);
  if (!post) return null;
  const sections = data.detail.sections.slice(0, 3);

  return (
    <article className="bg-[var(--color-tone-fffaf6)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg lg:aspect-[12/5]"><Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" /></div>
        <p className="mx-auto mt-5 max-w-6xl text-sm leading-7 text-[var(--color-text)] sm:text-base">{post.description}</p>
        <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div><p className="font-heading text-2xl text-[var(--color-accent)]">{sections[0]?.number}</p><h2 className="mt-1 font-heading text-3xl leading-tight text-[var(--color-heading)]">{sections[0]?.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-text)] sm:text-base">{sections[0]?.description}</p></div>
          {sections[0] && <div className="relative aspect-[16/9] overflow-hidden rounded-md"><Image src={sections[0].image} alt={sections[0].imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>}
        </div>
        <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          {sections[1] && <div className="relative aspect-[16/9] overflow-hidden rounded-md"><Image src={sections[1].image} alt={sections[1].imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>}
          <div><p className="font-heading text-2xl text-[var(--color-accent)]">{sections[1]?.number}</p><h2 className="mt-1 font-heading text-3xl leading-tight text-[var(--color-heading)]">{sections[1]?.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-text)] sm:text-base">{sections[1]?.description}</p></div>
        </div>
        <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div><p className="font-heading text-2xl text-[var(--color-accent)]">{sections[2]?.number}</p><h2 className="mt-1 font-heading text-3xl leading-tight text-[var(--color-heading)]">{sections[2]?.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-text)] sm:text-base">{sections[2]?.description}</p></div>
          <blockquote className="bg-[var(--color-tone-f8eee5)] p-7 font-heading text-xl italic leading-8 text-[var(--color-tone-705950)] sm:p-9 sm:text-2xl"><span className="mb-3 block text-5xl leading-none text-[var(--color-accent)]">â€œ</span>{data.detail.quoteText}</blockquote>
        </div>
        <div className="mx-auto mt-10 max-w-4xl text-center"><div className="mx-auto mb-3 h-px w-16 bg-[var(--color-accent)]" /><h2 className="font-heading text-3xl text-[var(--color-heading)]">{data.detail.conclusionTitle}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-text)] sm:text-base">{data.detail.conclusionText}</p></div>
      </div>
    </article>
  );
};

