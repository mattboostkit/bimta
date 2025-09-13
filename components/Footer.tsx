import Link from 'next/link';
import { Car, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8" />
              <span className="text-2xl font-bold">BIMTA</span>
            </div>
            <p className="text-blue-100">
              British Independent Motor Trade Association - Your trusted partner in vehicle verification and motor trade services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mileage-check" className="text-blue-100 hover:text-white transition-colors">
                  Mileage Check
                </Link>
              </li>
              <li>
                <Link href="/members-directory" className="text-blue-100 hover:text-white transition-colors">
                  Members Directory
                </Link>
              </li>
              <li>
                <Link href="/import-guidance" className="text-blue-100 hover:text-white transition-colors">
                  Import Guidance
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">Vehicle History Checks</li>
              <li className="text-blue-100">Mileage Verification</li>
              <li className="text-blue-100">Import Registration</li>
              <li className="text-blue-100">Dealer Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">0800 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">info@bimta.co.uk</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-100 mt-1" />
                <span className="text-blue-100">
                  123 Motor Trade House<br />
                  London, UK<br />
                  EC1A 1AA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © {new Date().getFullYear()} BIMTA - British Independent Motor Trade Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}