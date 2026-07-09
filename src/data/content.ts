export interface PageContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
}

export const servicesData: PageContent[] = [
  {
    slug: 'sales',
    title: 'Sales',
    subtitle: 'Premium Tools Procurement',
    description: 'We provide end-to-end sales solutions for the highest grade industrial tools and equipment. Our extensive catalogue covers everything from everyday hand tools to heavy-duty industrial machinery, ensuring your workforce is equipped with the best.',
    features: ['Global Sourcing', 'Competitive Pricing', 'Dedicated Account Managers']
  },
  {
    slug: 'services',
    title: 'Services',
    subtitle: 'Comprehensive Maintenance',
    description: 'Our expert technicians provide comprehensive maintenance and repair services. We ensure your equipment operates at peak efficiency, minimizing downtime and maximizing productivity across your operations.',
    features: ['Preventative Maintenance', 'On-Site Repairs', 'Spare Parts Supply']
  },
  {
    slug: 'manufacture',
    title: 'Manufacture',
    subtitle: 'Precision Engineering',
    description: 'State-of-the-art manufacturing facilities capable of producing custom tooling and equipment tailored exactly to your specifications. We adhere to strict quality control standards to deliver unparalleled precision.',
    features: ['Custom Fabrication', 'Quality Assurance', 'Rapid Prototyping']
  },
  {
    slug: 'calibrate',
    title: 'Calibrate',
    subtitle: 'Certified Accuracy',
    description: 'Ensure your instruments are measuring accurately with our certified calibration services. We utilize traceable standards to calibrate a wide range of industrial measurement devices.',
    features: ['ISO Certified', 'Traceable Standards', 'Detailed Reporting']
  },
  {
    slug: 'testing',
    title: 'Testing',
    subtitle: 'Rigorous Quality Checks',
    description: 'Our testing facilities put equipment through rigorous stress tests to ensure they meet and exceed industry safety and performance standards before they ever reach your facility.',
    features: ['Load Testing', 'Non-Destructive Testing', 'Performance Certification']
  }
];

export const brandsData: PageContent[] = [
  {
    slug: 'black-hawk',
    title: 'Black Hawk',
    subtitle: 'Heavy Duty Equipment',
    description: 'Black Hawk delivers rugged, heavy-duty equipment designed for the most demanding industrial environments.'
  },
  {
    slug: 'bosch',
    title: 'Bosch',
    subtitle: 'Invented for Life',
    description: 'Bosch power tools provide professionals with solutions that deliver peak performance, reliability, and innovation.'
  },
  {
    slug: 'chicago-pneumatic',
    title: 'Chicago Pneumatic',
    subtitle: 'High-Performance Compressors',
    description: 'Chicago Pneumatic offers reliable and high-performance compressors and tools for industrial and automotive applications.'
  },
  {
    slug: 'dewalt',
    title: 'DeWalt',
    subtitle: 'Guaranteed Tough',
    description: 'DeWalt designs and optimizes professional workhorse solutions - tools, accessories and service - to ensure absolute confidence for the toughest jobsite conditions.'
  },
  {
    slug: 'fein',
    title: 'Fein',
    subtitle: 'The Original Multitool',
    description: 'Fein is the specialist for indestructible power tools and special application solutions.'
  },
  {
    slug: 'karcher',
    title: 'Karcher',
    subtitle: 'Makes a Difference',
    description: 'Karcher is the leading provider of cleaning technology worldwide, known for their high-pressure cleaners and industrial vacuums.'
  },
  {
    slug: 'kaymo',
    title: 'Kaymo',
    subtitle: 'Fastening Solutions',
    description: 'Kaymo provides innovative and reliable stapling and nailing fastening solutions.'
  },
  {
    slug: 'metabo',
    title: 'Metabo',
    subtitle: 'Work. Don\'t play.',
    description: 'Metabo offers sustainable system solutions from tools and accessories to service, delivering value today and for the future.'
  }
];
