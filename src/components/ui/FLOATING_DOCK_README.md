# Floating Dock Component

Komponen navigasi floating dock dengan magnification effect (macOS-style) untuk website PT. Sekawan Sahabat Sejati.

## 📦 Files

- `floating-dock.tsx` - Main component dengan desktop & mobile variants
- `floating-dock-demo.tsx` - Demo implementation dengan customization untuk plywood business

## 🎨 Design

**Color Palette:**

- Background: `#F8F7F3` (Cream)
- Icon Background: `#E8E6E1` (Warm Beige)
- Icon Color: `#522405` (Brown)
- Tooltip: Cream background dengan brown text

**Features:**

- **Desktop**: Horizontal dock dengan magnification effect saat hover
- **Mobile**: Collapse button dengan staggered animation saat expand
- **Tooltip**: Label muncul saat hover (desktop only)
- **Smooth animations**: Menggunakan Framer Motion spring physics

## 🚀 Usage

### Basic Implementation

```tsx
import FloatingDockDemo from '@/components/ui/floating-dock-demo'

export default function Page() {
  return (
    <div>
      <FloatingDockDemo />
    </div>
  )
}
```

### Custom Links

```tsx
import { FloatingDock } from '@/components/ui/floating-dock'
import { IconHome, IconMail } from '@tabler/icons-react'

const customLinks = [
  {
    title: 'Home',
    icon: <IconHome className="h-full w-full" style={{ color: '#522405' }} />,
    href: '/',
  },
  {
    title: 'Contact',
    icon: <IconMail className="h-full w-full" style={{ color: '#522405' }} />,
    href: '/contact',
  },
]

;<FloatingDock items={customLinks} />
```

## 📍 Integration ke Layout

### Option 1: Global Layout (Recommended)

Tambahkan di `src/app/layout.tsx`:

```tsx
import FloatingDockDemo from '@/components/ui/floating-dock-demo'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <FloatingDockDemo />
      </body>
    </html>
  )
}
```

### Option 2: Specific Page

Tambahkan di page tertentu (misalnya homepage):

```tsx
import FloatingDockDemo from '@/components/ui/floating-dock-demo'

export default function HomePage() {
  return (
    <div>
      {/* Your page content */}
      <FloatingDockDemo />
    </div>
  )
}
```

## ⚙️ Customization

### Update Links

Edit file `floating-dock-demo.tsx` untuk mengubah navigation links:

```tsx
const links = [
  {
    title: 'Your Title',
    icon: <YourIcon className="h-full w-full" style={{ color: '#522405' }} />,
    href: '/your-path',
  },
  // Add more links...
]
```

### Available Icons

Menggunakan `@tabler/icons-react`:

- `IconHome` - Home/Beranda
- `IconPackage` - Products/Produk
- `IconInfoCircle` - About/Tentang
- `IconCertificate` - Certification/Sertifikasi
- `IconQuestionMark` - FAQ
- `IconMail` - Contact/Email
- `IconBrandWhatsapp` - WhatsApp
- `IconBrandInstagram` - Instagram
- `IconBrandFacebook` - Facebook
- `IconBrandLinkedin` - LinkedIn
- `IconBrandX` - X/Twitter

[Lihat semua icons](https://tabler.io/icons)

### Position Adjustment

Default position: `bottom-8 left-1/2 -translate-x-1/2` (bottom center)

Ubah positioning di `floating-dock-demo.tsx`:

```tsx
// Bottom Left
<div className="fixed bottom-8 left-8 z-50">

// Bottom Right
<div className="fixed bottom-8 right-8 z-50">

// Top Center
<div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
```

### Update WhatsApp & Social Media Links

Edit di `floating-dock-demo.tsx`:

```tsx
{
  title: "WhatsApp",
  icon: <IconBrandWhatsapp className="h-full w-full" style={{ color: '#522405' }} />,
  href: "https://wa.me/628123456789", // Nomor WhatsApp bisnis
},
{
  title: "Instagram",
  icon: <IconBrandInstagram className="h-full w-full" style={{ color: '#522405' }} />,
  href: "https://instagram.com/your-account", // Instagram profile
}
```

## 🎯 Best Practices

1. **Z-Index**: Floating dock menggunakan `z-50` untuk memastikan selalu di atas content
2. **Fixed Position**: Menggunakan `fixed` agar tetap visible saat scroll
3. **Responsive**: Otomatis switch antara desktop (horizontal) dan mobile (vertical collapse)
4. **Accessibility**: Semua links accessible via keyboard navigation

## 🔧 Troubleshooting

### Floating Dock Tidak Muncul

- Pastikan component di-render di level yang benar (layout/page)
- Check z-index conflicts dengan component lain
- Verify bahwa `@tabler/icons-react` sudah terinstall

### Icons Tidak Terlihat

- Pastikan icon color sudah di-set: `style={{ color: '#522405' }}`
- Check import icons dari `@tabler/icons-react`

### Overlap dengan Footer

- Adjust `bottom` position: `bottom-24` atau lebih tinggi
- Atau adjust footer margin untuk accommodate floating dock

## 📝 Notes

- Component menggunakan `'use client'` directive (client-side rendering)
- Animations powered by `motion/react` (Framer Motion)
- Icons dari `@tabler/icons-react` package
- Styling menggunakan inline styles untuk 2-color palette consistency
