'use client'

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { products } from '@/data/products'
import { Link } from '@/i18n/navigation'

export default function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  const quickLinks = {
    produk: products.map(product => ({
      name: t(`productData.${product.translationKey}.name`),
      href: `/produk/${product.slug}` as const,
    })),
    perusahaan: [
      { name: t('navigation.aboutUs'), href: '/tentang-kami' as const },
      { name: t('navigation.blog'), href: '/blog' as const },
      { name: t('navigation.certification'), href: '/sertifikasi' as const },
      { name: t('footer.links.career'), href: '/karir' as const },
    ],
    bantuan: [
      { name: t('footer.links.faq'), href: '/#faq' as const },
      { name: t('footer.links.contact'), href: '/#contact' as const },
      { name: t('footer.links.requestQuote'), href: '/quotation' as const },
      {
        name: t('footer.links.downloadCatalog'),
        href: '/downloads/catalog.pdf' as const,
      },
    ],
  }

  return (
    <footer
      id="footer"
      className="relative z-0 w-full overflow-hidden pt-12 sm:pt-16 lg:pt-20"
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

      <div className="relative z-10 w-full h-full px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3
                className="mb-3 text-sm sm:text-base font-semibold text-white"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                {t('footer.contact')}
              </h3>
              <div
                className="space-y-2 text-sm sm:text-sm"
                style={{ color: '#F8F7F3', opacity: 0.7 }}
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 mt-0.5"
                    style={{ color: '#F8F7F3' }}
                  />
                  <div>
                    <div
                      className="font-semibold mb-1 text-sm sm:text-sm"
                      style={{ color: '#F8F7F3' }}
                    >
                      {t('footer.factoryAddress')}
                    </div>
                    <div>{t('footer.fullAddress')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
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
                    className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
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
                className="mb-3 text-sm sm:text-base font-semibold"
                style={{ color: '#F8F7F3', fontFamily: 'var(--font-primary)' }}
              >
                {t('footer.products')}
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.produk.map(link => (
                  <li key={link.name}>
                    <Link
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      href={link.href as any}
                      prefetch={true}
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
                className="mb-3 text-sm sm:text-base font-semibold"
                style={{ color: '#F8F7F3', fontFamily: 'var(--font-primary)' }}
              >
                {t('footer.companySection')}
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.perusahaan.map(link => (
                  <li key={link.name}>
                    <Link
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      href={link.href as any}
                      prefetch={true}
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
                className="mb-3 text-sm sm:text-base font-semibold"
                style={{ color: '#F8F7F3', fontFamily: 'var(--font-primary)' }}
              >
                {t('footer.help')}
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.bantuan.map(link => (
                  <li key={link.name}>
                    <Link
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      href={link.href as any}
                      prefetch={true}
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
            className="mt-6 sm:mt-8 overflow-hidden rounded-xl border"
            style={{ borderColor: 'rgba(248, 247, 243, 0.2)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.195151522227!2d110.2257641740927!3d-7.55325597457717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a83da0b2f13b7%3A0x823fbf23475d4a2c!2sPT.%20Sekawan%20Sahabat%20Sejati!5e0!3m2!1sid!2sid!4v1764076840003!5m2!1sid!2sid"
              width="100%"
              height="160"
              className="sm:h-[200px] md:h-[250px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PT. Sekawan Sahabat Sejati Location"
            />
          </div>

          {/* Social Media & Copyright */}
          <div
            className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 sm:pt-6 md:flex-row"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p
                className="text-xs sm:text-sm text-center md:text-left"
                style={{ color: '#F8F7F3', opacity: 0.6 }}
              >
                {t('footer.copyright', { year: currentYear })}
              </p>
              <div className="hidden md:block w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs sm:text-sm"
                  style={{ color: '#F8F7F3', opacity: 0.6 }}
                >
                  Designed by
                </span>
                <a
                  href="https://heepo.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/Hepoo-Logo.png"
                    alt="Heepo Design"
                    width={70}
                    height={28}
                    className="h-7 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  />
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://linkedin.com/company/3s-plywood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(248, 247, 243, 0.1)' }}
              >
                <Linkedin
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  style={{ color: '#F8F7F3' }}
                />
              </a>
              <a
                href="https://instagram.com/3splywood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(248, 247, 243, 0.1)' }}
              >
                <Instagram
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  style={{ color: '#F8F7F3' }}
                />
              </a>
              <a
                href="https://facebook.com/3splywood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(248, 247, 243, 0.1)' }}
              >
                <Facebook
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  style={{ color: '#F8F7F3' }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Large Company Name Background - 35% Submerged */}
        <div className="pointer-events-none absolute bottom-0 left-0 select-none">
          <h2
            className="font-black leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(24px, 6vw, 110px)',
              color: '#F8F7F3',
              fontFamily: 'var(--font-primary)',
              letterSpacing: '-0.04em',
              opacity: 0.08,
              transform: 'translateY(20%)',
              paddingLeft: 'clamp(1rem, 2vw, 2rem)',
            }}
          >
            PT. Sekawan Sahabat Sejati
          </h2>
        </div>
      </div>
    </footer>
  )
}
