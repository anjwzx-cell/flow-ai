import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, CreditCard, Mail, BarChart, TrendingUp, Activity } from 'lucide-react'

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // TODO: Check if user is admin
  // For now, we'll allow access (implement proper admin check in production)

  // Mock admin stats
  const stats = {
    totalUsers: 1234,
    activeSubscriptions: 456,
    totalRevenue: 45678,
    newsletterSubscribers: 7890,
    monthlyGrowth: 23,
    activeWorkflows: 5678
  }

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background">
        <div className="container py-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and management</p>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +{stats.monthlyGrowth}% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeSubscriptions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {((stats.activeSubscriptions / stats.totalUsers) * 100).toFixed(1)}% conversion rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.newsletterSubscribers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +32% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeWorkflows.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Running 24/7
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platform Health</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <p className="text-xs text-muted-foreground">
                Uptime this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/users">
              <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2">
                <Users className="h-6 w-6" />
                <span>Manage Users</span>
              </Button>
            </Link>
            <Link href="/admin/subscriptions">
              <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2">
                <CreditCard className="h-6 w-6" />
                <span>Subscriptions</span>
              </Button>
            </Link>
            <Link href="/admin/newsletter">
              <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2">
                <Mail className="h-6 w-6" />
                <span>Newsletter</span>
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2">
                <BarChart className="h-6 w-6" />
                <span>Analytics</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { action: 'New user registered', user: 'john@example.com', time: '2 minutes ago' },
                  { action: 'Subscription upgraded', user: 'jane@example.com', time: '15 minutes ago' },
                  { action: 'Workflow created', user: 'bob@example.com', time: '1 hour ago' },
                  { action: 'Payment received', user: 'alice@example.com', time: '2 hours ago' },
                  { action: 'Newsletter sent', user: 'System', time: '3 hours ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}