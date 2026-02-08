import { Mail, Linkedin, BookOpen, Brain, Code, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Lin (Cally) Xu',
    role: 'Founder & Chief Scientist & CEO',
    image: '/imgs/team-ceo.png',
    email: 'lin.xu@sparklerunner.com.au',
    bio: [
      'Dual PhD in Economics & IT',
      '10+ years academic experience',
      '100+ Publications',
      'Specialist in Computer Vision & Large Language Models',
      'Former Government Health Policy Advisor'
    ],
    expertise: [
      { icon: Brain, label: 'AI/ML Expert' },
      { icon: BookOpen, label: '100+ Papers' },
      { icon: Shield, label: 'Policy Advisor' }
    ]
  },
  {
    name: 'Su Zhang',
    role: 'Co-Founder & CTO',
    image: '/imgs/team-cto.png',
    email: 'su.zhang@sparklerunner.com.au',
    bio: [
      'Master in CS from Flinders University/East China Normal University',
      'Ex-Senior Engineer at Shanghai Stock Exchange (5+ years)',
      'Expert in high-concurrency architecture',
      'Specialist in data security',
      'Systems architecture and scalability expert'
    ],
    expertise: [
      { icon: Code, label: 'Systems Expert' },
      { icon: Shield, label: 'Security Specialist' },
      { icon: Brain, label: 'Architecture' }
    ]
  }
];

export default function Team() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Leadership Team
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Meet the visionaries behind SparkleRunnerTech — combining academic excellence,
            industry expertise, and a passion for transforming elderly care through technology.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass rounded-3xl overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 mx-auto md:mx-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-1">{member.name}</h2>
                    <p className="text-blue-400 font-medium mb-4">{member.role}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                      {member.expertise.map((exp, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
                        >
                          <exp.icon className="w-3 h-3 text-blue-400 mr-1.5" />
                          <span className="text-xs text-blue-400">{exp.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Contact */}
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {member.email}
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <ul className="space-y-2">
                    {member.bio.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Founded in Adelaide
            </span>
          </h2>
          <p className="text-gray-300 text-center leading-relaxed mb-6">
            SparkleRunnerTech was founded in Adelaide, South Australia, with a mission to
            revolutionize elderly care through cutting-edge AI technology. Our team combines
            deep academic expertise in artificial intelligence, computer vision, and large
            language models with practical industry experience in high-scale systems and data security.
          </p>
          <p className="text-gray-300 text-center leading-relaxed">
            Together, we're building the future of AgeTech — where every elderly Australian
            can lead an independent life with dignity, connection, and a touch of warmth.
          </p>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Interested in Joining Our Team?</h3>
          <p className="text-gray-400 mb-6">
            We're always looking for passionate individuals who want to make a difference in elderly care.
          </p>
          <a
            href="mailto:lin.xu@sparklerunner.com.au"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
