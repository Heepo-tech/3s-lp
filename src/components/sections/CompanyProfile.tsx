'use client'

import { motion } from 'framer-motion'
import { Globe, Award, Users, Factory } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import SimpleMarquee from '@/components/fancy/blocks/simple-marquee'
import TextHighlighter from '@/components/fancy/text/text-highlighter'

export default function CompanyProfile() {
  const t = useTranslations()

  // Factory working images for background marquee
  const workingImages = [
    '/working/IMG_5687.jpg',
    '/working/IMG_5688.jpg',
    '/working/IMG_5689.jpg',
    '/working/IMG_5690.jpg',
    '/working/IMG_5691.jpg',
    '/working/IMG_5692.jpg',
    '/working/IMG_5693.jpg',
    '/working/IMG_5695.jpg',
    '/working/IMG_5696.jpg',
    '/working/IMG_5698.jpg',
    '/working/IMG_5701.jpg',
    '/working/IMG_5702.jpg',
    '/working/IMG_5703.jpg',
    '/working/IMG_5704.jpg',
    '/working/IMG_5705.jpg',
    '/working/IMG_5706.jpg',
    '/working/IMG_5707.jpg',
    '/working/IMG_5708.jpg',
    '/working/IMG_5709.jpg',
    '/working/IMG_5710.jpg',
    '/working/IMG_5713.jpg',
    '/working/IMG_5714.jpg',
    '/working/IMG_5722.jpg',
    '/working/IMG_5723.jpg',
  ]

  // Desktop layout: 3 rows (8 images each) - for larger screens
  const desktopRows = {
    row1: workingImages.slice(0, 8),
    row2: workingImages.slice(8, 16),
    row3: workingImages.slice(16, 24),
  }

  // Mobile layout: 7 rows (4 images each) - for full coverage from top to bottom
  const mobileRows = {
    row1: workingImages.slice(0, 4), // First 4 images
    row2: workingImages.slice(4, 8), // Next 4 images
    row3: workingImages.slice(8, 12), // Next 4 images
    row4: workingImages.slice(12, 16), // Next 4 images
    row5: workingImages.slice(16, 20), // Next 4 images
    row6: workingImages.slice(20, 24), // Last 4 unique images
    row7: workingImages.slice(0, 4), // Reuse first 4 for full section coverage
  }

  const trustElements = [
    {
      icon: Globe,
      title: t('companyProfile.trustElements.globalReach.title'),
      description: t('companyProfile.trustElements.globalReach.description'),
    },
    {
      icon: Award,
      title: t('companyProfile.trustElements.certification.title'),
      description: t('companyProfile.trustElements.certification.description'),
    },
    {
      icon: Users,
      title: t('companyProfile.trustElements.professional.title'),
      description: t('companyProfile.trustElements.professional.description'),
    },
    {
      icon: Factory,
      title: t('companyProfile.trustElements.modern.title'),
      description: t('companyProfile.trustElements.modern.description'),
    },
  ]

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      {/* Background Marquee Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.12] md:opacity-[0.15] pointer-events-none">
        {/* MOBILE ONLY: 7 Rows - Full Coverage from Top to Bottom */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-center items-center gap-4 py-4">
          {/* Mobile Row 1 - Left */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="left"
          >
            {mobileRows.row1.map((src, i) => (
              <div key={i} className="relative mx-2 h-24 w-36">
                <Image
                  src={src}
                  alt={`Factory ${i + 1}`}
                  fill
                  sizes="144px"
                  className="object-cover rounded-lg"
                  quality={85}
                  priority={i < 2}
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Mobile Row 2 - Right */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="right"
          >
            {mobileRows.row2.map((src, i) => (
              <div key={i} className="relative mx-2 h-24 w-36">
                <Image
                  src={src}
                  alt={`Factory ${i + 5}`}
                  fill
                  sizes="144px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Mobile Row 3 - Left */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="left"
          >
            {mobileRows.row3.map((src, i) => (
              <div key={i} className="relative mx-2 h-24 w-36">
                <Image
                  src={src}
                  alt={`Factory ${i + 9}`}
                  fill
                  sizes="144px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Mobile Row 4 - Right */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="right"
          >
            {mobileRows.row4.map((src, i) => (
              <div key={i} className="relative mx-2 h-24 w-36">
                <Image
                  src={src}
                  alt={`Factory ${i + 13}`}
                  fill
                  sizes="144px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Mobile Row 5 - Left */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="left"
          >
            {mobileRows.row5.map((src, i) => (
              <div key={i} className="relative mx-2 h-24 w-36">
                <Image
                  src={src}
                  alt={`Factory ${i + 17}`}
                  fill
                  sizes="144px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Mobile Row 6 - Right */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="right"
          >
            {mobileRows.row6.map((src, i) => (
              <div key={i} className="relative mx-2 h-24 w-36">
                <Image
                  src={src}
                  alt={`Factory ${i + 21}`}
                  fill
                  sizes="144px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Mobile Row 7 - Left */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="left"
          >
            {mobileRows.row7.map((src, i) => (
              <div key={i} className="relative mx-2 h-24 w-36">
                <Image
                  src={src}
                  alt={`Factory ${i + 1}`}
                  fill
                  sizes="144px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}
          </SimpleMarquee>
        </div>

        {/* DESKTOP/TABLET: 3 Rows - Large Images for Elegant Look */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-evenly items-center h-full">
          {/* Desktop Row 1 - Left */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="left"
          >
            {desktopRows.row1.map((src, i) => (
              <div
                key={i}
                className="relative mx-2 sm:mx-3 h-40 w-56 lg:h-56 lg:w-72"
              >
                <Image
                  src={src}
                  alt={`Factory ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 224px, 288px"
                  className="object-cover rounded-lg"
                  quality={85}
                  priority={i < 2}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Desktop Row 2 - Right */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="right"
          >
            {desktopRows.row2.map((src, i) => (
              <div
                key={i}
                className="relative mx-2 sm:mx-3 h-40 w-56 lg:h-56 lg:w-72"
              >
                <Image
                  src={src}
                  alt={`Factory ${i + 9}`}
                  fill
                  sizes="(max-width: 1024px) 224px, 288px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            ))}
          </SimpleMarquee>

          {/* Desktop Row 3 - Left */}
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={6}
            draggable={false}
            slowdownOnHover={false}
            direction="left"
          >
            {desktopRows.row3.map((src, i) => (
              <div
                key={i}
                className="relative mx-2 sm:mx-3 h-40 w-56 lg:h-56 lg:w-72"
              >
                <Image
                  src={src}
                  alt={`Factory ${i + 17}`}
                  fill
                  sizes="(max-width: 1024px) 224px, 288px"
                  className="object-cover rounded-lg"
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            ))}
          </SimpleMarquee>
        </div>
      </div>

      {/* Fade Effects Layer - Adjusted for Mobile vs Desktop */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Fade Effect - Top (Shorter on mobile for more visibility) */}
        <div
          className="absolute top-0 left-0 right-0 h-16 md:h-24 lg:h-32"
          style={{
            background:
              'linear-gradient(to bottom, var(--primary-cream) 0%, transparent 100%)',
          }}
        />
        {/* Fade Effect - Bottom (Shorter on mobile) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-40 lg:h-56"
          style={{
            background:
              'linear-gradient(to top, var(--primary-cream) 0%, var(--primary-cream) 30%, transparent 100%)',
          }}
        />
        {/* Fade Effect - Left */}
        <div
          className="absolute top-0 bottom-0 left-0 w-12 md:w-16 lg:w-24"
          style={{
            background:
              'linear-gradient(to right, var(--primary-cream), transparent)',
          }}
        />
        {/* Fade Effect - Right */}
        <div
          className="absolute top-0 bottom-0 right-0 w-12 md:w-16 lg:w-24"
          style={{
            background:
              'linear-gradient(to left, var(--primary-cream), transparent)',
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('companyProfile.titlePrefix')}{' '}
            <span style={{ color: 'var(--primary-brown)' }}>
              {t('companyProfile.companyName')}
            </span>
          </h2>
        </motion.div>

        {/* Company Description with Text Highlighter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          {/* White card container for better visibility */}
          <div
            className="rounded-2xl px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(82, 36, 5, 0.1)',
            }}
          >
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed text-justify"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)',
              }}
            >
              {t('companyProfile.description.intro')}{' '}
              <TextHighlighter
                as="span"
                highlightColor="rgba(251, 191, 36, 0.3)"
                triggerType="inView"
              >
                {t('companyProfile.description.highlight1')}
              </TextHighlighter>{' '}
              {t('companyProfile.description.text1')}{' '}
              <TextHighlighter
                as="span"
                highlightColor="rgba(251, 191, 36, 0.3)"
                triggerType="inView"
              >
                {t('companyProfile.description.highlight2')}
              </TextHighlighter>
              {t('companyProfile.description.text2')}{' '}
              <TextHighlighter
                as="span"
                highlightColor="rgba(251, 191, 36, 0.3)"
                triggerType="inView"
              >
                {t('companyProfile.description.highlight3')}
              </TextHighlighter>{' '}
              {t('companyProfile.description.text3')}{' '}
              <TextHighlighter
                as="span"
                highlightColor="rgba(251, 191, 36, 0.3)"
                triggerType="inView"
              >
                {t('companyProfile.description.highlight4')}
              </TextHighlighter>
              {t('companyProfile.description.text4')}{' '}
              <TextHighlighter
                as="span"
                highlightColor="rgba(251, 191, 36, 0.3)"
                triggerType="inView"
              >
                {t('companyProfile.description.highlight5')}
              </TextHighlighter>{' '}
              {t('companyProfile.description.text5')}{' '}
              <TextHighlighter
                as="span"
                highlightColor="rgba(251, 191, 36, 0.3)"
                triggerType="inView"
              >
                {t('companyProfile.description.highlight6')}
              </TextHighlighter>{' '}
              {t('companyProfile.description.text6')}
            </p>
          </div>
        </motion.div>

        {/* Trust Elements Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative p-3 sm:p-4 md:p-6 rounded-xl border transition-all duration-300 md:hover:shadow-lg md:hover:-translate-y-2 overflow-hidden"
                style={{
                  backgroundColor: 'var(--neutral-white)',
                  borderColor: 'var(--neutral-medium)',
                }}
                onMouseEnter={e => {
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.borderColor = 'var(--primary-brown)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--neutral-medium)'
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 inline-flex rounded-lg p-3 transition-all duration-300"
                  style={{ backgroundColor: 'var(--primary-cream)' }}
                >
                  <Icon
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    style={{ color: 'var(--primary-brown)' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  {element.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-left"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  {element.description}
                </p>

                {/* Decorative gradient line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: 'var(--gradient-brown)' }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 rounded-2xl"
          style={{ background: 'var(--gradient-warm)' }}
        >
          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              1998
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.foundedLabel')}
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              50+
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.countriesLabel')}
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              500+
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.employeesLabel')}
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              100K+
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.capacityLabel')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
