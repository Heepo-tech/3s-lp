import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import AdminNotificationEmail from '@/emails/AdminNotificationEmail'
import QuoteRequestEmail from '@/emails/QuoteRequestEmail'
import { quoteRequestSchema } from '@/lib/schemas/quoteRequest'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate data with Zod
    const validationResult = quoteRequestSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validasi gagal',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Generate timestamp
    const submittedAt = new Date().toLocaleString('id-ID', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Jakarta',
    })

    // Email data
    const emailData = {
      ...data,
      submittedAt,
    }

    // Send confirmation email to customer
    const customerEmailResult = await resend.emails.send({
      from: '3S Plywood <onboarding@resend.dev>', // Update this with your verified domain
      to: data.email,
      subject: 'Terima Kasih Atas Permintaan Penawaran Anda',
      react: QuoteRequestEmail(emailData),
    })

    // Send notification email to admin
    const adminEmail = process.env.ADMIN_EMAIL || 'azizfrahmanxv@gmail.com'
    const adminEmailResult = await resend.emails.send({
      from: '3S Plywood <onboarding@resend.dev>', // Update this with your verified domain
      to: adminEmail,
      subject: `Permintaan Penawaran Baru: ${data.productInterest} - ${data.fullName}`,
      react: AdminNotificationEmail(emailData),
    })

    // Check for errors
    if (customerEmailResult.error || adminEmailResult.error) {
      console.error('Email sending error:', {
        customer: customerEmailResult.error,
        admin: adminEmailResult.error,
      })

      return NextResponse.json(
        {
          error: 'Gagal mengirim email',
          details: {
            customer: customerEmailResult.error,
            admin: adminEmailResult.error,
          },
        },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Permintaan penawaran berhasil dikirim',
        emailIds: {
          customer: customerEmailResult.data?.id,
          admin: adminEmailResult.data?.id,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quote request API error:', error)

    return NextResponse.json(
      {
        error: 'Terjadi kesalahan pada server',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
