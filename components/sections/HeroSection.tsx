'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Play, Shield, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { value: '10,000+', label: 'Verified Dealers', icon: Shield },
    { value: '500K+', label: 'Checks Completed', icon: CheckCircle },
    { value: '99.9%', label: 'Accuracy Rate', icon: Award },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Industry Leader Since 1994
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            British Independent
            <span className="block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Motor Trade Association
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The UK&apos;s most trusted platform for comprehensive vehicle verification,
            dealer networks, and import guidance services
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="text-base px-8" asChild>
              <a href="/mileage-check">
                Start Vehicle Check
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <a href="/members-directory">
                <Shield className="mr-2 h-4 w-4" />
                Browse Verified Dealers
              </a>
            </Button>
          </motion.div>

          {/* Video Demo Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mb-16"
          >
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping" />
                <div className="relative w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center group-hover:shadow-xl transition-shadow">
                  <Play className="w-5 h-5 ml-0.5 text-blue-600" />
                </div>
              </div>
              <span className="font-medium">Watch How It Works</span>
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg bg-white/70 backdrop-blur">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center justify-center h-full">
              <p className="text-white/60">Video Demo Coming Soon</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}