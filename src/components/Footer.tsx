import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                SparkleRunnerTech
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Smart Clinical Guardian, Empowering Every Elderly Australian to Lead an Independent Life with a Touch of Warmth.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Lot 14, 1 Frome Road, Adelaide SA 5000, Australia</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:lin.xu@sparklerunner.com.au" className="text-sm hover:text-blue-400 transition-colors">
                lin.xu@sparklerunner.com.au
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  AI Companion System
                </Link>
              </li>
              <li>
                <a href="https://www.ozhg.com.au/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  OZHG Platform
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 SparkleRunnerTech Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
