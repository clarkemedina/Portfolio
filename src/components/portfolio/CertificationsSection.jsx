import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, GraduationCap } from 'lucide-react';

const certifications = [
  { name: 'Meta Certified Media Buyer', year: '2024', icon: '📘', color: 'from-blue-500 to-indigo-600' },
  { name: 'Google Ads Search & Display', year: '2023', icon: '🔵', color: 'from-red-400 to-orange-500' },
  { name: 'HubSpot Inbound Marketing', year: '2023', icon: '🟠', color: 'from-orange-400 to-amber-500' },
  { name: 'TikTok Marketing Mastery', year: '2024', icon: '⚫', color: 'from-slate-600 to-slate-800' },
];

const highlights = [
  { value: '$140K+', label: 'From a 3-month influencer campaign' },
  { value: '2.4M+', label: 'TikTok views for a fashion brand launch' },
  { value: '37%', label: 'Bounce rate reduction via UX optimization' },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&h=350&fit=crop"
                alt="California State University Long Beach"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                  <span className="text-amber-400 font-semibold">Education</span>
                </div>
                <h3 className="text-xl font-bold text-white">California State University, Long Beach</h3>
                <p className="text-slate-300 text-sm">B.S. in Marketing · May 2023</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 p-4 rounded-xl bg-amber-50 border border-amber-100 text-center">
                <div className="text-2xl mb-1">🏆</div>
                <div className="font-semibold text-slate-800 text-sm">Dean's List</div>
              </div>
              <div className="flex-1 p-4 rounded-xl bg-blue-50 border border-blue-100 text-center">
                <div className="text-2xl mb-1">🎯</div>
                <div className="font-semibold text-slate-800 text-sm">AMA Case Competition Team</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-amber-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{cert.name}</div>
                    <div className="text-sm text-slate-500">{cert.year}</div>
                  </div>
                  <BadgeCheck className="w-5 h-5 text-green-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Campaign Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=400&fit=crop"
              alt="Campaign highlights background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white text-center mb-10">🚀 Campaign Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((h, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">{h.value}</div>
                  <div className="text-slate-400 text-sm">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}