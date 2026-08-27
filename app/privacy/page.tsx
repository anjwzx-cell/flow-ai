import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: August 27, 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or communicate with us.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Account information (name, email, company)</li>
                    <li>Usage data and analytics</li>
                    <li>Workflow configurations and automation data</li>
                    <li>Payment and billing information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to provide, maintain, and improve our services, 
                    and to communicate with you about your account.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Provide and maintain our automation services</li>
                    <li>Process transactions and send billing information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to comments and questions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your 
                    personal data against unauthorized access, alteration, disclosure, or destruction. 
                    This includes encryption, secure servers, and regular security audits.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to access, correct, or delete your personal data. You can 
                    also object to or restrict the processing of your data, or request data portability.
                  </p>
                  <p className="text-muted-foreground">
                    To exercise these rights, please contact us at privacy@flowai.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Email: privacy@flowai.com<br />
                    Address: Thessaloniki, Greece
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