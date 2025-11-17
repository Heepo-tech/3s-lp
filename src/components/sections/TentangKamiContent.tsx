'use client'

import { motion } from 'framer-motion'
import { Users, Award, Target, Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'

import SimpleMarquee from '@/components/fancy/blocks/simple-marquee'

export default function TentangKamiContent() {
  const t = useTranslations()

  // Build achievements array from translations
  const achievements = [
    {
      year: t('aboutUs.journey.achievements.item1.year'),
      title: t('aboutUs.journey.achievements.item1.title'),
    },
    {
      year: t('aboutUs.journey.achievements.item2.year'),
      title: t('aboutUs.journey.achievements.item2.title'),
    },
    {
      year: t('aboutUs.journey.achievements.item3.year'),
      title: t('aboutUs.journey.achievements.item3.title'),
    },
    {
      year: t('aboutUs.journey.achievements.item4.year'),
      title: t('aboutUs.journey.achievements.item4.title'),
    },
    {
      year: t('aboutUs.journey.achievements.item5.year'),
      title: t('aboutUs.journey.achievements.item5.title'),
    },
    {
      year: t('aboutUs.journey.achievements.item6.year'),
      title: t('aboutUs.journey.achievements.item6.title'),
    },
  ]

  // Build values array from translations
  const values = [
    {
      icon: Users,
      title: t('aboutUs.values.items.integrity.title'),
      description: t('aboutUs.values.items.integrity.description'),
    },
    {
      icon: Award,
      title: t('aboutUs.values.items.quality.title'),
      description: t('aboutUs.values.items.quality.description'),
    },
    {
      icon: Target,
      title: t('aboutUs.values.items.innovation.title'),
      description: t('aboutUs.values.items.innovation.description'),
    },
    {
      icon: Heart,
      title: t('aboutUs.values.items.sustainability.title'),
      description: t('aboutUs.values.items.sustainability.description'),
    },
  ]

  const marqueeItems = achievements.map((achievement, index) => (
    <div
      key={index}
      className="mx-8 flex flex-col items-center justify-center rounded-xl border p-8 min-w-[300px]"
      style={{
        backgroundColor: 'var(--neutral-white)',
        borderColor: 'var(--neutral-medium)',
      }}
    >
      <div
        className="mb-3 text-4xl font-bold"
        style={{
          color: 'var(--primary-gold)',
          fontFamily: 'var(--font-primary)',
        }}
      >
        {achievement.year}
      </div>
      <div
        className="text-center text-sm font-medium"
        style={{
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-secondary)',
        }}
      >
        {achievement.title}
      </div>
    </div>
  ))

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: 'var(--primary-dark-brown)' }}
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, var(--primary-gold) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white px-4"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              {t('aboutUs.hero.title')}
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed text-center max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              {t('aboutUs.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perjalanan Kami - Marquee Section */}
      <section
        className="py-20 px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundColor: 'var(--primary-cream)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              {t('aboutUs.journey.title')}
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)',
              }}
            >
              {t('aboutUs.journey.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <SimpleMarquee
              baseVelocity={-1.5}
              direction="left"
              slowdownOnHover={true}
            >
              {marqueeItems}
            </SimpleMarquee>
          </motion.div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section
        className="py-20 px-6 lg:px-8"
        style={{ backgroundColor: 'var(--neutral-white)' }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: 'var(--primary-cream)',
                borderColor: 'var(--neutral-medium)',
              }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                {t('aboutUs.vision.title')}
              </h3>
              <p
                className="text-lg leading-relaxed text-justified"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-secondary)',
                }}
              >
                {t('aboutUs.vision.content')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: 'var(--primary-cream)',
                borderColor: 'var(--neutral-medium)',
              }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                {t('aboutUs.mission.title')}
              </h3>
              <ul
                className="space-y-3 text-base leading-relaxed text-justified"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-secondary)',
                }}
              >
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>{t('aboutUs.mission.items.item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>{t('aboutUs.mission.items.item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>{t('aboutUs.mission.items.item3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>{t('aboutUs.mission.items.item4')}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai Kami */}
      <section
        className="py-20 px-6 lg:px-8"
        style={{ background: 'var(--gradient-warm)' }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              {t('aboutUs.values.title')}
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)',
              }}
            >
              {t('aboutUs.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-6 rounded-xl border bg-white"
                  style={{ borderColor: 'var(--neutral-medium)' }}
                >
                  <div
                    className="mb-4 inline-flex rounded-xl p-4"
                    style={{ backgroundColor: 'var(--primary-cream)' }}
                  >
                    <Icon
                      className="h-8 w-8"
                      style={{ color: 'var(--primary-gold)' }}
                    />
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-justified"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-secondary)',
                    }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tim & Fasilitas */}
      <section
        className="py-20 px-6 lg:px-8 pb-20 sm:pb-32"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                {t('aboutUs.team.title')}
              </h2>
              <p
                className="text-lg leading-relaxed mb-6 text-justified"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-secondary)',
                }}
              >
                {t('aboutUs.team.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{
                      color: 'var(--primary-dark-brown)',
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    {t('aboutUs.team.stats.employees.value')}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t('aboutUs.team.stats.employees.label')}
                  </div>
                </div>
                <div>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{
                      color: 'var(--primary-dark-brown)',
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    {t('aboutUs.team.stats.engineers.value')}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t('aboutUs.team.stats.engineers.label')}
                  </div>
                </div>
                <div>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{
                      color: 'var(--primary-dark-brown)',
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    {t('aboutUs.team.stats.factory.value')}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t('aboutUs.team.stats.factory.label')}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <div
                className="aspect-video rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: 'var(--gradient-brown)' }}
              >
                [Factory Image/Video Placeholder]
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
