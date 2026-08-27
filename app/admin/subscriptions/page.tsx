'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, MoreVertical, CreditCard, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AdminSubscriptionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [subscriptions] = useState([
    { id: 1, user: 'john@example.com', plan: 'Pro', amount: '$49.00', status: 'active', nextBilling: '2024-09-27' },
    { id: 2, user: 'jane@example.com', plan: 'Enterprise', amount: '$199.00', status: 'active', nextBilling: '2024-09-27' },
    { id: 3, user: 'bob@example.com', plan: 'Free', amount: '$0.00', status: 'active', nextBilling: 'N/A' },
    { id: 4, user: 'alice@example.com', plan: 'Pro', amount: '$49.00', status: 'cancelled', nextBilling: 'N/A' },
    { id: 5, user: 'charlie@example.com', plan: 'Pro', amount: '$49.00', status: 'past_due', nextBilling: '2024-08-27' },
  ])

  const filteredSubscriptions = subscriptions.filter(sub =>
    sub.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.plan.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalRevenue = subscriptions
    .filter(s => s.status === 'active')
    .reduce((sum, s) => sum + parseFloat(s.amount.replace('$', '')), 0)

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Subscription Management</h1>
              <p className="text-muted-foreground">Manage user subscriptions</p>
            </div>
            <Link href="/admin">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {subscriptions.filter(s => s.status === 'active').length}
              </div>
              <p className="text-xs text-muted-foreground">
                {subscriptions.length} total subscriptions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                From active subscriptions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Past Due</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {subscriptions.filter(s => s.status === 'past_due').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Require attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search subscriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 max-w-md"
            />
          </div>
        </div>

        {/* Subscriptions Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Subscriptions ({filteredSubscriptions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">User</th>
                    <th className="text-left py-3 px-4 font-medium">Plan</th>
                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Next Billing</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubscriptions.map((sub) => (
                    <tr key={sub.id} className="border-b border-border last:border-0">
                      <td className="py-3 px-4 font-medium">{sub.user}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                          {sub.plan}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium">{sub.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          sub.status === 'active' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{sub.nextBilling}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="ghost">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}