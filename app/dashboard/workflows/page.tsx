'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Play, Pause, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState([
    { id: 1, name: 'Lead Capture Form', description: 'Capture leads from website forms', status: 'active', lastRun: '2 hours ago' },
    { id: 2, name: 'Email Follow-up', description: 'Automated email sequences for new leads', status: 'active', lastRun: '5 hours ago' },
    { id: 3, name: 'CRM Sync', description: 'Sync leads with CRM system', status: 'paused', lastRun: '1 day ago' },
    { id: 4, name: 'Social Media Monitor', description: 'Monitor social media for mentions', status: 'active', lastRun: '30 minutes ago' },
  ])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredWorkflows = workflows.filter(workflow =>
    workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workflow.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleWorkflowStatus = (id: number) => {
    setWorkflows(workflows.map(w => 
      w.id === id 
        ? { ...w, status: w.status === 'active' ? 'paused' : 'active' }
        : w
    ))
  }

  const deleteWorkflow = (id: number) => {
    setWorkflows(workflows.filter(w => w.id !== id))
  }

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Workflows</h1>
              <p className="text-muted-foreground">Manage your automation workflows</p>
            </div>
            <Link href="/dashboard/workflows/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Workflow
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Search */}
        <div className="mb-6">
          <Input
            placeholder="Search workflows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkflows.map((workflow) => (
            <Card key={workflow.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{workflow.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {workflow.description}
                    </CardDescription>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ml-2 ${
                    workflow.status === 'active' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {workflow.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>Last run: {workflow.lastRun}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleWorkflowStatus(workflow.id)}
                  >
                    {workflow.status === 'active' ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteWorkflow(workflow.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredWorkflows.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No workflows found</p>
            <Link href="/dashboard/workflows/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create your first workflow
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}