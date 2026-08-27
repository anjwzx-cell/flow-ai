'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function NewWorkflowPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    trigger: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate workflow creation
    setTimeout(() => {
      setLoading(false)
      router.push('/dashboard/workflows')
    }, 1000)
  }

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background">
        <div className="container py-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/workflows">
              <Button variant="ghost" size="sm">Back</Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">New Workflow</h1>
              <p className="text-muted-foreground">Create a new automation workflow</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Details</CardTitle>
              <CardDescription>
                Configure your new automation workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Workflow Name
                  </label>
                  <Input
                    id="name"
                    placeholder="e.g., Lead Capture Form"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="Describe what this workflow does..."
                    className="flex min-h-[100px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="trigger" className="text-sm font-medium">
                    Trigger
                  </label>
                  <select
                    id="trigger"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    value={formData.trigger}
                    onChange={(e) => setFormData({ ...formData, trigger: e.target.value })}
                    required
                  >
                    <option value="">Select a trigger...</option>
                    <option value="form-submit">Form Submission</option>
                    <option value="webhook">Webhook</option>
                    <option value="schedule">Schedule</option>
                    <option value="email">Email Received</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Workflow'}
                  </Button>
                  <Link href="/dashboard/workflows">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Workflow Templates */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Start with a template</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Lead Capture</CardTitle>
                  <CardDescription>
                    Capture and qualify leads from your website forms
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Email Sequence</CardTitle>
                  <CardDescription>
                    Automated email follow-up sequences for new leads
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CRM Sync</CardTitle>
                  <CardDescription>
                    Sync your leads and contacts with your CRM
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Social Monitor</CardTitle>
                  <CardDescription>
                    Monitor social media for brand mentions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}