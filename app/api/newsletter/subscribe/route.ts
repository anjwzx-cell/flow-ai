import { prisma } from '@/lib/prisma'
import { resend } from '@/lib/resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      if (existingSubscriber.status === 'ACTIVE') {
        return NextResponse.json(
          { error: 'Already subscribed' },
          { status: 400 }
        )
      } else {
        // Reactivate if unsubscribed
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: { status: 'ACTIVE' },
        })
      }
    } else {
      // Create new subscriber
      await prisma.newsletterSubscriber.create({
        data: {
          email,
          status: 'ACTIVE',
        },
      })
    }

    // Send welcome email via Resend
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: email,
        subject: 'Welcome to Flow AI Newsletter',
        html: `
          <h1>Welcome to Flow AI!</h1>
          <p>Thank you for subscribing to our newsletter. You'll receive the latest updates on AI automation and workflow optimization.</p>
          <p>Stay tuned for valuable insights and tips!</p>
          <p>Best regards,<br>The Flow AI Team</p>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Continue even if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}