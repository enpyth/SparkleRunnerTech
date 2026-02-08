import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, MapPin, Send, Loader2, Phone, Globe } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you as soon as possible.'
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Lot 14, 1 Frome Road, Adelaide SA 5000, Australia',
      href: 'https://maps.google.com/?q=Lot+14,+1+Frome+Road,+Adelaide+SA+5000'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'lin.xu@sparklerunner.com.au',
      href: 'mailto:lin.xu@sparklerunner.com.au'
    },
    {
      icon: Globe,
      label: 'OZHG Platform',
      value: 'www.ozhg.com.au',
      href: 'https://www.ozhg.com.au/'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Ready to transform elderly care with AI? Let's discuss how SparkleRunnerTech
            can help your organization or institution.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    <div className="text-white group-hover:text-blue-400 transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400/50 mx-auto mb-3" />
                <p className="text-gray-400">Adelaide, South Australia</p>
                <p className="text-sm text-gray-500">Lot 14 Innovation Precinct</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="ai-companion">AI Companionship System</option>
                      <option value="ozhg">OZHG Platform</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Looking for Quick Answers?</h2>
          <p className="text-gray-400 mb-8">
            Check out our products page for detailed information about our AI solutions,
            or explore our portfolio to see our diverse range of ventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="px-6 py-3 rounded-xl border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              View Products
            </a>
            <a
              href="/portfolio"
              className="px-6 py-3 rounded-xl border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-colors"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
