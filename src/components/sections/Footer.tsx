'use client'

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = {
    produk: [
      { name: 'Plywood Standar', href: '/produk/plywood-standar' },
      { name: 'Plywood Marine', href: '/produk/plywood-marine' },
      { name: 'Plywood Film Faced', href: '/produk/plywood-film-faced' },
      { name: 'Plywood Decorative', href: '/produk/plywood-decorative' },
    ],
    perusahaan: [
      { name: 'Tentang Kami', href: '/tentang-kami' },
      { name: 'Blog', href: '/blog' },
      { name: 'Sertifikasi', href: '/sertifikasi' },
      { name: 'Karir', href: '/karir' },
    ],
    bantuan: [
      { name: 'FAQ', href: '/#faq' },
      { name: 'Kontak', href: '/#contact' },
      { name: 'Request Quotation', href: '/quotation' },
      { name: 'Download Katalog', href: '/downloads/catalog.pdf' },
    ],
  }

  return (
    <footer
      className="relative sticky z-0 bottom-0 left-0 w-full overflow-hidden"
      style={{ backgroundColor: '#2D1404' }}
    >
      {/* Dotted Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(248, 244, 225, 0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 w-full h-full px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3
                className="mb-3 text-base font-semibold text-white"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Kontak
              </h3>
              <div
                className="space-y-2 text-sm"
                style={{ color: '#F8F7F3', opacity: 0.7 }}
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#F8F7F3' }}
                  />
                  <div>
                    <div
                      className="font-semibold mb-1"
                      style={{ color: '#F8F7F3' }}
                    >
                      Alamat Pabrik:
                    </div>
                    <div>
                      Jl. Industri Raya No. 123
                      <br />
                      Kawasan Industri Jababeka
                      <br />
                      Cikarang, Bekasi 17530
                      <br />
                      Jawa Barat, Indonesia
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: '#F8F7F3' }}
                  />
                  <div>
                    <a
                      href="tel:+622112345678"
                      className="transition-colors"
                      style={{ color: '#F8F7F3' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e =>
                        (e.currentTarget.style.opacity = '0.7')
                      }
                    >
                      +62 21 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: '#F8F7F3' }}
                  />
                  <div>
                    <a
                      href="mailto:info@3s-plywood.com"
                      className="transition-colors"
                      style={{ color: '#F8F7F3' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e =>
                        (e.currentTarget.style.opacity = '0.7')
                      }
                    >
                      info@3s-plywood.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Produk */}
            <div>
              <h3
                className="mb-3 text-base font-semibold"
                style={{ color: '#F8F7F3', fontFamily: 'var(--font-primary)' }}
              >
                Produk
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.produk.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ color: '#F8F7F3', opacity: 0.7 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e =>
                        (e.currentTarget.style.opacity = '0.7')
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perusahaan */}
            <div>
              <h3
                className="mb-3 text-base font-semibold"
                style={{ color: '#F8F7F3', fontFamily: 'var(--font-primary)' }}
              >
                Perusahaan
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.perusahaan.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ color: '#F8F7F3', opacity: 0.7 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e =>
                        (e.currentTarget.style.opacity = '0.7')
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bantuan */}
            <div>
              <h3
                className="mb-3 text-base font-semibold"
                style={{ color: '#F8F7F3', fontFamily: 'var(--font-primary)' }}
              >
                Bantuan
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.bantuan.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ color: '#F8F7F3', opacity: 0.7 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e =>
                        (e.currentTarget.style.opacity = '0.7')
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div
            className="mt-8 overflow-hidden rounded-xl border"
            style={{ borderColor: 'rgba(248, 247, 243, 0.2)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d107.1534!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwN8KwMDknMTIuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PT. Sekawan Sahabat Sejati Location"
            />
          </div>

          {/* Social Media & Copyright */}
          <div
            className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <p className="text-sm" style={{ color: '#F8F7F3', opacity: 0.6 }}>
              © {currentYear} PT. Sekawan Sahabat Sejati. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/3s-plywood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(248, 247, 243, 0.1)' }}
              >
                <Linkedin className="h-5 w-5" style={{ color: '#F8F7F3' }} />
              </a>
              <a
                href="https://instagram.com/3splywood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(248, 247, 243, 0.1)' }}
              >
                <Instagram className="h-5 w-5" style={{ color: '#F8F7F3' }} />
              </a>
              <a
                href="https://facebook.com/3splywood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(248, 247, 243, 0.1)' }}
              >
                <Facebook className="h-5 w-5" style={{ color: '#F8F7F3' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Large Company Name Background - 35% Submerged */}
        <div className="pointer-events-none absolute bottom-0 left-0 select-none">
          <h2
            className="font-black leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(60px, 8vw, 110px)',
              color: '#F8F7F3',
              fontFamily: 'var(--font-primary)',
              letterSpacing: '-0.04em',
              opacity: 0.15,
              transform: 'translateY(35%)',
              paddingLeft: '2rem',
            }}
          >
            PT. Sekawan Sahabat Sejati
          </h2>
        </div>
      </div>
    </footer>
  )
}
