'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Car, CheckCircle, Info, Shield, FileText, CreditCard } from 'lucide-react';

// Only initialize Stripe if we have a valid key
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

const checkPackages = [
  {
    id: 'basic',
    name: 'Basic Check',
    price: 9.99,
    features: [
      'Mileage verification',
      'MOT history',
      'Tax status',
      'Basic vehicle details',
    ],
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Check',
    price: 19.99,
    popular: true,
    features: [
      'Everything in Basic',
      'Full ownership history',
      'Outstanding finance check',
      'Insurance write-off status',
      'Stolen vehicle check',
      'Import/export status',
      'Detailed valuation',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Check',
    price: 34.99,
    features: [
      'Everything in Comprehensive',
      'Full service history',
      'Recall information',
      'Previous sale listings',
      'Detailed condition report',
      'PDF certificate',
      'Priority support',
    ],
  },
];

export default function MileageCheckPage() {
  const [registration, setRegistration] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('comprehensive');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (!registration) {
      alert('Please enter a vehicle registration number');
      return;
    }

    if (!stripePromise) {
      alert('Payment system is not configured. Please contact support.');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          registration: registration.toUpperCase(),
          packageId: selectedPackage,
          package: checkPackages.find(p => p.id === selectedPackage),
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe error:', error);
          alert('Payment failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <section className="bg-linear-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vehicle Mileage Check</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get instant, comprehensive vehicle history reports from the UK&apos;s most trusted source
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-6 mb-12">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-900 mt-1 shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold text-blue-900 mb-2">Why check vehicle mileage?</h3>
                <p className="text-blue-800">
                  One in three used cars has a discrepancy in its recorded mileage. Our comprehensive checks help you avoid
                  costly mistakes by verifying the vehicle&apos;s true history, outstanding finance, and any hidden issues.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <label htmlFor="registration" className="block text-lg font-semibold text-gray-900 mb-3">
              Enter Vehicle Registration
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="registration"
                value={registration}
                onChange={(e) => setRegistration(e.target.value.toUpperCase())}
                placeholder="e.g., AB12 CDE"
                className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={8}
              />
              <button
                onClick={() => registration && window.scrollTo({ top: 600, behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Check Now
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your Package</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {checkPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative bg-white rounded-xl shadow-lg p-6 ${
                  selectedPackage === pkg.id ? 'ring-2 ring-blue-500' : ''
                } ${pkg.popular ? 'transform scale-105' : ''} cursor-pointer hover:shadow-xl transition-all`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-900">
                    £{pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedPackage === pkg.id
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPackage === pkg.id ? 'Selected' : 'Select'}
                </button>
              </motion.div>
            ))}
          </div>

          {registration && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Registration:</span>
                    <span className="font-semibold">{registration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-semibold">
                      {checkPackages.find(p => p.id === selectedPackage)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-4 border-t">
                    <span>Total:</span>
                    <span className="text-blue-900">
                      £{checkPackages.find(p => p.id === selectedPackage)?.price}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    <CreditCard className="mr-2 h-5 w-5" />
                    Proceed to Secure Payment
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                <Shield className="inline h-4 w-4 mr-1" />
                Secure payment powered by Stripe
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What&apos;s Included in Your Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: 'Vehicle Details',
                description: 'Make, model, year, engine size, fuel type, and full specifications',
              },
              {
                icon: CheckCircle,
                title: 'Mileage History',
                description: 'Complete mileage records from MOT tests and service history',
              },
              {
                icon: Shield,
                title: 'Security Checks',
                description: 'Stolen vehicle database, insurance write-off, and scrapped status',
              },
              {
                icon: FileText,
                title: 'MOT History',
                description: 'Full MOT test history including failures and advisories',
              },
              {
                icon: CreditCard,
                title: 'Finance Check',
                description: 'Outstanding finance agreements and ownership verification',
              },
              {
                icon: Info,
                title: 'Valuation',
                description: 'Current market value and price analysis',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <item.icon className="h-10 w-10 text-blue-900 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}