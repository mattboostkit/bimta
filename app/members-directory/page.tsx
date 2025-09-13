'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, Mail, Globe, Star, Filter, Building2, Users, Shield, Award, Wrench, Truck, Settings } from 'lucide-react';
import { getAllMembers, getUniqueCategories, getUniqueRegions, getUniqueServices } from '@/lib/members';
import { Member } from '@/types/member';

export default function MembersDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  // Load data
  const allMembers = getAllMembers();
  const categories = ['All', ...getUniqueCategories()];
  const regions = ['All', ...getUniqueRegions()];
  const services = ['All', ...getUniqueServices()];

  useEffect(() => {
    let filtered = [...allMembers];

    // Search filter
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(member =>
        member.businessName.toLowerCase().includes(lowercaseSearch) ||
        member.address.city.toLowerCase().includes(lowercaseSearch) ||
        member.address.region.toLowerCase().includes(lowercaseSearch) ||
        member.services.some(service => service.toLowerCase().includes(lowercaseSearch)) ||
        member.shortDescription.toLowerCase().includes(lowercaseSearch)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(member => member.category === selectedCategory);
    }

    // Region filter
    if (selectedRegion !== 'All') {
      filtered = filtered.filter(member => member.address.region === selectedRegion);
    }

    // Service filter
    if (selectedService !== 'All') {
      filtered = filtered.filter(member =>
        member.services.some(service => service === selectedService)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.businessName.localeCompare(b.businessName);
        case 'newest':
          return b.yearJoined - a.yearJoined;
        default:
          return 0;
      }
    });

    setFilteredMembers(filtered);
  }, [searchTerm, selectedCategory, selectedRegion, selectedService, sortBy, allMembers]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dealer':
        return Building2;
      case 'Garage':
        return Wrench;
      case 'Car Transporter':
        return Truck;
      case 'Service Provider':
        return Settings;
      case 'Importer':
        return Globe;
      default:
        return Building2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Dealer':
        return 'bg-blue-100 text-blue-800';
      case 'Garage':
        return 'bg-green-100 text-green-800';
      case 'Car Transporter':
        return 'bg-purple-100 text-purple-800';
      case 'Service Provider':
        return 'bg-orange-100 text-orange-800';
      case 'Importer':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // Return phone as-is if it's already formatted
    return phone;
  };

  const formatWebsite = (website?: string) => {
    if (!website) return null;
    // Remove protocol for display
    return website.replace(/^https?:\/\//, '');
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">BIMTA Members Directory</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find trusted and verified motor trade professionals across the UK
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">{allMembers.length}</div>
                <div className="text-sm text-blue-200">Total Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">{allMembers.filter(m => m.category === 'Dealer').length}</div>
                <div className="text-sm text-blue-200">Dealers</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">{allMembers.filter(m => m.verified).length}</div>
                <div className="text-sm text-blue-200">Verified</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">{getUniqueRegions().length}</div>
                <div className="text-sm text-blue-200">Regions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, location, or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="newest">Sort by Newest</option>
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Filter className="mr-2 h-5 w-5" />
                Filters {showFilters ? '−' : '+'}
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-50 rounded-lg p-6 mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Region
                    </label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedRegion('All');
                    setSelectedService('All');
                    setSearchTerm('');
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}

            <p className="text-gray-600">
              Showing {filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => {
              const CategoryIcon = getCategoryIcon(member.category);
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(0.05 * index, 0.5) }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CategoryIcon className="h-5 w-5 text-gray-600" />
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(member.category)}`}>
                            {member.category}
                          </span>
                          {member.verified && (
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                              ✓ Verified
                            </span>
                          )}
                          {member.featured && (
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.businessName}</h3>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{member.address.city}, {member.genre}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {member.shortDescription}
                    </p>

                    {/* Services */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {member.services.slice(0, 3).map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                        {member.services.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{member.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 text-sm border-t pt-4">
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{formatPhoneNumber(member.phone)}</span>
                      </div>
                      {member.website && (
                        <div className="flex items-center text-gray-600">
                          <Globe className="h-4 w-4 mr-2" />
                          <a
                            href={member.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="truncate hover:text-blue-600 transition-colors"
                          >
                            {formatWebsite(member.website)}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center text-gray-500 text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        <span>Member since {member.yearJoined}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium">
                        View Details
                      </button>
                      <button className="flex-1 border border-blue-900 text-blue-900 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                        Contact
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No members found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedRegion('All');
                  setSelectedService('All');
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a BIMTA Member</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our network of trusted motor trade professionals and grow your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Shield className="h-8 w-8 mb-3 text-blue-300" />
              <h3 className="font-semibold mb-2">Verified Badge</h3>
              <p className="text-blue-200 text-sm">Stand out with our trusted verification badge</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Users className="h-8 w-8 mb-3 text-blue-300" />
              <h3 className="font-semibold mb-2">Network Access</h3>
              <p className="text-blue-200 text-sm">Connect with thousands of industry professionals</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Award className="h-8 w-8 mb-3 text-blue-300" />
              <h3 className="font-semibold mb-2">Business Growth</h3>
              <p className="text-blue-200 text-sm">Increase visibility and attract more customers</p>
            </div>
          </div>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply for Membership
          </button>
        </div>
      </section>
    </div>
  );
}