'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function SuccessContent() {
  const searchParams = useSearchParams();
  const registration = searchParams.get('reg');

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
        >
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Thank you for your purchase. Your vehicle check report for{' '}
            <span className="font-semibold">{registration}</span> is being generated.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">What happens next?</h2>
            <ul className="text-left space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                Your comprehensive vehicle report is being compiled
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                You&apos;ll receive an email with your report within 5 minutes
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                The report will include all checks and verifications
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download Report (Demo)
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              <Mail className="mr-2 h-5 w-5" />
              Email Report
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>

          <Link
            href="/"
            className="inline-block mt-6 text-blue-900 hover:text-blue-700 font-medium"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}