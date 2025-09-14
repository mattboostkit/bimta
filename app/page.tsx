'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, FileText, ChevronRight, Car, TrendingUp, Award, Globe } from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import AnimatedCard from '@/components/ui/AnimatedCard';

// Dynamic imports for better performance
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900" />,
});

const VehicleCheckWidget = dynamic(() => import('@/components/sections/VehicleCheckWidget'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));

export default function Home() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Accurate Mileage Checks',
      description: 'AI-powered verification system with 99.9% accuracy from multiple trusted sources',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Trusted by Dealers',
      description: 'Industry-leading protection with comprehensive insurance and warranty options',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Users,
      title: 'Elite Dealer Network',
      description: 'Connect with 10,000+ verified premium motor trade professionals',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileText,
      title: 'Import Excellence',
      description: 'Complete import solutions with legal compliance and documentation',
      color: 'from-orange-500 to-red-500',
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
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <HeroSection />

      {/* Premium Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block badge-premium mb-4">
              Industry Leading Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-blue">BIMTA Leads</span> the Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets decades of expertise to deliver unmatched vehicle verification services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                  <motion.div
                    className="mt-4 pt-4 border-t border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </motion.div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Vehicle Check */}
      <VehicleCheckWidget />

      {/* Premium Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-blue">Perfect Plan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="badge-premium">Most Popular</div>
                  </div>
                )}

                <div className={`bg-white rounded-3xl shadow-xl overflow-hidden h-full ${service.popular ? 'ring-2 ring-blue-600' : ''} hover:shadow-2xl transition-shadow card-hover`}>
                  <div className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-6">{service.price}</div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <PremiumButton
                      variant={service.popular ? 'gradient' : 'primary'}
                      fullWidth
                    >
                      Get Started
                    </PremiumButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Premium CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900"></div>
        <div className="absolute inset-0 noise-overlay"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the UK&apos;s most trusted motor trade association and access premium tools that drive success
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton
                href="/mileage-check"
                variant="secondary"
                size="xl"
                icon={<TrendingUp className="w-6 h-6" />}
              >
                Start Free Trial
              </PremiumButton>
              <PremiumButton
                href="/about"
                variant="ghost"
                size="xl"
                className="text-white hover:bg-white/10"
              >
                Book a Demo
              </PremiumButton>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}