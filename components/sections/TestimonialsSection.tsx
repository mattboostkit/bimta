'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'James Patterson',
    role: 'Managing Director',
    company: 'Patterson Motors Ltd',
    rating: 5,
    content: 'BIMTA has been instrumental in our business growth. Their vehicle verification service has saved us from costly mistakes and given our customers complete confidence in their purchases.',
    image: '/api/placeholder/80/80',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Operations Manager',
    company: 'Elite Auto Imports',
    rating: 5,
    content: 'The import guidance provided by BIMTA is second to none. They helped us navigate complex regulations and streamline our import process, saving us thousands in potential fees.',
    image: '/api/placeholder/80/80',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Premier Vehicle Solutions',
    rating: 5,
    content: 'As a BIMTA member for over 10 years, I can confidently say they are the gold standard in the industry. Their network has connected us with reliable partners across the UK.',
    image: '/api/placeholder/80/80',
  },
  {
    id: 4,
    name: 'Emma Thompson',
    role: 'Sales Director',
    company: 'Thompson Automotive Group',
    rating: 5,
    content: 'The accuracy and speed of BIMTA\'s mileage checks have revolutionized our buying process. We now complete due diligence in minutes rather than hours.',
    image: '/api/placeholder/80/80',
  },
];

const trustLogos = [
  { name: 'FCA Regulated', description: 'Financial Conduct Authority' },
  { name: 'ISO 27001', description: 'Information Security Certified' },
  { name: 'ICO Registered', description: 'Data Protection Compliant' },
  { name: 'Trading Standards', description: 'Approved Member' },
  { name: 'Motor Ombudsman', description: 'Accredited Partner' },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const controls = useAnimationControls();

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23000' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block badge-premium mb-4">
            Trusted by 10,000+ Dealers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-blue">Members Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied motor trade professionals who trust BIMTA for their business needs
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-12 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Testimonial Content */}
            <div
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                    display: index === currentIndex ? 'block' : 'none',
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-cyan-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            Accredited and Certified By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full"></div>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{logo.name}</p>
                <p className="text-xs text-gray-600 mt-1">{logo.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '30+', label: 'Years of Excellence' },
              { value: '10,000+', label: 'Active Members' },
              { value: '500K+', label: 'Vehicles Checked' },
              { value: '4.9/5', label: 'Customer Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}