'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, Send, Users, Plus, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'

export default function AdminNewsletterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [subscribers] = useState([
    { id: 1, email: 'john@example.com', status: 'active', subscribed: '2024-01-15' },
    { id: 2, email: 'jane@example.com', status: 'active', subscribed: '2024-02-20' },
    { id: 3, email: 'bob@example.com', status: 'active', subscribed: '2024-03-10' },
    { id: 4, email: 'alice@example.com', status: 'unsubscribed', subscribed: '2024-04-05' },
    { id: 5, email: 'charlie@example.com', status: 'active', subscribed: '2024-05-12' },
  ])

  const [campaigns] = useState([
    { id: 1, name: 'Product Launch', subject: 'Introducing Flow AI 2.0', status: 'sent', sent: '2024-08-20', opens: 1234, clicks: 234 },
    { id: 2, name: 'Monthly Update', subject: 'What\'s new this month', status: 'sent', sent: '2024-08-01', opens: 987, clicks: 156 },
    { id: 3, name: 'Feature Spotlight', subject: 'New workflow templates', status: 'draft', sent: '-', opens: 0, clicks: 0 },
  ])

  const [activeTab, setActiveTab] = useState('subscribers')

  const filteredSubscribers = subscribers.filter(sub =>
    sub.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Newsletter Management</h1>
              <p className="text-muted-foreground">Manage subscribers and campaigns</p>
            </div>
            <Link href="/admin">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={activeTab === 'subscribers' ? 'default' : 'outline'}
            onClick={() => setActiveTab('subscribers')}
          >
            <Users className="h-4 w-4 mr-2" />
            Subscribers
          </Button>
          <Button
            variant={activeTab === 'campaigns' ? 'default' : 'outline'}
            onClick={() => setActiveTab('campaigns')}
          >
            <Send className="h-4 w-4 mr-2" />
            Campaigns
          </Button>
        </div>

        {activeTab === 'subscribers' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{subscribers.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {subscribers.filter(s => s.status === 'active').length} active
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {subscribers.filter(s => s.status === 'active').length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {((subscribers.filter(s => s.status === 'active').length / subscribers.length) * 100).toFixed(1)}% rate
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unsubscribed</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {subscribers.filter(s => s.status === 'unsubscribed').length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Need attention
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search subscribers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 max-w-md"
                />
              </div>
            </div>

            {/* Subscribers Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Subscribers ({filteredSubscribers.length})</CardTitle>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Subscriber
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium">Email</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                        <th className="text-left py-3 px-4 font-medium">Subscribed</th>
                        <th className="text-left py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubscribers.map((sub) => (
                        <tr key={sub.id} className="border-b border-border last:border-0">
                          <td className="py-3 px-4 font-medium">{sub.email}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                              sub.status === 'active' 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {sub.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{sub.subscribed}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="ghost">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === 'campaigns' && (
          <>
            {/* Campaigns */}
            <div className="mb-6">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{campaign.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {campaign.subject}
                        </CardDescription>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                        campaign.status === 'sent' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sent:</span>
                        <span className="font-medium">{campaign.sent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Opens:</span>
                        <span className="font-medium">{campaign.opens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Clicks:</span>
                        <span className="font-medium">{campaign.clicks}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      {campaign.status === 'draft' && (
                        <Button size="sm" className="flex-1">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}