import { Card, CardContent } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: August 27, 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using Flow AI services, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Service Description</h2>
                  <p className="text-muted-foreground mb-4">
                    Flow AI provides automation and workflow management services to help businesses 
                    streamline their operations. These services include:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Lead automation and management</li>
                    <li>Workflow creation and execution</li>
                    <li>Integration with third-party services</li>
                    <li>Analytics and reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    You agree to use our services only for lawful purposes and in accordance with these Terms. 
                    You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                  <p className="text-muted-foreground">
                    You must not use our services to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful or malicious content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Payment Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    Paid subscriptions are billed in advance on a monthly or annual basis. 
                    Fees are non-refundable except as required by law.
                  </p>
                  <p className="text-muted-foreground">
                    We reserve the right to modify our pricing at any time. Changes will apply to 
                    new subscriptions and renewals.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Termination</h2>
                  <p className="text-muted-foreground">
                    Either party may terminate these Terms at any time. Upon termination, your right 
                    to use the services will immediately cease. We may also suspend or terminate your 
                    account for violation of these Terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Flow AI shall not be liable for any indirect, incidental, special, or consequential 
                    damages arising from your use of our services. Our total liability is limited to the 
                    amount you paid for the services in the preceding 12 months.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We may modify these Terms at any time. Continued use of our services after changes 
                    constitutes acceptance of the new Terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}