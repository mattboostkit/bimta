'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, FileText, ChevronRight, Car, TrendingUp, Award, Globe, ArrowRight, Zap, Lock, BarChart3, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Dynamic imports for better performance
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <div className="min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />,
});

const VehicleCheckWidget = dynamic(() => import('@/components/sections/VehicleCheckWidget'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));

export default function Home() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Accurate Mileage Checks',
      description: 'AI-powered verification system with 99.9% accuracy from multiple trusted sources',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Shield,
      title: 'Trusted by Dealers',
      description: 'Industry-leading protection with comprehensive insurance and warranty options',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Elite Dealer Network',
      description: 'Connect with 10,000+ verified premium motor trade professionals',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: FileText,
      title: 'Import Excellence',
      description: 'Complete import solutions with legal compliance and documentation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const services = [
    {
      title: 'Premium Vehicle Checks',
      price: 'From £9.99',
      features: [
        'Full HPI equivalent check',
        'Live DVLA data',
        'Finance verification',
        'Stolen vehicle database',
        'Insurance write-off check',
        'Mileage anomaly detection',
      ],
      icon: Car,
      popular: true,
      color: 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50',
    },
    {
      title: 'Dealer Membership',
      price: 'From £49/month',
      features: [
        'Unlimited basic checks',
        'Priority support',
        'Marketing tools',
        'Legal helpline',
        'Trade insurance discounts',
        'Network access',
      ],
      icon: Award,
      color: 'border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50',
    },
    {
      title: 'Import Services',
      price: 'Custom Quote',
      features: [
        'NOVA declarations',
        'IVA test booking',
        'Registration support',
        'Customs clearance',
        'Transport arrangement',
        'Documentation service',
      ],
      icon: Globe,
      color: 'border-green-200 bg-gradient-to-br from-green-50 to-emerald-50',
    },
  ];

  const stats = [
    { value: '30+', label: 'Years of Excellence', icon: Award },
    { value: '10,000+', label: 'Active Members', icon: Users },
    { value: '500K+', label: 'Vehicles Checked', icon: Car },
    { value: '4.9/5', label: 'Customer Rating', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              Why Choose BIMTA
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Industry-Leading Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology meets decades of expertise to deliver unmatched vehicle verification services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Vehicle Check */}
      <VehicleCheckWidget />

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="px-3 py-1">
                      <Zap className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full ${service.color} ${service.popular ? 'border-2 border-blue-500 shadow-xl' : 'border shadow-lg'}`}>
                  <CardHeader className="text-center pb-8">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-7 h-7 text-gray-700" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{service.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={service.popular ? 'default' : 'outline'}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-white/80" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4">
              Get Started Today
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the UK&apos;s most trusted motor trade association and access premium tools that drive success
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Book a Demo
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}