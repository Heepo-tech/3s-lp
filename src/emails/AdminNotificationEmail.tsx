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

interface AdminNotificationEmailProps {
  fullName: string
  email: string
  phone?: string
  companyName?: string
  productInterest: string
  quantity?: string
  message?: string
  submittedAt: string
}

export default function AdminNotificationEmail({
  fullName,
  email,
  phone,
  companyName,
  productInterest,
  quantity,
  message,
  submittedAt,
}: AdminNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Permintaan penawaran baru dari {fullName} - {productInterest}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={alertBox}>
            <Heading style={h1}>🔔 Permintaan Penawaran Baru!</Heading>
          </Section>

          <Text style={text}>
            Anda menerima permintaan penawaran baru dari website 3S Plywood.
          </Text>

          <Section style={detailsSection}>
            <Heading as="h2" style={h2}>
              Informasi Pelanggan:
            </Heading>

            <table style={detailsTable}>
              <tbody>
                <tr style={tableRow}>
                  <td style={labelCell}>Nama Lengkap:</td>
                  <td style={valueCell}>
                    <strong>{fullName}</strong>
                  </td>
                </tr>
                <tr style={tableRow}>
                  <td style={labelCell}>Email:</td>
                  <td style={valueCell}>
                    <a href={`mailto:${email}`} style={link}>
                      {email}
                    </a>
                  </td>
                </tr>
                {phone && (
                  <tr style={tableRow}>
                    <td style={labelCell}>Nomor Telepon:</td>
                    <td style={valueCell}>
                      <a href={`tel:${phone}`} style={link}>
                        {phone}
                      </a>
                    </td>
                  </tr>
                )}
                {companyName && (
                  <tr style={tableRow}>
                    <td style={labelCell}>Nama Perusahaan:</td>
                    <td style={valueCell}>
                      <strong>{companyName}</strong>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Section>

          <Section style={detailsSection}>
            <Heading as="h2" style={h2}>
              Detail Permintaan:
            </Heading>

            <table style={detailsTable}>
              <tbody>
                <tr style={tableRow}>
                  <td style={labelCell}>Jenis Produk:</td>
                  <td style={valueCell}>
                    <strong>{productInterest}</strong>
                  </td>
                </tr>
                {quantity && (
                  <tr style={tableRow}>
                    <td style={labelCell}>Kuantitas:</td>
                    <td style={valueCell}>{quantity}</td>
                  </tr>
                )}
                {message && (
                  <tr style={tableRow}>
                    <td style={labelCell}>Pesan/Kebutuhan:</td>
                    <td style={valueCell}>{message}</td>
                  </tr>
                )}
                <tr style={tableRow}>
                  <td style={labelCell}>Waktu Pengajuan:</td>
                  <td style={valueCell}>{submittedAt}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Hr style={hr} />

          <Section style={actionSection}>
            <Text style={actionText}>
              <strong>Tindak Lanjut:</strong>
              <br />• Hubungi pelanggan dalam waktu 1x24 jam
              <br />• Siapkan penawaran sesuai spesifikasi produk yang diminta
              <br />• Pastikan informasi harga dan ketersediaan stok terkini
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Email ini dikirim otomatis dari website 3S Plywood
            <br />© {new Date().getFullYear()} PT. Sekawan Sahabat Sejati
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

const alertBox = {
  backgroundColor: '#FEBA17',
  padding: '20px 40px',
  borderRadius: '8px 8px 0 0',
}

const h1 = {
  color: '#4E1F00',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#74512D',
  fontSize: '18px',
  fontWeight: '600',
  margin: '20px 0 12px',
}

const text = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 40px',
  margin: '24px 0',
}

const detailsSection = {
  padding: '0 40px',
  margin: '20px 0',
}

const detailsTable = {
  width: '100%',
  borderCollapse: 'collapse' as const,
}

const tableRow = {
  borderBottom: '1px solid #e6ebf1',
}

const labelCell = {
  padding: '12px 16px 12px 0',
  fontSize: '14px',
  fontWeight: '600',
  color: '#74512D',
  verticalAlign: 'top' as const,
  width: '35%',
}

const valueCell = {
  padding: '12px 0',
  fontSize: '14px',
  color: '#525f7f',
  verticalAlign: 'top' as const,
}

const link = {
  color: '#4E1F00',
  textDecoration: 'underline',
}

const actionSection = {
  margin: '20px 0',
  backgroundColor: '#F8F4E1',
  borderRadius: '8px',
  padding: '20px 40px',
}

const actionText = {
  color: '#4E1F00',
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
  lineHeight: '18px',
  padding: '0 40px',
  textAlign: 'center' as const,
  margin: '24px 0',
}
