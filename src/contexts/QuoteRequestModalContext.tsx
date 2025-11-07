'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface QuoteRequestModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const QuoteRequestModalContext = createContext<
  QuoteRequestModalContextType | undefined
>(undefined)

export function QuoteRequestModalProvider({
  children,
}: {
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <QuoteRequestModalContext.Provider
      value={{ isOpen, openModal, closeModal }}
    >
      {children}
    </QuoteRequestModalContext.Provider>
  )
}

export function useQuoteRequestModal() {
  const context = useContext(QuoteRequestModalContext)
  if (context === undefined) {
    throw new Error(
      'useQuoteRequestModal must be used within a QuoteRequestModalProvider'
    )
  }
  return context
}
