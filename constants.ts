import { ScrollSection, CarouselImage } from './types';

// Using more moody/dark restaurant images
export const HERO_IMAGE = "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop"; 

export const SPLIT_SECTIONS: ScrollSection[] = [
  {
    id: 'intro',
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    title: "Welcome to the Clubhouse",
    subtitle: "A Sanctuary of Opulence",
    content: "Inspired by the summer residence of the Maharaja of Dalhousie, Dravida Clubhouse celebrates the golden age of Punjabi hospitality. A place of abundance, high spirits, and generosity, where fine food meets the finest liquor in a setting of timeless elegance.",
    alignment: 'left'
  },
  {
    id: 'food',
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    title: "The Feast",
    subtitle: "Culinary Traditions",
    content: "Our menu is a journey through the grand trunk road—from roadside dhabas to royal kitchens. Expect rich curries, clay oven delicacies, and communal sharing plates designed for feasting. The flavours are bold, authentic, and unapologetically Punjabi.",
    buttonText: "View Menus",
    buttonLink: "#",
    alignment: 'left'
  },
  {
    id: 'drinks',
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    title: "The Bar",
    subtitle: "Spirits & Libations",
    content: "The bar at Dravida is a destination in itself. Showcasing an extensive collection of rare whiskies, tequilas, and a playful list of gymkhana-style cocktails. The party begins here and continues late into the night.",
    buttonText: "Drinks List",
    buttonLink: "#",
    alignment: 'left'
  },
  {
    id: 'private',
    image: "https://images.unsplash.com/photo-1550966871-3ed3c6227753?q=80&w=2070&auto=format&fit=crop",
    title: "Private Dining",
    subtitle: "Exclusive Spaces",
    content: "Host your own celebration in one of our private party mansions. From intimate dinners to grand receptions, our dedicated team ensures every detail is handled with the Dravida's signature flair.",
    buttonText: "Enquire Now",
    buttonLink: "#",
    alignment: 'left'
  }
];

export const CAROUSEL_IMAGES: CarouselImage[] = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", alt: "Restaurant Interior" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000", alt: "Coffee" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000", alt: "Cocktail" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000", alt: "Dish" },
  { src: "https://images.unsplash.com/photo-1550966871-3ed3c6227753?q=80&w=1000", alt: "Ambience" },
];

export const NAV_LINKS = [
  { label: 'The Experience', href: '#' },
  { label: 'Menus', href: '#' },
  { label: 'Private Dining', href: '#' },
  { label: 'Music', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
];
