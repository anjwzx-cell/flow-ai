import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus, BarChart, Users, Zap } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Mock data - replace with actual database queries
  const stats = {
    totalWorkflows: 5,
    activeWorkflows: 3,
    totalLeads: 1234,
    conversionRate: 42
  }

  const recentWorkflows = [
    { id: 1, name: 'Lead Capture Form', status: 'active', lastRun: '2 hours ago' },
    { id: 2, name: 'Email Follow-up', status: 'active', lastRun: '5 hours ago' },
    { id: 3, name: 'CRM Sync', status: 'paused', lastRun: '1 day ago' },
  ]

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background">
        <div className="container py-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.email}</p>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Workflows</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalWorkflows}</div>
              <p className="text-xs text-muted-foreground">
                {stats.activeWorkflows} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLeads}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.conversionRate}%</div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Automations</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeWorkflows}</div>
              <p className="text-xs text-muted-foreground">
                Running 24/7
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/dashboard/workflows">
              <Button className="w-full h-auto py-6 flex flex-col items-center gap-2">
                <Plus className="h-6 w-6" />
                <span>Create Workflow</span>
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2">
                <Users className="h-6 w-6" />
                <span>Manage Account</span>
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2">
                <BarChart className="h-6 w-6" />
                <span>Upgrade Plan</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Recent Workflows */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recent Workflows</h2>
            <Link href="/dashboard/workflows">
              <Button variant="ghost">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentWorkflows.map((workflow) => (
              <Card key={workflow.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{workflow.name}</CardTitle>
                  <CardDescription>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      workflow.status === 'active' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {workflow.status}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Last run: {workflow.lastRun}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}