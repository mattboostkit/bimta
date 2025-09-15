'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, PoundSterling, Car, Shield, HelpCircle } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

function ImportGuidanceContent() {
  const [activeTab, setActiveTab] = useState('overview');

  const steps = [
    {
      number: 1,
      title: 'Pre-Import Checks',
      description: 'Verify vehicle eligibility and gather required documentation',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Customs Declaration',
      description: 'Complete customs forms and pay import duties',
      icon: PoundSterling,
    },
    {
      number: 3,
      title: 'Vehicle Testing',
      description: 'Arrange IVA or MOT testing as required',
      icon: Car,
    },
    {
      number: 4,
      title: 'DVLA Registration',
      description: 'Register the vehicle and obtain UK number plates',
      icon: Shield,
    },
  ];

  const documents = [
    { name: 'Original vehicle registration document', required: true },
    { name: 'Bill of sale or invoice', required: true },
    { name: 'Proof of UK residence', required: true },
    { name: 'MOT certificate (if applicable)', required: true },
    { name: 'Certificate of Conformity (CoC)', required: false },
    { name: 'Insurance documents', required: true },
    { name: 'Customs clearance certificate', required: true },
    { name: 'IVA pass certificate (if required)', required: false },
  ];

  const faqs = [
    {
      question: 'How long does the import process take?',
      answer: 'The complete import process typically takes 2-4 weeks, depending on vehicle type and testing requirements.',
    },
    {
      question: 'What are the import duty rates?',
      answer: 'Import duty is typically 10% for cars, plus 20% VAT on the total value including duty. Rates may vary for commercial vehicles.',
    },
    {
      question: 'Do I need an IVA test?',
      answer: 'IVA (Individual Vehicle Approval) is required for vehicles that don\'t have European type approval or are modified.',
    },
    {
      question: 'Can I drive my imported vehicle immediately?',
      answer: 'You can only drive the vehicle once it has been registered with DVLA and has valid UK insurance and road tax.',
    },
    {
      question: 'What if my vehicle is left-hand drive?',
      answer: 'Left-hand drive vehicles are legal in the UK but may require headlight adjustments to meet UK standards.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Import Registration Guidance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Complete guide to importing and registering vehicles in the UK
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
            <Tabs.List className="flex flex-wrap gap-2 mb-8 border-b">
              <Tabs.Trigger
                value="overview"
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === 'overview'
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </Tabs.Trigger>
              <Tabs.Trigger
                value="process"
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === 'process'
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Step-by-Step Process
              </Tabs.Trigger>
              <Tabs.Trigger
                value="documents"
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === 'documents'
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Required Documents
              </Tabs.Trigger>
              <Tabs.Trigger
                value="costs"
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === 'costs'
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Costs & Fees
              </Tabs.Trigger>
              <Tabs.Trigger
                value="faq"
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === 'faq'
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                FAQs
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="overview" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Importing Vehicles to the UK
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Whether you&apos;re importing a vehicle from the EU or elsewhere, understanding the UK&apos;s
                      import regulations is crucial for a smooth process. Our comprehensive guide covers
                      everything from initial checks to final registration.
                    </p>
                    <p className="text-gray-600 mb-4">
                      The process involves several key stages including customs clearance, vehicle testing,
                      and DVLA registration. Each step has specific requirements that must be met to
                      legally drive your imported vehicle on UK roads.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-2" />
                        <div>
                          <h3 className="font-semibold text-amber-900 mb-1">Important Notice</h3>
                          <p className="text-amber-800 text-sm">
                            Brexit has changed import procedures from EU countries. Additional documentation
                            and duties may now apply.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Overview</h3>
                    <div className="space-y-4">
                      {steps.map((step) => (
                        <div key={step.number} className="flex items-start">
                          <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-900 font-semibold">{step.number}</span>
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold text-gray-900">{step.title}</h4>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="process" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {steps.map((step, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Step {step.number}: {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>

                        {step.number === 1 && (
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Check vehicle age and emissions standards</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Verify vehicle hasn&apos;t been stolen or written off</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Gather all original documentation</span>
                            </li>
                          </ul>
                        )}

                        {step.number === 2 && (
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Complete customs declaration form C88</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Pay import duty (typically 10%)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Pay VAT (20% on value + duty)</span>
                            </li>
                          </ul>
                        )}

                        {step.number === 3 && (
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Book IVA test if required</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Arrange MOT test for vehicles over 3 years old</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Make any required modifications</span>
                            </li>
                          </ul>
                        )}

                        {step.number === 4 && (
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Complete V55/4 application form</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Pay first registration fee (£55)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                              <span className="text-gray-700">Receive V5C and number plates</span>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="documents" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documentation</h2>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-blue-900">
                    Ensure all documents are originals or certified copies. Translations may be required
                    for non-English documents.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        doc.required ? 'bg-red-100' : 'bg-gray-100'
                      }`}>
                        {doc.required ? (
                          <span className="text-red-600 text-xs font-bold">!</span>
                        ) : (
                          <span className="text-gray-400 text-xs">○</span>
                        )}
                      </div>
                      <span className="ml-3 text-gray-700">{doc.name}</span>
                      {doc.required && (
                        <span className="ml-auto text-xs text-red-600 font-semibold">Required</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="costs" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Import Costs & Fees</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Government Fees</h3>
                      <table className="w-full">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 text-gray-600">Import Duty</td>
                            <td className="py-3 text-right font-semibold">10% of vehicle value</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 text-gray-600">VAT</td>
                            <td className="py-3 text-right font-semibold">20% of (value + duty)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 text-gray-600">First Registration Fee</td>
                            <td className="py-3 text-right font-semibold">£55</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 text-gray-600">Number Plates</td>
                            <td className="py-3 text-right font-semibold">£20-40</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Testing & Inspection</h3>
                      <table className="w-full">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 text-gray-600">IVA Test (if required)</td>
                            <td className="py-3 text-right font-semibold">£450-550</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 text-gray-600">MOT Test</td>
                            <td className="py-3 text-right font-semibold">£54.85</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 text-gray-600">Modifications (average)</td>
                            <td className="py-3 text-right font-semibold">£200-1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <PoundSterling className="h-5 w-5 text-amber-600 mt-0.5 mr-2" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-1">Cost Calculator</h4>
                        <p className="text-amber-800 text-sm">
                          For a £10,000 vehicle: Import duty (£1,000) + VAT (£2,200) + Fees (£500-1,000)
                          = Total cost approximately £13,700-14,200
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="faq" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-start">
                        <HelpCircle className="h-5 w-5 text-blue-900 mt-0.5 mr-3 shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our import specialists can guide you through the entire process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Import Assistance
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Download Full Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ImportGuidancePage() {
  return <ImportGuidanceContent />;
}