'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

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
    <footer className="relative z-0 bg-white">
      <div className="sticky bottom-0 left-0 w-full" style={{ backgroundColor: 'var(--primary-dark-brown)' }}>
        <div className="relative overflow-hidden px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg font-bold text-white" style={{ background: 'var(--gradient-gold)' }}>
                    <span className="text-xl">3S</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold leading-tight text-white">
                      PT. Sekawan
                    </span>
                    <span className="text-sm font-bold leading-tight text-white">
                      Sahabat Sejati
                    </span>
                  </div>
                </Link>
                <p className="mb-6 text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
                  Produsen plywood premium dengan sertifikasi internasional. Melayani pasar lokal dan global sejak 1998.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-gold)' }} />
                    <div>
                      <div className="font-semibold text-white mb-1">Alamat Pabrik:</div>
                      <div>Jl. Industri Raya No. 123<br />Kawasan Industri Jababeka<br />Cikarang, Bekasi 17530<br />Jawa Barat, Indonesia</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--primary-gold)' }} />
                    <div>
                      <a href="tel:+622112345678" className="hover:text-white transition-colors">+62 21 1234 5678</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--primary-gold)' }} />
                    <div>
                      <a href="mailto:info@3s-plywood.com" className="hover:text-white transition-colors">info@3s-plywood.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Produk */}
              <div>
                <h3 className="mb-4 text-base font-semibold text-white" style={{ fontFamily: 'var(--font-primary)' }}>
                  Produk
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {quickLinks.produk.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perusahaan */}
              <div>
                <h3 className="mb-4 text-base font-semibold text-white" style={{ fontFamily: 'var(--font-primary)' }}>
                  Perusahaan
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {quickLinks.perusahaan.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bantuan */}
              <div>
                <h3 className="mb-4 text-base font-semibold text-white" style={{ fontFamily: 'var(--font-primary)' }}>
                  Bantuan
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {quickLinks.bantuan.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 overflow-hidden rounded-xl border" style={{ borderColor: 'rgba(254, 186, 23, 0.2)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d107.1534!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwN8KwMDknMTIuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT. Sekawan Sahabat Sejati Location"
              />
            </div>

            {/* Social Media & Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <p className="text-sm text-white/60">
                © {currentYear} PT. Sekawan Sahabat Sejati. All rights reserved.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/3s-plywood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(254, 186, 23, 0.1)' }}
                >
                  <Linkedin className="h-5 w-5" style={{ color: 'var(--primary-gold)' }} />
                </a>
                <a
                  href="https://instagram.com/3splywood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(254, 186, 23, 0.1)' }}
                >
                  <Instagram className="h-5 w-5" style={{ color: 'var(--primary-gold)' }} />
                </a>
                <a
                  href="https://facebook.com/3splywood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(254, 186, 23, 0.1)' }}
                >
                  <Facebook className="h-5 w-5" style={{ color: 'var(--primary-gold)' }} />
                </a>
              </div>
            </div>

            {/* Large Background Text */}
            <h2 className="pointer-events-none absolute bottom-0 left-0 translate-y-1/3 text-[80px] font-bold opacity-5 sm:text-[192px]" style={{ color: 'var(--primary-gold)', fontFamily: 'var(--font-primary)' }}>
              3S
            </h2>
          </div>
        </div>
      </div>
    </footer>
  )
}
