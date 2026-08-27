'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, CreditCard, Lock } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'enterprise'>('pro')

  const plans = {
    pro: {
      name: 'Pro Plan',
      price: '$49',
      period: '/month',
      features: [
        'Unlimited workflows',
        '10,000 leads/month',
        'Advanced integrations',
        'Priority support',
        'Analytics dashboard',
      ]
    },
    enterprise: {
      name: 'Enterprise Plan',
      price: '$199',
      period: '/month',
      features: [
        'Everything in Pro',
        'Unlimited leads',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
      ]
    }
  }

  const handleCheckout = async () => {
    setLoading(true)
    
    // Simulate Stripe checkout redirect
    setTimeout(() => {
      setLoading(false)
      router.push('/dashboard/settings?tab=billing')
    }, 2000)
  }

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background">
        <div className="container py-6">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-muted-foreground">Complete your subscription</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plan Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Select your plan</h2>
              
              <Card 
                className={`cursor-pointer transition-all ${
                  selectedPlan === 'pro' ? 'border-primary border-2' : ''
                }`}
                onClick={() => setSelectedPlan('pro')}
              >
                <CardHeader>
                  <CardTitle>{plans.pro.name}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold">{plans.pro.price}</span>
                    <span className="text-sm">{plans.pro.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plans.pro.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all ${
                  selectedPlan === 'enterprise' ? 'border-primary border-2' : ''
                }`}
                onClick={() => setSelectedPlan('enterprise')}
              >
                <CardHeader>
                  <CardTitle>{plans.enterprise.name}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold">{plans.enterprise.price}</span>
                    <span className="text-sm">{plans.enterprise.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plans.enterprise.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Payment Details */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>
                    Secure payment powered by Stripe
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="4242 4242 4242 4242"
                          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        />
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{plans[selectedPlan].price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                      <span>Total</span>
                      <span>{plans[selectedPlan].price}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleCheckout}
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : `Subscribe to ${plans[selectedPlan].name}`}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By subscribing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}