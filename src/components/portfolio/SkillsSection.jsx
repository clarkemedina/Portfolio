import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Paid Media',
    skills: [
      { name: 'Meta Ads', level: 95 },
      { name: 'Google Ads', level: 92 },
      { name: 'TikTok Ads', level: 90 },
      { name: 'Conversion Rate Optimization', level: 88 },
      { name: 'A/B Testing', level: 90 },
    ],
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'CRM & Email',
    skills: [
      { name: 'HubSpot', level: 95 },
      { name: 'Klaviyo', level: 88 },
      { name: 'Mailchimp', level: 85 },
      { name: 'SEO/SEM', level: 87 },
      { name: 'Landing Page Design', level: 85 },
    ],
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Data & Content',
    skills: [
      { name: 'GA4', level: 90 },
      { name: 'Looker Studio', level: 87 },
      { name: 'Tableau', level: 82 },
      { name: 'CapCut / Premiere Pro', level: 85 },
      { name: 'UGC & Social Strategy', level: 95 },
    ],
    color: 'from-violet-400 to-purple-500',
    bgColor: 'bg-violet-50',
  },
];

const technologies = [
  'Meta Ads', 'Google Ads', 'TikTok Ads', 'HubSpot', 'Klaviyo', 'Mailchimp',
  'GA4', 'Looker Studio', 'Tableau', 'CapCut', 'Adobe Premiere', 'SEO/SEM',
  'A/B Testing', 'Zapier', 'Salesforce', 'Canva'
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className={`${category.bgColor} rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-20 rounded-full -translate-y-16 translate-x-16" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-24 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 absolute whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-medium hover:bg-slate-900 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}