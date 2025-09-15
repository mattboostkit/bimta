'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, Car, CheckCircle, AlertCircle, Info, Shield, TrendingUp, FileText } from 'lucide-react';
import PremiumButton from '../ui/PremiumButton';

export default function VehicleCheckWidget() {
  const [registration, setRegistration] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<'valid' | 'invalid' | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const formatRegistration = (value: string) => {
    return value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7);
  };

  const validateRegistration = (reg: string) => {
    const ukRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{3}$|^[A-Z][0-9]{1,3}[A-Z]{3}$|^[A-Z]{3}[0-9]{1,3}[A-Z]$|^[0-9]{1,4}[A-Z]{1,2}$|^[A-Z]{1,2}[0-9]{1,4}$/;
    return ukRegex.test(reg);
  };

  useEffect(() => {
    if (registration.length >= 5) {
      setIsValidating(true);
      const timer = setTimeout(() => {
        const isValid = validateRegistration(registration);
        setValidationResult(isValid ? 'valid' : 'invalid');
        setIsValidating(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setValidationResult(null);
    }
  }, [registration]);

  const handleCheck = () => {
    if (validationResult === 'valid') {
      setShowResults(true);
    }
  };

  const sampleData = {
    overview: {
      make: 'BMW',
      model: '3 Series',
      year: '2020',
      color: 'Space Grey',
      fuel: 'Petrol',
      transmission: 'Automatic',
      engine: '2.0L',
      status: 'No Issues Found',
    },
    mileage: {
      current: '32,456',
      lastRecorded: '30,123',
      date: '15/10/2024',
      anomalies: 'None',
      history: [
        { date: '15/10/2024', mileage: '30,123', source: 'MOT' },
        { date: '12/10/2023', mileage: '24,567', source: 'MOT' },
        { date: '10/10/2022', mileage: '18,234', source: 'MOT' },
      ],
    },
    history: {
      owners: '2',
      keeperChanges: '1',
      imported: 'No',
      exported: 'No',
      scrapped: 'No',
      written_off: 'No',
      stolen: 'No',
    },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-blue">Instant Vehicle Check</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get comprehensive vehicle history and mileage verification in seconds
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={registration}
                    onChange={(e) => setRegistration(formatRegistration(e.target.value))}
                    placeholder="Enter Registration"
                    className="w-full px-6 py-4 text-2xl font-bold text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
                    style={{ letterSpacing: '0.1em' }}
                  />

                  <AnimatePresence>
                    {isValidating && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <div className="loading-dots text-white">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </motion.div>
                    )}

                    {!isValidating && validationResult && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        {validationResult === 'valid' ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-400" />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <PremiumButton
                  onClick={handleCheck}
                  disabled={validationResult !== 'valid'}
                  variant="secondary"
                  size="lg"
                  icon={<Search className="w-5 h-5" />}
                >
                  Check Now
                </PremiumButton>
              </div>

              {validationResult === 'invalid' && registration.length >= 5 && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white/80 text-sm mt-3"
                >
                  Please enter a valid UK registration number
                </motion.p>
              )}
            </div>

            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="border-t border-gray-200">
                    <div className="flex border-b border-gray-200">
                      {[
                        { id: 'overview', label: 'Overview', icon: Car },
                        { id: 'mileage', label: 'Mileage', icon: TrendingUp },
                        { id: 'history', label: 'History', icon: FileText },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`
                            flex-1 px-6 py-4 flex items-center justify-center gap-2
                            font-medium transition-all relative
                            ${activeTab === tab.id
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }
                          `}
                        >
                          <tab.icon className="w-5 h-5" />
                          {tab.label}
                          {activeTab === tab.id && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="p-8">
                      <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                          <motion.div
                            key="overview"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <Shield className="w-6 h-6 text-green-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-green-600">All Clear</p>
                                <p className="text-sm text-gray-600">No issues found with this vehicle</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              {Object.entries(sampleData.overview).map(([key, value]) => (
                                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                                  <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                                  <span className="font-medium text-gray-900">{value}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === 'mileage' && (
                          <motion.div
                            key="mileage"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                          >
                            <div className="bg-blue-50 rounded-xl p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-900">Current Mileage</h3>
                                <span className="text-2xl font-bold text-blue-600">{sampleData.mileage.current} miles</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Info className="w-4 h-4" />
                                <span>Last recorded: {sampleData.mileage.date}</span>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold text-gray-900 mb-4">Mileage History</h3>
                              <div className="space-y-3">
                                {sampleData.mileage.history.map((record, index) => (
                                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                      <div>
                                        <p className="font-medium">{record.mileage} miles</p>
                                        <p className="text-sm text-gray-600">{record.date}</p>
                                      </div>
                                    </div>
                                    <span className="text-sm text-gray-500">{record.source}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === 'history' && (
                          <motion.div
                            key="history"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            {Object.entries(sampleData.history).map(([key, value]) => (
                              <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                                <span className={`font-medium ${value === 'No' ? 'text-green-600' : 'text-gray-900'}`}>
                                  {value === 'No' && <CheckCircle className="inline w-4 h-4 mr-1" />}
                                  {value}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <PremiumButton
                            href="/mileage-check"
                            variant="gradient"
                            icon={<FileText className="w-5 h-5" />}
                          >
                            Get Full Report
                          </PremiumButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}