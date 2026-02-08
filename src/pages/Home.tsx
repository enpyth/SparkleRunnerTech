import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  Heart,
  Shield,
  Users,
  Activity,
  Globe,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import Orb from '../components/Orb';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI Companionship',
      description: 'Clinical-grade AI system for emotional and cognitive support'
    },
    {
      icon: Heart,
      title: 'Elderly Care',
      description: 'Addressing loneliness and healthcare challenges for seniors'
    },
    {
      icon: Shield,
      title: 'Health Monitoring',
      description: 'Real-time health data analysis and early warning systems'
    },
    {
      icon: Users,
      title: 'Family Connection',
      description: 'Bridging intergenerational communication gaps'
    }
  ];

  const stats = [
    { value: '4.7M+', label: 'Elderly Australians Served' },
    { value: '6,700+', label: 'Expert Profiles' },
    { value: '43+', label: 'Universities Connected' },
    { value: '10+', label: 'Health Domains' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Original Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
        </div>

        {/* Animated Orb Background - Positioned between the image and content */}
        <div className="absolute inset-0 z-5">
          <Orb 
            hue={237} 
            hoverIntensity={0.66} 
            rotateOnHover={false}
            forceHoverState={false}
            backgroundColor="#1e293b" /* slate-800 equivalent */
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">AgeTech Innovation from Adelaide</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Smart Clinical Guardian
              </span>
              <br />
              <span className="text-white">
                Empowering Independent Living
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering every elderly Australian to lead an independent life with a touch of warmth.
              Our clinical-grade AI companionship system addresses loneliness, cognitive health,
              healthcare shortage, and intergenerational communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Our Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Care Solutions
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our integrated platform combines cutting-edge AI technology with compassionate care
              to support Australia's aging population.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Companionship System
                </span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our flagship product is a clinical-grade interactive terminal that provides
                comprehensive care through advanced AI technology. It includes Digital Twin
                Conversational Analysis, Family Communication Tools, and Health Data Analytics.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Emotional and psychological state tracking',
                  'Cognitive function monitoring',
                  'Family social relationship assessment',
                  'RACGP compliant digital health standards'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="/imgs/ai-companion.png"
                alt="AI Companion System"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OZHG Preview */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="/imgs/ozhg-platform.png"
                alt="OZHG Platform"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
                <Globe className="w-4 h-4 text-teal-400 mr-2" />
                <span className="text-teal-400 text-sm">ozhg.com.au</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  OZHG Platform
                </span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Australia's Next-Gen AI-Driven Health Expert Intelligence Engine.
                Connecting global expertise and empowering smart decisions across
                healthcare, research, and policy.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <Activity className="w-6 h-6 text-teal-400 mb-2" />
                  <div className="text-2xl font-bold text-white">6,700+</div>
                  <div className="text-sm text-gray-400">Expert Profiles</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <Globe className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">43</div>
                  <div className="text-sm text-gray-400">Universities</div>
                </div>
              </div>
              <a
                href="https://www.ozhg.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
              >
                Visit OZHG Platform <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Elderly Care?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join us in our mission to empower every elderly Australian with
            intelligent, compassionate care solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
