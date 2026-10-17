import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { BlogsProps } from '@/types/templates.types';

export const Blogs = ({ data }: BlogsProps) => {
  if (!data?.posts.length) return null;

  return (
    <section className="bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.posts.slice(0, 6).map((post) => {
            const [day, monthYear] = post.date.split(' ');
            const month = monthYear?.replace(',', '');
            const author = data.authors.find((item) => item.id === post.authorId);

            return (
              <article key={post.id} className="grid grid-cols-[64px_1fr] gap-4 border-b border-[var(--color-tone-eadfd8)] px-0 py-8 md:px-5 lg:min-h-[300px] lg:border-r lg:px-7">
                <div className="flex h-16 flex-col items-center justify-center border border-[var(--color-tone-eadfd8)] bg-[var(--color-white)]">
                  <span className="font-heading text-3xl leading-none text-[var(--color-tone-d9a988)]">{day}</span>
                  <span className="mt-1 font-heading text-sm text-[var(--color-text-light)]">{month}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-xs italic text-[var(--color-tone-756568)]">{post.category} <span className="mx-1">{data.authorPrefix}</span> {author?.name}</p>
                  <Link href={post.url} className="mt-2 block">
                    <h2 className="font-heading text-2xl leading-tight text-[var(--color-heading)] transition-colors hover:text-[var(--color-accent)]">{post.title}</h2>
                  </Link>
                  <p className="mt-3 line-clamp-4 font-heading text-sm italic leading-6 text-[var(--color-tone-9a8b8d)]">{post.description}</p>
                  <Link href={post.url} className="mt-6 inline-flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-tone-c98767)]">
                    {data.readMoreText}<span className="h-px w-10 bg-[var(--color-tone-d9a988)]" /><FaArrowRight className="sr-only" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
