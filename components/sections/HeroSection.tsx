'use client';

import { motion } from 'framer-motion';
import { Play, Shield, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [, setIsVideoPlaying] = useState(false);

  const stats = [
    { value: '10,000+', label: 'Verified Dealers', icon: Shield },
    { value: '500K+', label: 'Checks Completed', icon: CheckCircle },
    { value: '99.9%', label: 'Accuracy Rate', icon: Award },
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Industry Leader Since 1994
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
            >
              British Independent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Motor Trade Association
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            >
              The UK&apos;s most trusted platform for comprehensive vehicle verification,
              dealer networks, and import guidance services
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="/mileage-check">
                  Start Vehicle Check
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href="/members-directory">
                  <Shield className="mr-2 h-5 w-5" />
                  Browse Verified Dealers
                </a>
              </Button>
            </motion.div>

            {/* Video Demo Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
                  <div className="relative bg-white rounded-full p-3 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Play className="w-5 h-5 text-blue-600 ml-0.5" />
                  </div>
                </div>
                <span className="font-medium">Watch How It Works</span>
              </button>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}