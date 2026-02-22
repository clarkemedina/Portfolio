import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Growth Marketing Strategist',
    company: 'ByteLaunch Digital',
    location: 'Los Angeles, CA',
    period: 'May 2024 – Present',
    description: 'Driving cross-platform paid media growth and automation strategies for DTC and eCommerce brands, delivering executive-level performance insights.',
    achievements: [
      'Achieved 42% revenue growth in 6 months via paid media optimization',
      'Automated lead funnels (HubSpot + Zapier), cutting cost-per-lead by 28%',
      'Led full rebrand increasing organic traffic by 130%',
    ],
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Marketing Analyst',
    company: 'Oracle',
    location: 'Los Angeles, CA',
    period: 'May 2023 – April 2024',
    description: 'Leveraged data-driven segmentation and CRM behavioral analysis to improve lead quality and pipeline conversion for enterprise accounts.',
    achievements: [
      'Increased MQL generation by 22% through segmentation & creative testing',
      'Conducted A/B testing on email/outreach flows, boosting engagement',
      'Analyzed CRM behavior data from 2,000+ clients to surface conversion patterns',
    ],
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Freelance Social Media Consultant',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Nov 2021 – Present',
    description: 'Built full-funnel ad systems and UGC/influencer campaigns for 12+ clients across industries, generating trackable revenue and viral reach.',
    achievements: [
      'Tripled engagement for 12+ clients using trend-driven strategies',
      'Produced UGC/influencer campaigns driving $90K+ in tracked revenue',
      'Designed retargeting workflows with custom landing pages',
    ],
    color: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Marketing Assistant (Intern-to-Hire)',
    company: 'HubSpot',
    location: 'Long Beach, CA',
    period: 'July 2022 – March 2023',
    description: 'Managed high-volume social scheduling, email flow redesigns, and paid campaign analytics for a global marketing SaaS company.',
    achievements: [
      'Managed 400+ social posts; grew audience by 55%',
      'Redesigned email flows, improving CTR by 40%',
      'Oversaw $15K+ in paid campaigns and presented ROI learnings',
    ],
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-blue-400 to-emerald-400 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-amber-400 z-10 hidden md:block" />

              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-100/50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium mb-4`}>
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  
                  <div className={`flex items-center gap-4 text-slate-500 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} ${index % 2 === 0 ? 'md:order-last md:ml-2' : ''}`} />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}