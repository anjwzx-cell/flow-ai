import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Flow AI
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Empowering businesses with intelligent automation since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Flow AI was born in Thessaloniki, Greece, from a simple observation: small businesses 
                and solopreneurs were drowning in manual tasks while missing out on growth opportunities.
              </p>
              <p className="mb-4">
                Our founders, experienced in both technology and entrepreneurship, recognized that 
                the power of AI automation shouldn't be reserved for enterprise companies with 
                unlimited resources.
              </p>
              <p>
                Today, Flow AI serves thousands of businesses across Europe and beyond, helping them 
                automate lead generation, streamline workflows, and focus on what matters most - growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              To democratize AI automation and make it accessible to every business, 
              regardless of size or technical expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Businesses Automated</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">Leads Processed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Avg. Conversion Increase</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Simplicity First</h3>
                <p className="text-muted-foreground">
                  Complex automation made simple. We believe powerful tools should be intuitive 
                  and accessible to everyone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We're committed to helping every customer achieve 
                  their automation goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                <p className="text-muted-foreground">
                  The AI landscape evolves rapidly. We constantly improve our platform to bring 
                  you the latest automation capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                <p className="text-muted-foreground">
                  Your data is sacred. We employ enterprise-grade security measures and never 
                  compromise on privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Based in Thessaloniki</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Proudly building the future of automation from the heart of Greece's 
              entrepreneurial ecosystem.
            </p>
            <div className="bg-muted/30 rounded-lg p-8">
              <p className="text-muted-foreground">
                Thessaloniki, Greece<br />
                Europe's rising tech hub
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}