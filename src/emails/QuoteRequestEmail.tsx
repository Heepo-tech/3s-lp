import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface QuoteRequestEmailProps {
  fullName: string
  email: string
  phone?: string
  companyName?: string
  productInterest: string
  quantity?: string
  message?: string
  submittedAt: string
}

export default function QuoteRequestEmail({
  fullName,
  email,
  phone,
  companyName,
  productInterest,
  quantity,
  message,
  submittedAt,
}: QuoteRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Terima kasih atas permintaan penawaran Anda - PT. Sekawan Sahabat Sejati
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Terima Kasih Atas Permintaan Anda!</Heading>

          <Text style={text}>Halo {fullName},</Text>

          <Text style={text}>
            Terima kasih telah menghubungi PT. Sekawan Sahabat Sejati. Kami
            telah menerima permintaan penawaran Anda dan tim kami akan segera
            menghubungi Anda dalam waktu 1x24 jam.
          </Text>

          <Section style={detailsSection}>
            <Heading as="h2" style={h2}>
              Detail Permintaan Anda:
            </Heading>

            <table style={detailsTable}>
              <tbody>
                <tr>
                  <td style={labelCell}>Nama Lengkap:</td>
                  <td style={valueCell}>{fullName}</td>
                </tr>
                <tr>
                  <td style={labelCell}>Email:</td>
                  <td style={valueCell}>{email}</td>
                </tr>
                {phone && (
                  <tr>
                    <td style={labelCell}>Nomor Telepon:</td>
                    <td style={valueCell}>{phone}</td>
                  </tr>
                )}
                {companyName && (
                  <tr>
                    <td style={labelCell}>Nama Perusahaan:</td>
                    <td style={valueCell}>{companyName}</td>
                  </tr>
                )}
                <tr>
                  <td style={labelCell}>Jenis Produk:</td>
                  <td style={valueCell}>{productInterest}</td>
                </tr>
                {quantity && (
                  <tr>
                    <td style={labelCell}>Kuantitas:</td>
                    <td style={valueCell}>{quantity}</td>
                  </tr>
                )}
                {message && (
                  <tr>
                    <td style={labelCell}>Pesan:</td>
                    <td style={valueCell}>{message}</td>
                  </tr>
                )}
                <tr>
                  <td style={labelCell}>Waktu Pengajuan:</td>
                  <td style={valueCell}>{submittedAt}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Hr style={hr} />

          <Text style={text}>
            Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk
            menghubungi kami:
          </Text>

          <Section style={contactSection}>
            <Text style={contactText}>
              <strong>PT. Sekawan Sahabat Sejati</strong>
              <br />
              Email: info@3s-plywood.com
              <br />
              Telepon: +62 21 1234 5678
              <br />
              Website: www.3s-plywood.com
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            © {new Date().getFullYear()} PT. Sekawan Sahabat Sejati. All rights
            reserved.
            <br />
            Jl. Industri Raya No. 123, Kawasan Industri Jababeka, Cikarang,
            Bekasi 17530, Jawa Barat, Indonesia
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const h1 = {
  color: '#4E1F00',
  fontSize: '32px',
  fontWeight: '700',
  margin: '40px 0',
  padding: '0 40px',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#74512D',
  fontSize: '20px',
  fontWeight: '600',
  margin: '20px 0 10px',
}

const text = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 40px',
  margin: '16px 0',
}

const detailsSection = {
  padding: '0 40px',
  margin: '24px 0',
}

const detailsTable = {
  width: '100%',
  borderCollapse: 'collapse' as const,
}

const labelCell = {
  padding: '8px 0',
  fontSize: '14px',
  fontWeight: '600',
  color: '#74512D',
  verticalAlign: 'top' as const,
  width: '40%',
}

const valueCell = {
  padding: '8px 0',
  fontSize: '14px',
  color: '#525f7f',
  verticalAlign: 'top' as const,
}

const contactSection = {
  padding: '0 40px',
  margin: '16px 0',
}

const contactText = {
  color: '#525f7f',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 40px',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
  textAlign: 'center' as const,
  margin: '24px 0',
}
