import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'YGF Australia',
    description: 'Exclusive master franchisee of Yang Guofu in Australia. With over 7,000 stores worldwide, YGF is China\'s most renowned and pioneering hotpot brand.',
    url: 'https://www.ygfaus.com.au/',
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-500/10 to-orange-500/10',
    borderColor: 'border-red-500/20'
  },
  {
    title: 'CityLine38',
    description: 'The Line Where Life Finds Its Balance. Where urban energy meets everyday calm — perfectly in balance.',
    url: 'https://cityline38.com.au/',
    gradient: 'from-amber-500 to-yellow-500',
    bgGradient: 'from-amber-500/10 to-yellow-500/10',
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'APSMB',
    description: 'The Asia-Pacific Marine Biotechnology Association is a leading organization dedicated to advancing marine biotechnology research, industry development, and policy making across the Asia-Pacific region.',
    url: 'https://apsmb.org/',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500/20'
  },
  {
    title: 'IEA - International Entrepreneurs Alliance',
    description: 'Founded in Australia as a non-profit organization composed of outstanding entrepreneurs and industry elites from around the world. Committed to promoting exchanges and cooperation between enterprises.',
    url: 'https://www.ieally.com/',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-500/20'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Beyond healthcare technology, SparkleRunnerTech is involved in diverse ventures
            spanning food & beverage, real estate, marine biotechnology, and entrepreneurship networks.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 rounded-3xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} card-hover block`}
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.title}
                </h2>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Building Connections Across Industries
          </h2>
          <p className="text-gray-300 leading-relaxed">
            With our headquarters in Adelaide, South Australia, and branches in major cities
            across Australia, the United States, and Canada, we are committed to driving
            global economic development and technological innovation while enhancing corporate
            social responsibility and international sustainable development.
          </p>
        </div>
      </section>
    </div>
  );
}
