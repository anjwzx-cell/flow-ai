import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Users, BarChart, Shield, Puzzle, Clock } from 'lucide-react'

export default function ProductsPage() {
  const features = [
    {
      icon: Zap,
      title: 'Lead Automation',
      description: 'Automatically capture, qualify, and route leads across all your marketing channels.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamlessly connect with your existing CRM to keep all your data in sync.',
      color: 'text-green-600'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into your workflow performance and conversion metrics.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, SOC 2, and other standards.',
      color: 'text-red-600'
    },
    {
      icon: Puzzle,
      title: 'Workflow Builder',
      description: 'Intuitive drag-and-drop interface to create complex automation workflows.',
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      title: '24/7 Automation',
      description: 'Your workflows run around the clock, never missing an opportunity.',
      color: 'text-indigo-600'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Powerful features for modern businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Everything you need to automate your workflows and grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Intelligent Lead Capture
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI-powered lead capture system automatically identifies high-quality prospects 
                from multiple sources, including your website, social media, and email campaigns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Multi-channel lead aggregation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>AI-powered lead scoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Automatic qualification</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Real-time notifications</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <p className="text-muted-foreground">Lead Capture Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-muted/30 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Puzzle className="h-16 w-16 text-primary" />
                </div>
                <p className="text-muted-foreground">Workflow Builder Interface</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Visual Workflow Builder
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Create complex automation workflows without writing a single line of code. 
                Our intuitive drag-and-drop interface makes it easy to connect different tools 
                and automate your business processes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Drag-and-drop interface</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Pre-built templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Conditional logic</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Real-time testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Works with your favorite tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Integrate Flow AI with 100+ popular business applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Salesforce', 'HubSpot', 'Slack', 'Gmail', 'Zapier', 'Notion'].map((tool) => (
              <div key={tool} className="bg-muted/30 rounded-lg p-6 text-center font-medium">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to transform your workflows?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Start automating your business processes today with a free trial
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}