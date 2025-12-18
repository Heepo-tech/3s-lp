export interface Product {
  id: string
  name: string
  slug: string
  translationKey: string
  category: string
  description: string
  shortDescription: string
  sizes: string[]
  thickness: string[]
  grade: string
  features: string[]
  applications: string[]
  image: string
  specifications: {
    size: string
    isiCrate: string
    m3: string
    grade: string
    glue: string
    type: string
    remarks: string
    transport: string
    capacity: string
  }
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Thin Plywood Export (Small Size)',
    slug: 'thin-plywood-export-small',
    translationKey: 'p1',
    category: 'Thin Plywood',
    shortDescription: 'Size 2.4 × 920 × 1830 | Grade UTY/BTR | Market Export',
    description:
      'Thin Plywood Export dengan ukuran kecil, grade UTY/BTR, menggunakan lem T2F 3/4.',
    sizes: ['920 x 1830 mm'],
    thickness: ['2.4mm'],
    grade: 'UTY/BTR',
    features: ['Grade Export UTY/BTR', 'Lem T2F 3/4', 'Jenis Albasia (ALB)'],
    applications: ['Furniture', 'Handicraft', 'Export Market'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '2.4 × 920 × 1830',
      isiCrate: '450',
      m3: '1.8182',
      grade: 'UTY / BTR',
      glue: 'T2F *3/4',
      type: 'ALB',
      remarks: 'EXPORT',
      transport: 'Container 40’ HC',
      capacity: '23 & 41 m³',
    },
  },
  {
    id: '2',
    name: 'Thin Plywood Local (Small Size)',
    slug: 'thin-plywood-local-small',
    translationKey: 'p2',
    category: 'Thin Plywood',
    shortDescription: 'Size 2.4 × 920 × 1830 | Grade UTY/RUK | Market Lokal',
    description:
      'Thin Plywood untuk pasar lokal dengan ukuran kecil, grade UTY/RUK.',
    sizes: ['920 x 1830 mm'],
    thickness: ['2.4mm'],
    grade: 'UTY/RUK',
    features: ['Grade Lokal UTY/RUK', 'Lem T2 Regular', 'Jenis Albasia (ALB)'],
    applications: ['Furniture Lokal', 'Kerajinan', 'Pasar Lokal'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '2.4 × 920 × 1830',
      isiCrate: '450',
      m3: '1.8182',
      grade: 'UTY / RUK',
      glue: 'T2 REGULER',
      type: 'ALB',
      remarks: 'LOKAL',
      transport: 'Tronton',
      capacity: '18 & 32 m³',
    },
  },
  {
    id: '3',
    name: 'Thin Plywood Export (Square)',
    slug: 'thin-plywood-export-square',
    translationKey: 'p3',
    category: 'Thin Plywood',
    shortDescription: 'Size 2.7 × 1220 × 1220 | Grade AB | Market Export',
    description:
      'Thin Plywood Export ukuran persegi (square), grade AB, lem T2F 4.',
    sizes: ['1220 x 1220 mm'],
    thickness: ['2.7mm'],
    grade: 'AB',
    features: [
      'Grade Export AB',
      'Lem T2F 4',
      'Jenis Albasia (ALB)',
      'Ukuran Square',
    ],
    applications: [
      'High Quality Furniture',
      'Export Market',
      'Specialty Applications',
    ],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '2.7 × 1220 × 1220',
      isiCrate: '400 & 320',
      m3: '1.6074',
      grade: 'AB',
      glue: 'T2F *4',
      type: 'ALB',
      remarks: 'EXPORT',
      transport: 'Container 40’ HC',
      capacity: '36 & 51 m³',
    },
  },
  {
    id: '4',
    name: 'Thin Plywood Export (Square Heavy)',
    slug: 'thin-plywood-export-square-heavy',
    translationKey: 'p4',
    category: 'Thin Plywood',
    shortDescription: 'Size 2.8 × 1220 × 1220 | Grade AB | Market Export',
    description:
      'Thin Plywood Export ukuran persegi (heavy), grade AB, lem T2F 4.',
    sizes: ['1220 x 1220 mm'],
    thickness: ['2.8mm'],
    grade: 'AB',
    features: [
      'Grade Export AB',
      'Lem T2F 4',
      'Jenis Albasia (ALB)',
      'Extra Thickness',
    ],
    applications: ['High Quality Furniture', 'Export Market'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '2.8 × 1220 × 1220',
      isiCrate: '300 & 250',
      m3: '1.6667',
      grade: 'AB',
      glue: 'T2F *4',
      type: 'ALB',
      remarks: 'EXPORT',
      transport: 'Container 40’ HC',
      capacity: '36 & 60 m³',
    },
  },
  {
    id: '5',
    name: 'Standard Plywood Local',
    slug: 'standard-plywood-local',
    translationKey: 'p5',
    category: 'Standard Plywood',
    shortDescription: 'Size 2.7 × 1220 × 2440 | Grade UTY/RUK | Market Lokal',
    description:
      'Standard Plywood untuk pasar lokal, grade UTY/RUK, lem T2 Regular.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['2.7mm'],
    grade: 'UTY/RUK',
    features: [
      'Grade Lokal UTY/RUK',
      'Lem T2 Regular',
      'Jenis Albasia/Kayu Keras (KK)',
    ],
    applications: ['Konstruksi Ringan', 'Furniture Standar', 'Pasar Lokal'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '2.7 × 1220 × 2440',
      isiCrate: '375',
      m3: '3.2149',
      grade: 'UTY / RUK',
      glue: 'T2 REGULER',
      type: 'ALB / KK',
      remarks: 'LOKAL',
      transport: 'Trailer',
      capacity: '20 & 60 m³',
    },
  },
  {
    id: '6',
    name: 'Standard Plywood Local (3.6 mm)',
    slug: 'standard-plywood-local-3.6',
    translationKey: 'p6',
    category: 'Standard Plywood',
    shortDescription: 'Size 3.6 × 1220 × 2440 | Grade UTY/RUK | Market Lokal',
    description:
      'Standard Plywood ketebalan 3.6mm untuk pasar lokal, grade UTY/RUK.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['3.6mm'],
    grade: 'UTY/RUK',
    features: [
      'Grade Lokal UTY/RUK',
      'Lem T2 Regular',
      'Jenis Albasia/Kayu Keras (KK)',
    ],
    applications: ['Konstruksi', 'Furniture', 'Pasar Lokal'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '3.6 × 1220 × 2440',
      isiCrate: '300',
      m3: '3.2149',
      grade: 'UTY / RUK',
      glue: 'T2 REGULER',
      type: 'ALB / KK',
      remarks: 'LOKAL',
      transport: 'Trailer',
      capacity: '20 & 60 m³',
    },
  },
  {
    id: '7',
    name: 'Thick Plywood Local (7.5 mm)',
    slug: 'thick-plywood-local-7.5',
    translationKey: 'p7',
    category: 'Thick Plywood',
    shortDescription: 'Size 7.5 × 1220 × 2440 | Grade UTY/RUK | Market Lokal',
    description:
      'Thick Plywood ketebalan 7.5mm untuk pasar lokal, grade UTY/RUK.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['7.5mm'],
    grade: 'UTY/RUK',
    features: ['Grade Lokal UTY/RUK', 'Lem T2 Regular', 'Jens ALB/KK'],
    applications: ['Konstruksi Menengah', 'Furniture', 'Pasar Lokal'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '7.5 × 1220 × 2440',
      isiCrate: '150',
      m3: '3.3489',
      grade: 'UTY / RUK',
      glue: 'T2 REGULER',
      type: 'ALB / KK',
      remarks: 'LOKAL',
      transport: 'Trailer / Tronton',
      capacity: '14 & 46 / 60 m³',
    },
  },
  {
    id: '8',
    name: 'Thick Plywood Local (12 mm)',
    slug: 'thick-plywood-local-12',
    translationKey: 'p8',
    category: 'Thick Plywood',
    shortDescription: 'Size 12 × 1220 × 2440 | Grade UTY/RUK | Market Lokal',
    description:
      'Thick Plywood ketebalan 12mm untuk pasar lokal, grade UTY/RUK.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['12mm'],
    grade: 'UTY/RUK',
    features: ['Grade Lokal UTY/RUK', 'Lem T2 Regular', 'Jenis Albasia (ALB)'],
    applications: ['Konstruksi Berat', 'Furniture', 'Pasar Lokal'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '12 × 1220 × 2440',
      isiCrate: '90',
      m3: '3.2149',
      grade: 'UTY / RUK',
      glue: 'T2 REGULER',
      type: 'ALB',
      remarks: 'LOKAL',
      transport: 'Trailer',
      capacity: '20 & 64 m³',
    },
  },
  {
    id: '9',
    name: 'Thick Plywood Export (15 mm)',
    slug: 'thick-plywood-export-15',
    translationKey: 'p9',
    category: 'Thick Plywood',
    shortDescription: 'Size 15 × 1220 × 2440 | Grade BB/CC | Market Export',
    description:
      'Thick Plywood Export ketebalan 15mm, grade BB/CC, lem T2 Regular.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['15mm'],
    grade: 'BB/CC',
    features: ['Grade Export BB/CC', 'Lem T2 Regular', 'Jenis ALB/KK'],
    applications: ['Construction Export', 'High Grade Furniture'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '15 × 1220 × 2440',
      isiCrate: '70',
      m3: '3.2595',
      grade: 'BB / CC',
      glue: 'T2 REGULER',
      type: 'ALB / KK',
      remarks: 'EXPORT',
      transport: 'Container 40’ HC',
      capacity: '18 & 60 m³',
    },
  },
  {
    id: '10',
    name: 'Thick Plywood Local Export Spec',
    slug: 'thick-plywood-local-export-spec',
    translationKey: 'p10',
    category: 'Thick Plywood',
    shortDescription: 'Size 15 × 1220 × 2440 | Grade UTY/EXP | Market Lokal',
    description:
      'Thick Plywood untuk pasar lokal dengan spesifikasi ekspor, ketebalan 15mm.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['15mm'],
    grade: 'UTY/EXP',
    features: ['Grade Lokal spec Export', 'Lem T2F 4', 'Jenis Albasia (ALB)'],
    applications: ['Premium Local Projects', 'High End Furniture'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '15 × 1220 × 2440',
      isiCrate: '90',
      m3: '3.2149',
      grade: 'UTY / EXP',
      glue: 'T2F *4',
      type: 'ALB',
      remarks: 'LOKAL',
      transport: 'Trailer',
      capacity: '20 & 60 m³',
    },
  },
  {
    id: '11',
    name: 'Heavy Plywood Export (18 mm)',
    slug: 'heavy-plywood-export-18',
    translationKey: 'p11',
    category: 'Heavy Plywood',
    shortDescription: 'Size 18 × 1220 × 2440 | Grade BB/CC | Market Export',
    description:
      'Heavy Plywood Export ketebalan 18mm, grade BB/CC, lem T2 Regular.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['18mm'],
    grade: 'BB/CC',
    features: [
      'Grade Export BB/CC',
      'Lem T2 Regular',
      'Jenis ALB/KK',
      'Heavy Duty',
    ],
    applications: ['Heavy Construction', 'Industrial', 'Export Market'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '18 × 1220 × 2440',
      isiCrate: '35 & 60',
      m3: '1.8753',
      grade: 'BB / CC',
      glue: 'T2 REGULER',
      type: 'ALB / KK',
      remarks: 'EXPORT',
      transport: 'Container 40’ HC',
      capacity: '18 & 58 m³',
    },
  },
  {
    id: '12',
    name: 'Heavy Plywood Local (18 mm)',
    slug: 'heavy-plywood-local-18',
    translationKey: 'p12',
    category: 'Heavy Plywood',
    shortDescription: 'Size 18 × 1220 × 2440 | Grade UTY/RUK | Market Lokal',
    description:
      'Heavy Plywood untuk pasar lokal ketebalan 18mm, grade UTY/RUK.',
    sizes: ['1220 x 2440 mm'],
    thickness: ['18mm'],
    grade: 'UTY/RUK',
    features: [
      'Grade Lokal UTY/RUK',
      'Lem T2 Regular',
      'Jenis ALB/KK',
      'Heavy Duty',
    ],
    applications: ['Heavy Construction', 'Furniture', 'Pasar Lokal'],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      size: '18 × 1220 × 2440',
      isiCrate: '60',
      m3: '3.2149',
      grade: 'UTY / RUK',
      glue: 'T2 REGULER',
      type: 'ALB / KK',
      remarks: 'LOKAL',
      transport: 'Trailer',
      capacity: '20 & 60 m³',
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug)
}
