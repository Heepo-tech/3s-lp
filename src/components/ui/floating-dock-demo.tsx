'use client'

import {
  IconHome,
  IconPackage,
  IconInfoCircle,
  IconCertificate,
  IconQuestionMark,
  IconMail,
  IconBrandWhatsapp,
  IconBrandInstagram,
} from '@tabler/icons-react'
import React from 'react'

import { FloatingDock } from '@/components/ui/floating-dock'

export default function FloatingDockDemo() {
  const links = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full" style={{ color: '#522405' }} />,
      href: '/',
    },
    {
      title: 'Produk',
      icon: (
        <IconPackage className="h-full w-full" style={{ color: '#522405' }} />
      ),
      href: '/#produk',
    },
    {
      title: 'Tentang Kami',
      icon: (
        <IconInfoCircle
          className="h-full w-full"
          style={{ color: '#522405' }}
        />
      ),
      href: '/tentang-kami',
    },
    {
      title: 'Sertifikasi',
      icon: (
        <IconCertificate
          className="h-full w-full"
          style={{ color: '#522405' }}
        />
      ),
      href: '/#sertifikasi',
    },
    {
      title: 'FAQ',
      icon: (
        <IconQuestionMark
          className="h-full w-full"
          style={{ color: '#522405' }}
        />
      ),
      href: '/#faq',
    },
    {
      title: 'Kontak',
      icon: <IconMail className="h-full w-full" style={{ color: '#522405' }} />,
      href: '/#kontak',
    },
    {
      title: 'WhatsApp',
      icon: (
        <IconBrandWhatsapp
          className="h-full w-full"
          style={{ color: '#522405' }}
        />
      ),
      href: 'https://wa.me/6281234567890', // Ganti dengan nomor WhatsApp bisnis Anda
    },
    {
      title: 'Instagram',
      icon: (
        <IconBrandInstagram
          className="h-full w-full"
          style={{ color: '#522405' }}
        />
      ),
      href: 'https://instagram.com/3s-plywood', // Ganti dengan Instagram profile Anda
    },
  ]

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  )
}
