'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, FileText, ChevronRight, Car, Clock, Award } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Accurate Mileage Checks',
      description: 'Comprehensive vehicle history and mileage verification from trusted sources',
    },
    {
      icon: Shield,
      title: 'Trusted by Dealers',
      description: 'Industry-leading verification services used by thousands of UK dealers',
    },
    {
      icon: Users,
      title: 'Dealer Network',
      description: 'Access our extensive network of verified independent motor traders',
    },
    {
      icon: FileText,
      title: 'Import Guidance',
      description: 'Expert guidance on vehicle import registration and compliance',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Verified Dealers' },
    { value: '500,000+', label: 'Checks Performed' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              British Independent Motor Trade Association
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your trusted partner for vehicle verification and motor trade services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mileage-check"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Order Mileage Check
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/members-directory"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Browse Members
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BIMTA?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive vehicle verification services and support for the UK motor trade industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-900 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Vehicle History Checks
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced vehicle checking system provides instant access to crucial information including:
              </p>
              <ul className="space-y-3">
                {[
                  'Accurate mileage verification',
                  'Previous ownership history',
                  'Outstanding finance checks',
                  'Insurance write-off status',
                  'MOT history and advisories',
                  'DVLA tax and MOT status',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/mileage-check"
                className="inline-flex items-center mt-8 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-xl p-6">
                  <div className="flex items-center mb-4">
                    <Car className="h-8 w-8 text-blue-900 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Sample Report</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Vehicle Status</span>
                      <span className="text-green-600 font-semibold">✓ Clear</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Mileage</span>
                      <span className="font-semibold">45,320 miles</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Previous Owners</span>
                      <span className="font-semibold">2</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Last MOT</span>
                      <span className="font-semibold">Pass</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by the Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of motor traders who trust BIMTA for accurate vehicle verification and industry support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/mileage-check"
                  className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Order a Check Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}