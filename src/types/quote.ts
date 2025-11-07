export interface QuoteRequestFormData {
  fullName: string
  email: string
  phone?: string
  companyName?: string
  productInterest: string
  quantity?: string
  message?: string
}

export interface QuoteRequestEmailProps extends QuoteRequestFormData {
  submittedAt: string
}
