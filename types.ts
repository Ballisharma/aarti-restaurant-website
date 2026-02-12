export interface NavLink {
  label: string;
  href: string;
}

export interface ScrollSection {
  id: string;
  image: string;
  title?: string;
  subtitle?: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
  alignment: 'left' | 'right'; // For the image
}

export interface CarouselImage {
  src: string;
  alt: string;
}
