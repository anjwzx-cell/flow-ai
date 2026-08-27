import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // TODO: Check if user is admin
    // For now, allow all authenticated users

    const subscriptions = await prisma.subscription.findMany({
      include: {
        userProfile: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(subscriptions)
  } catch (error) {
    console.error('Subscriptions fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions' },
      { status: 500 }
    )
  }
}