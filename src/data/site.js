// =====================================================================
// SITE SETTINGS — edit this file to change business details site-wide.
//
// - Phone number, links and service areas are used in the header,
//   footer, contact page, mobile bottom bar and Google structured data.
// - formEndpoint: create a free form at https://formspree.io, copy its
//   endpoint (looks like https://formspree.io/f/abcdwxyz) and paste it below.
// - Images: every photo URL on the site lives in the `images` section below.
//   They currently point at the client's old GoDaddy site. To use local
//   copies, download each one into /public/images and change the URL to
//   e.g. '/images/sunroom.jpg'.
// =====================================================================

// Helper for the client's current GoDaddy image host.
const WS = (id, width = 1800) =>
  `https://img1.wsimg.com/isteam/ip/125b703a-b858-4f87-a670-fd7360c67f15/${id}/:/rs=w:${width},cg:true`;

export const site = {
  name: 'Budget Aluminium',
  legalName: 'Budget Aluminium and Allied World Ltd.',
  url: 'https://budgetaluminium.com',

  // Phone: `display` is what people see, `tel` is what the phone dials.
  phone: { display: '604 783 8356', tel: '16047838356', intl: '+1-604-783-8356' },

  // TODO: no email was found on the client's current site. Add one here if they have it.
  email: '',

  // No street address is published; region only.
  address: { region: 'BC', country: 'CA' },

  // Formspree endpoint — replace YOUR_FORM_ID (see note at top of file).
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',

  links: {
    financeit: 'https://www.financeit.ca/s/UzAeVA',
    instagram: 'https://www.instagram.com/budget_aluminium',
    facebook: 'https://www.facebook.com/110798884177031',
    yelp: 'https://www.yelp.com/biz/YuRbRaBuKqmNRRaCwl4mVw',
  },

  // Shown in "Where we work" on the home page (and used for areaServed).
  serviceAreas: [
    'Richmond', 'Delta', 'Langley', 'Surrey', 'Abbotsford', 'Aldergrove',
    'Maple Ridge', 'Mission', 'Chilliwack', 'North Vancouver', 'Burnaby', 'East Vancouver',
  ],

  // Shown in the contact page side panel.
  contactServiceArea:
    'Langley, Surrey, Delta, White Rock, Coquitlam, Burnaby, Vancouver, Abbotsford and Chilliwack',

  // Options in the contact form "City" dropdown.
  formCities: ['Surrey', 'Langley', 'Delta', 'White Rock', 'Coquitlam', 'Burnaby', 'Vancouver', 'Abbotsford', 'Chilliwack'],

  // Options in the contact form "What are you interested in?" dropdown.
  formNeeds: [
    'Patio cover', 'Sunroom', 'Railings', 'SleekFence aluminium fence',
    'Gate (manual or motorized)', 'Deck', 'Home renovation',
  ],

  // Main navigation.
  nav: [
    { href: '/patio-covers', label: 'Patio Covers' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
};

// ---------------------------------------------------------------------
// IMAGES — every photo on the site. Change `img` to swap a photo.
// TODO: ask the client for high-resolution patio cover and railing photos;
// they should lead the home page carousel.
// ---------------------------------------------------------------------
export const images = {
  // Home page hero carousel (in order).
  slides: [
    { img: WS('20220916_132103.jpg'), label: 'Glass sunroom enclosure' },
    { img: WS('84cdeabe-0002-45b8-ab0a-7ea33b68598a.jpg'), label: 'Custom deck and outdoor living' },
    { img: WS('2f96abc3-b891-48af-b190-4ee74e73978c.jpg'), label: 'Roofing and exterior' },
    { img: WS('a299c1f4-77dc-4a15-84a6-b53f434032a4.jpg'), label: 'New flooring' },
    { img: WS('f20eb73f-9073-438b-a99f-6b4779feb24d.jpg'), label: 'Basement finishing' },
  ],
  // Extra gallery photos (the gallery = the slides above + these).
  galleryExtra: [
    { img: WS('169d9ed8-11c5-4721-8768-ecbf0faf0ab8.jpg'), label: 'Interior painting' },
    { img: WS('852a6940-476e-492a-a40f-80e72dab635f.jpg'), label: 'Kitchen renovation' },
    { img: 'https://img1.wsimg.com/isteam/getty/2150594663/:/rs=w:1400,cg:true', label: 'Windows and doors' },
  ],
  // Home page SleekFence feature.
  sleekFence: {
    img: 'https://img1.wsimg.com/isteam/ip/125b703a-b858-4f87-a670-fd7360c67f15/Sleek%20black%20privacy%20fence.jpg',
    alt: 'Black horizontal aluminium privacy fence',
  },
  // About page photo.
  about: { img: WS('20220916_132103.jpg', 1400), alt: 'Sunroom' },
};

// Full gallery (8 photos) and the 4-photo preview on the home page.
export const gallery = [...images.slides, ...images.galleryExtra];
export const galleryPreview = gallery.slice(0, 4);
