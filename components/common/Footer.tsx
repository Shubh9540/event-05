import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaPinterestP': return <FaPinterestP />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="bg-white text-[#292325]">
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-8 pt-10 md:px-6 lg:px-8 lg:pb-10 lg:pt-12">
        <div className="flex flex-col items-center text-center">
          <Link href={data.logoUrl} aria-label={data.logoAlt} className="inline-block">
            <Image src={data.logo} alt={data.logoAlt} width={440} height={150} className="h-auto w-[290px] sm:w-[360px] lg:w-[420px]" />
          </Link>

          <div className="mt-5 flex items-center justify-center gap-3">
            {data.socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8873e] text-sm text-[#b97731] transition-colors duration-300 hover:bg-[#9f1738] hover:text-white"
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-16 lg:mt-2 lg:grid-cols-[1fr_1fr]">
          <div className="md:justify-self-start">
            <h2 className="font-heading text-3xl leading-none">{data.quickLinksTitle}</h2>
            <span className="mt-2 block h-px w-10 bg-[#c8873e]" />
            <ul className="mt-4 space-y-2">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="flex items-center gap-3 text-sm text-[#3e3738] transition-colors duration-300 hover:text-[#9f1738]">
                    <FaChevronRight className="text-[10px] text-[#c8873e]" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end md:min-w-[260px]">
            <h2 className="font-heading text-3xl leading-none">{data.contactTitle}</h2>
            <span className="mt-2 block h-px w-10 bg-[#c8873e]" />
            <ul className="mt-4 space-y-5">
              {data.contactItems.map((item) => (
                <li key={item.id}>
                  <h3 className="font-heading text-lg leading-none text-[#9f1738]">{item.title}</h3>
                  {item.url ? (
                    <Link href={item.url} className="mt-1 block max-w-[280px] text-sm leading-5 text-[#3e3738] transition-colors duration-300 hover:text-[#9f1738]">{item.value}</Link>
                  ) : (
                    <p className="mt-1 max-w-[280px] text-sm leading-5 text-[#3e3738]">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#eee7e2] px-4 py-5 text-center">
        <p className="text-xs leading-5 text-[#4f4849] sm:text-sm">{data.copyrightText}</p>
      </div>
    </footer>
  );
};
