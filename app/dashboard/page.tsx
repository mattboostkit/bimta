'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BarChart3,
  Users,
  Car,
  TrendingUp,
  Download,
  Bell,
  Settings,
  CreditCard,
  FileText,
  Shield,
  Activity,
  DollarSign,
} from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import AnimatedCard from '@/components/ui/AnimatedCard';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('month');
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Vehicle Checks',
      value: '1,234',
      change: '+12%',
      icon: Car,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Active Members',
      value: '456',
      change: '+8%',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Revenue',
      value: '£45,678',
      change: '+23%',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Success Rate',
      value: '99.8%',
      change: '+0.2%',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const recentChecks = [
    { reg: 'AB21 CDE', date: '2 hours ago', status: 'Complete', type: 'Full Check' },
    { reg: 'FG34 HIJ', date: '3 hours ago', status: 'Complete', type: 'Basic Check' },
    { reg: 'KL56 MNO', date: '5 hours ago', status: 'Pending', type: 'Full Check' },
    { reg: 'PQ78 RST', date: '6 hours ago', status: 'Complete', type: 'Mileage Only' },
    { reg: 'UV90 WXY', date: '8 hours ago', status: 'Complete', type: 'Full Check' },
  ];

  const chartData = [
    { day: 'Mon', checks: 145 },
    { day: 'Tue', checks: 178 },
    { day: 'Wed', checks: 192 },
    { day: 'Thu', checks: 165 },
    { day: 'Fri', checks: 203 },
    { day: 'Sat', checks: 156 },
    { day: 'Sun', checks: 134 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Premium Dashboard</h1>
              <p className="text-blue-100">Welcome back, John&apos;s Motor Trading Ltd</p>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['overview', 'checks', 'members', 'analytics', 'billing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time Range Selector */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex bg-white rounded-xl shadow-sm p-1">
            {['day', 'week', 'month', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm mt-2 font-medium ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last {timeRange}
                    </p>
                  </div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <AnimatedCard className="h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Check Activity</h2>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>

              {/* Simple Bar Chart */}
              <div className="h-64 flex items-end justify-between gap-4">
                {chartData.map((data, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg hover:from-blue-700 hover:to-cyan-600 transition-colors cursor-pointer relative group"
                      style={{ height: `${(data.checks / 250) * 100}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {data.checks}
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 mt-2">{data.day}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Vehicle Checks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Last updated: 2 mins ago</span>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Recent Activity */}
          <div>
            <AnimatedCard className="h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Checks</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {recentChecks.map((check, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-900">{check.reg}</p>
                        <p className="text-sm text-gray-600">{check.type}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        check.status === 'Complete'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {check.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{check.date}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <PremiumButton
              variant="secondary"
              icon={<Car className="w-5 h-5" />}
              fullWidth
            >
              New Check
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              icon={<Users className="w-5 h-5" />}
              fullWidth
            >
              Add Member
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              icon={<FileText className="w-5 h-5" />}
              fullWidth
            >
              Generate Report
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              icon={<CreditCard className="w-5 h-5" />}
              fullWidth
            >
              Billing
            </PremiumButton>
          </div>
        </motion.div>

        {/* Premium Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <AnimatedCard>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Protected</h3>
                <p className="text-sm text-gray-600">Full insurance coverage</p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-600">Advanced insights</p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Alerts</h3>
                <p className="text-sm text-gray-600">Real-time notifications</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
}