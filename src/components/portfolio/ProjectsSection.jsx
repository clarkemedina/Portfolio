import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: '$140K Influencer Campaign',
    description: 'Orchestrated a 3-month full-funnel influencer campaign from talent sourcing to retargeting. Produced UGC-driven creatives, custom landing pages, and Klaviyo flows — generating $140K+ in tracked revenue.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop',
    tags: ['Meta Ads', 'Klaviyo', 'UGC', 'Influencer Marketing'],
    result: '$140K+ Revenue',
    featured: true,
  },
  {
    title: 'Viral TikTok Fashion Launch',
    description: 'Produced and managed a TikTok-first launch strategy for a fashion brand. Scripted, directed, and distributed organic + paid content that captured a trending moment, reaching 2.4M+ views.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    tags: ['TikTok Ads', 'CapCut', 'UGC', 'Social Strategy'],
    result: '2.4M+ Views',
  },
  {
    title: 'eCommerce Rebrand & SEO Overhaul',
    description: 'Led full brand identity refresh and SEO architecture rebuild for a national eCommerce company. Restructured content strategy, landing pages, and metadata — driving a 130% lift in organic traffic.',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=600&fit=crop',
    tags: ['SEO/SEM', 'Landing Page Design', 'CRO', 'Content Strategy'],
    result: '+130% Organic Traffic',
  },
  {
    title: 'HubSpot Lead Funnel Automation',
    description: 'Built automated multi-step lead nurture workflows using HubSpot and Zapier for a B2B client, cutting cost-per-lead by 28% and improving sales team efficiency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['HubSpot', 'Zapier', 'Email Marketing', 'CRM'],
    result: '-28% Cost-Per-Lead',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 ${project.featured ? 'md:flex' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.featured ? 'h-80 md:h-full' : 'h-64'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className={`relative p-8 ${project.featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {project.result}
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}