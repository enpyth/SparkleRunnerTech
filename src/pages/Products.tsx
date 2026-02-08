import { Link } from 'react-router-dom';
import {
  Brain,
  Heart,
  Activity,
  Users,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  BarChart3,
  AlertTriangle,
  UserCog,
  Building2,
  GraduationCap,
  Landmark
} from 'lucide-react';

export default function Products() {
  const aiCompanionFeatures = [
    {
      icon: Brain,
      title: 'Digital Twin Conversational Analysis',
      items: [
        'Emotional and psychological state tracking',
        'Cognitive function monitoring',
        'Pain expression analysis',
        'Family social relationship quality assessment',
        'RACGP digital health standards compliant'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Family Communication Tools',
      items: [
        'Topic recommendations based on interest response',
        'Cognitive status-aware suggestions',
        'Patient emotional needs expression',
        'Intergenerational communication bridging'
      ]
    },
    {
      icon: Activity,
      title: 'Health Data Analysis & Early Warning',
      items: [
        'Hospital monitoring infrastructure integration',
        'Elderly care institution connectivity',
        'EMR generation from vital signs',
        'Dialogue content signal analysis',
        'Clinical early warning assistance'
      ]
    }
  ];

  const valueAddedServices = [
    {
      title: 'Clinical Customisation',
      icon: UserCog,
      items: [
        'Risk models for dementia/depression/falls/delirium',
        'Cultural and ethnic sensitivity tuning (CALD)',
        'Nursing process mapping',
        'AI parameter calibration'
      ]
    },
    {
      title: 'Family Plus',
      icon: Users,
      items: [
        'Emotional support reports for families',
        'Caregiving burden assessment',
        'Cross-regional family collaboration',
        'Hierarchical family permissions',
        'Conflict early warning system'
      ]
    }
  ];

  const ozhgCapabilities = [
    { icon: BarChart3, title: 'Semantic Search', description: 'AI-powered expert discovery' },
    { icon: Users, title: 'Matching Models', description: 'Precision expert-need alignment' },
    { icon: Globe, title: 'Knowledge Graph', description: 'Interconnected expertise mapping' },
    { icon: Brain, title: 'LLM RAG Engine', description: 'Advanced query understanding' }
  ];

  const ozhgAudience = [
    { icon: Building2, title: 'Industry & Enterprise', description: 'HealthTech, BioPharma, MedTech, Aged Care' },
    { icon: Landmark, title: 'Government & Public', description: 'Health Departments, Trade Agencies' },
    { icon: GraduationCap, title: 'Academia & Research', description: 'Universities, Research Institutes' }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Innovative healthcare solutions powered by cutting-edge AI technology,
            designed to transform elderly care and health expert discovery.
          </p>
        </div>
      </section>

      {/* AI Companion System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">AI Companionship System</h2>
              <p className="text-gray-400">Clinical-grade interactive terminal for elderly care</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src="/imgs/ai-companion.png"
                alt="AI Companion System"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our flagship AI Companionship System is designed to address four major pain points
                faced by Australia's 4.7 million elderly people living at home: <strong className="text-white">loneliness</strong>,
                <strong className="text-white"> cognitive health</strong>, <strong className="text-white">healthcare shortage</strong>,
                and <strong className="text-white">intergenerational communication</strong>.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <span className="text-blue-400 font-semibold">"Smart Clinical Guardian, Empowering Every Elderly
                Australian to Lead an Independent Life with a Touch of Warmth"</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {['RACGP Compliant', 'Clinical Grade', 'AI Powered', 'Family Connected'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Features */}
          <h3 className="text-2xl font-bold text-white mb-6">Core Functional Sections</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {aiCompanionFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">{feature.title}</h4>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Value Added Services */}
          <h3 className="text-2xl font-bold text-white mb-6">Optional Value-Added Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {valueAddedServices.map((service, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OZHG Platform */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">OZHG Platform</h2>
              <p className="text-gray-400">Australia's Next-Gen AI-Driven Health Expert Intelligence Engine</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <span className="text-teal-400 font-semibold">Connecting Global Expertise, Empowering Smart Decisions</span>
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                OZHG solves critical problems in the healthcare expertise landscape:
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { title: 'Fragmented Information', desc: 'Expert data siloed across 43+ universities' },
                  { title: 'Discovery Friction', desc: 'Industry struggles to find niche experts' },
                  { title: 'Cross-Border Barriers', desc: 'Language gaps hinder global collaboration' }
                ].map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">{problem.title}:</span>
                      <span className="text-gray-400"> {problem.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://www.ozhg.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Visit OZHG Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div>
              <img
                src="/imgs/ozhg-platform.png"
                alt="OZHG Platform"
                className="rounded-2xl w-full"
              />
            </div>
          </div>

          {/* Data Foundation */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">6,700+</div>
              <div className="text-sm text-gray-400">Expert Profiles</div>
            </div>
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">43</div>
              <div className="text-sm text-gray-400">Universities</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">10</div>
              <div className="text-sm text-gray-400">Key Domains</div>
            </div>
            <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">50+</div>
              <div className="text-sm text-gray-400">Live Pilot Profiles</div>
            </div>
          </div>

          {/* AI Capabilities */}
          <h3 className="text-2xl font-bold text-white mb-6">AI Intelligence Layer</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {ozhgCapabilities.map((cap, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                <cap.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-1">{cap.title}</h4>
                <p className="text-sm text-gray-400">{cap.description}</p>
              </div>
            ))}
          </div>

          {/* Target Audience */}
          <h3 className="text-2xl font-bold text-white mb-6">Who We Serve</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ozhgAudience.map((audience, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20">
                <audience.icon className="w-8 h-8 text-teal-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{audience.title}</h4>
                <p className="text-gray-400">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Our Solutions?</h2>
          <p className="text-gray-400 mb-8">Let's discuss how we can help transform your healthcare operations.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
