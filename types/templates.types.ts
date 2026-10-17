import type { CSSProperties } from 'react';

export interface ThemeFontsData {
  primary: string;
  heading: string;
  navigation: string;
}

export interface ThemeData {
  fonts: ThemeFontsData;
}

export type ThemeFontVariables = CSSProperties & {
  '--font-primary': string;
  '--font-heading': string;
  '--font-navigation': string;
};

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string; icon: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  paths: BreadcrumbPath[];
}

export interface GlobalUIData {
  breadcrumbSeparator: string;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData {
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  images: GalleryItem[];
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface GalleryImageProps {
  item: GalleryItem;
  size: 'short' | 'tall';
  index: number;
  openLabel: string;
  onOpen: (index: number) => void;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  expandLabel: string;
  collapseLabel: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface HeroSlideData {
  id: string;
  eyebrow: string;
  titleLine1: string;
  highlightedTitle: string;
  image: string;
  imageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
}

export interface HeroData {
  slides: HeroSlideData[];
  autoplayDelay: number;
  slideNavigationLabel: string;
  previousSlideLabel: string;
  nextSlideLabel: string;
  decorativeImage: string;
  decorativeImageAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutUsData {
  subtitle: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  experienceImage: string;
  experienceImageAlt: string;
  experienceValue: number;
  experienceSuffix: string;
  experienceLabel: string;
  experienceIcon: string;
  countDuration: number;
  button: { text: string; url: string };
}

export interface AboutUsProps {
  data?: AboutUsData;
  hideButton?: boolean;
}

export interface PaginationItem {
  id: string;
  label: string;
  page: number;
}

export interface OurServiceItem {
  id: string;
  number: string;
  title: string;
  highlightedTitle?: string;
  image: string;
  imageAlt: string;
  decorationIcon: string;
  url: string;
}

export interface OurServiceData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  linkText: string;
  services: OurServiceItem[];
}

export interface OurServiceProps {
  data?: OurServiceData;
  limit?: number;
}

export interface BottomBannerData {
  image: string;
  imageAlt: string;
  videoUrl: string;
  playLabel: string;
  closeLabel: string;
  videoTitle: string;
}

export interface BottomBannerProps {
  data?: BottomBannerData;
}

export interface GalleryStripItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryStripData {
  images: GalleryStripItem[];
}

export interface GalleryStripProps {
  data?: GalleryStripData;
}

export interface ServiceDetailHighlight {
  id: string;
  title: string;
  icon: string;
}

export interface ServiceDetailOffer {
  id: string;
  text: string;
}

export interface ServiceDetailItem {
  id: string;
  title: string;
  breadcrumb: BreadcrumbData;
  image: string;
  imageAlt: string;
  subtitle: string;
  heading: string;
  description: string;
  highlights: ServiceDetailHighlight[];
  offerSubtitle: string;
  offerTitle: string;
  offerDescription: string;
  offers: ServiceDetailOffer[];
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetailData {
  services: ServiceDetailItem[];
  processSubtitle: string;
  processTitle: string;
  processSteps: ServiceDetailProcessStep[];
}

export interface ServiceDetailProps {
  data?: ServiceDetailData;
  serviceId: string;
}

export interface ServiceDetailsPageProps {
  params: Promise<{ id: string }>;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  secondaryQuote?: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialProps {
  data?: TestimonialsData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  copyrightText: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  contactItems: { id: string; title: string; value: string; url?: string }[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Topbar: string;
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface WhyChooseUsFeature {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  features: WhyChooseUsFeature[];
  imageMain: string;
  imageAlt: string;
  calloutText: string;
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
  };
  form: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  visual: {
    image: string;
    imageAlt: string;
    backgroundImage: string;
    backgroundImageAlt: string;
  };
  contactItems: ContactInfoItem[];
  features: ContactFeature[];
  location: {
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactProps {
  data?: ContactData;
}

export interface BookEventFormOption {
  id: string;
  label: string;
  value: string;
}

export interface BookEventFeature {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export interface BookEventData {
  intro: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    description: string;
  };
  visual: {
    image: string;
    imageAlt: string;
    eventTypesTitle: string;
    eventTypes: BookEventFeature[];
  };
  features: BookEventFeature[];
  form: {
    title1: string;
    description: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    eventTypeLabel: string;
    eventTypePlaceholder: string;
    weightLabel: string;
    weightPlaceholder: string;
    dateLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
    eventTypeOptions: BookEventFormOption[];
    consentText: string;
  };
}

export interface BookEventProps {
  data?: BookEventData;
}

export interface BlogAuthor {
  id: string;
  name: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  url: string;
  authorId: string;
  breadcrumb: BreadcrumbData;
}

export interface BlogDetailItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface BlogDetailContent {
  quoteText: string;
  conclusionTitle: string;
  conclusionText: string;
  sections: BlogDetailItem[];
}

export interface BlogData {
  authorPrefix: string;
  readMoreText: string;
  authors: BlogAuthor[];
  posts: BlogPost[];
  detail: BlogDetailContent;
}

export interface BlogsProps {
  data?: BlogData;
}

export interface BlogDetailProps {
  data?: BlogData;
  postId: string;
}

export interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface EventTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    globalUI: GlobalUIData;
    aboutBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    faqsBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    galleryBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    bookEventBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    Event: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { EventTopBar1?: TopBarData } };
        Header?: { variants?: { EventHeader1?: HeaderData } };
        Hero?: { variants?: { EventHero1?: HeroData } };
        AboutUs?: { variants?: { EventAboutUs1?: AboutUsData } };
        Gallery?: { variants?: { EventGallery1?: GalleryData } };
        Faq?: { variants?: { EventFaq1?: FaqData } };
        OurService?: { variants?: { EventOurService1?: OurServiceData } };
        BottomBanner?: { variants?: { EventBottomBanner1?: BottomBannerData } };
        GalleryStrip?: { variants?: { EventGalleryStrip1?: GalleryStripData } };
        ServiceDetail?: { variants?: { EventServiceDetail1?: ServiceDetailData } };
        Testimonials?: { variants?: { EventTestimonials1?: TestimonialsData } };
        Blogs?: { variants?: { EventBlogs1?: BlogData } };
        whyChooseUs?: { variants?: { EventAboutWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { EventContact1?: ContactData } };
        BookEvent?: { variants?: { EventBookEvent1?: BookEventData } };
      };
    };
  };
}
