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
    material: string
    glue: string
    moisture: string
    density: string
  }
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Plywood Standar',
    slug: 'plywood-standar',
    translationKey: 'standard',
    category: 'Standard',
    shortDescription:
      'Plywood serbaguna untuk berbagai kebutuhan konstruksi dan furniture',
    description:
      'Plywood standar kami dirancang untuk memenuhi kebutuhan umum dalam konstruksi dan pembuatan furniture. Terbuat dari kayu berkualitas tinggi dengan proses produksi yang presisi, plywood ini menawarkan kekuatan dan daya tahan yang optimal untuk berbagai aplikasi.',
    sizes: ['1220 x 2440 mm', '1250 x 2500 mm', 'Custom'],
    thickness: ['6mm', '9mm', '12mm', '15mm', '18mm', '21mm'],
    grade: 'BB/CC, C/D',
    features: [
      'Permukaan halus dan rata',
      'Kekuatan struktural tinggi',
      'Mudah dipotong dan dibentuk',
      'Harga kompetitif',
      'Stok selalu tersedia',
    ],
    applications: [
      'Konstruksi rumah dan bangunan',
      'Furniture rumah tangga',
      'Packing dan crating',
      'Interior design',
      'Partisi dan dinding',
    ],
    image: '/images/products/plywood-standar.jpg',
    specifications: {
      material: 'Hardwood/Softwood mix',
      glue: 'MR/WBP',
      moisture: '8-14%',
      density: '550-700 kg/m³',
    },
  },
  {
    id: '2',
    name: 'Plywood Marine',
    slug: 'plywood-marine',
    translationKey: 'marine',
    category: 'Premium',
    shortDescription: 'Plywood tahan air untuk aplikasi maritim dan outdoor',
    description:
      'Plywood Marine grade premium dengan ketahanan air superior. Dibuat dengan lem WBP (Water Boil Proof) dan kayu pilihan, produk ini ideal untuk aplikasi yang terpapar air dan kelembaban tinggi.',
    sizes: ['1220 x 2440 mm', '1250 x 2500 mm'],
    thickness: ['12mm', '15mm', '18mm', '21mm', '25mm'],
    grade: 'A/B, BB/BB',
    features: [
      'Tahan air 100%',
      'Lem WBP berkualitas tinggi',
      'Tidak mudah delaminasi',
      'Tahan terhadap jamur dan rayap',
      'Cocok untuk outdoor',
    ],
    applications: [
      'Pembuatan kapal dan perahu',
      'Konstruksi dermaga',
      'Furniture outdoor',
      'Bathroom dan kitchen cabinet',
      'Basement dan area lembab',
    ],
    image: '/images/products/plywood-marine.jpg',
    specifications: {
      material: '100% Hardwood',
      glue: 'WBP (Phenolic)',
      moisture: '8-12%',
      density: '650-750 kg/m³',
    },
  },
  {
    id: '3',
    name: 'Plywood Film Faced',
    slug: 'plywood-film-faced',
    translationKey: 'filmFaced',
    category: 'Professional',
    shortDescription:
      'Plywood dengan lapisan film untuk bekisting dan formwork',
    description:
      'Film Faced Plywood dengan permukaan dilapisi film phenolic resin berkualitas tinggi. Sangat ideal untuk bekisting beton karena permukaannya yang halus, tahan air, dan dapat digunakan berulang kali.',
    sizes: ['1220 x 2440 mm', '1250 x 2500 mm'],
    thickness: ['12mm', '15mm', '18mm', '21mm'],
    grade: 'A/A',
    features: [
      'Permukaan film anti lengket',
      'Tahan air dan cuaca ekstrem',
      'Dapat digunakan 15-20 kali',
      'Hasil cor beton halus',
      'Mudah dibersihkan',
    ],
    applications: [
      'Bekisting beton',
      'Formwork konstruksi',
      'Concrete shuttering',
      'Proyek infrastruktur',
      'High-rise building',
    ],
    image: '/images/products/plywood-film-faced.jpg',
    specifications: {
      material: 'Birch/Hardwood',
      glue: 'WBP (Phenolic)',
      moisture: '8-12%',
      density: '700-800 kg/m³',
    },
  },
  {
    id: '4',
    name: 'Plywood Decorative',
    slug: 'plywood-decorative',
    translationKey: 'decorative',
    category: 'Premium',
    shortDescription:
      'Plywood dekoratif dengan finish natural untuk interior mewah',
    description:
      'Plywood dekoratif premium dengan veneer kayu pilihan untuk hasil finishing yang indah. Cocok untuk interior mewah, furniture high-end, dan aplikasi yang mengutamakan estetika.',
    sizes: ['1220 x 2440 mm', '1250 x 2500 mm', 'Custom'],
    thickness: ['6mm', '9mm', '12mm', '15mm', '18mm'],
    grade: 'A/A, A/B',
    features: [
      'Veneer kayu natural premium',
      'Motif kayu alami indah',
      'Permukaan siap finishing',
      'Warna dan tekstur konsisten',
      'Berbagai pilihan veneer',
    ],
    applications: [
      'Interior design premium',
      'Furniture mewah',
      'Wall paneling',
      'Ceiling dekoratif',
      'Custom woodwork',
    ],
    image: '/images/products/plywood-decorative.jpg',
    specifications: {
      material: 'Premium Hardwood',
      glue: 'E1 Low Emission',
      moisture: '8-12%',
      density: '600-700 kg/m³',
    },
  },
  {
    id: '5',
    name: 'Plywood Commercial',
    slug: 'plywood-commercial',
    translationKey: 'commercial',
    category: 'Standard',
    shortDescription: 'Plywood komersial ekonomis untuk proyek skala besar',
    description:
      'Plywood komersial dengan kualitas standar dan harga ekonomis. Ideal untuk proyek-proyek skala besar yang membutuhkan volume tinggi dengan budget efisien.',
    sizes: ['1220 x 2440 mm', '1250 x 2500 mm'],
    thickness: ['9mm', '12mm', '15mm', '18mm'],
    grade: 'C/D, D/E',
    features: [
      'Harga sangat kompetitif',
      'Tersedia dalam volume besar',
      'Kualitas konsisten',
      'Cocok untuk mass production',
      'Delivery cepat',
    ],
    applications: [
      'Packing dan export crating',
      'Furniture produksi massal',
      'Konstruksi sementara',
      'Pallet dan container flooring',
      'General purpose',
    ],
    image: '/images/products/plywood-commercial.jpg',
    specifications: {
      material: 'Mixed Hardwood',
      glue: 'MR',
      moisture: '8-14%',
      density: '500-650 kg/m³',
    },
  },
  {
    id: '6',
    name: 'Plywood Engineered',
    slug: 'plywood-engineered',
    translationKey: 'engineered',
    category: 'Professional',
    shortDescription: 'Plywood engineered untuk aplikasi struktural demanding',
    description:
      'Engineered Plywood dengan standar struktural tinggi. Dirancang khusus untuk aplikasi yang membutuhkan kekuatan dan stabilitas dimensional superior.',
    sizes: ['1220 x 2440 mm', '1250 x 2500 mm'],
    thickness: ['12mm', '15mm', '18mm', '21mm', '25mm'],
    grade: 'B/BB, BB/CC',
    features: [
      'Kekuatan struktural maksimal',
      'Stabilitas dimensional tinggi',
      'Minimal warping',
      'Certified structural grade',
      'Konsisten layer by layer',
    ],
    applications: [
      'Structural flooring',
      'Roof decking',
      'Industrial application',
      'Heavy duty furniture',
      'Engineered construction',
    ],
    image: '/images/products/plywood-engineered.jpg',
    specifications: {
      material: 'Select Hardwood',
      glue: 'WBP',
      moisture: '8-12%',
      density: '650-750 kg/m³',
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug)
}
