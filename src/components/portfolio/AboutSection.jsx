import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Phone } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: MapPin, label: 'Location', value: 'Los Angeles, CA' },
    { icon: Mail, label: 'Email', value: 'clarkemedina@yahoo.com' },
    { icon: Phone, label: 'Phone', value: '(714) 742-0950' },
    { icon: Calendar, label: 'Experience', value: '4+ Years' },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=750&fit=crop"
                alt="Marketing professional at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-6 border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">42%</div>
                  <div className="text-sm text-slate-500">Revenue Growth</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-amber-400/30 rounded-3xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400/10 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-amber-500 font-semibold tracking-wide uppercase text-sm"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight"
            >
              Growth-Obsessed
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Digital Marketer
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              Creative, analytical marketer with 4+ years of experience driving growth through 
              paid media, CRM, and content strategy. Proven ability to scale campaigns, optimize 
              performance across digital channels, and deliver measurable ROI for tech, DTC, and B2C brands.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 leading-relaxed mb-8"
            >
              Passionate about building scalable marketing systems and data-informed strategies. 
              I hold a B.S. in Marketing from Cal State Long Beach and certifications in Meta, 
              Google Ads, HubSpot, and TikTok marketing.
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                  <item.icon className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</div>
                    <div className="text-sm font-medium text-slate-700">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="mailto:clarkemedina@yahoo.com"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="px-6 py-3 border border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-600 rounded-full font-medium transition-colors"
              >
                See Experience
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}