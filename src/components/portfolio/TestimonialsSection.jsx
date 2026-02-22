import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jessica Park',
    role: 'CMO at ByteLaunch Digital',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    quote: 'Clarke is a rare marketer who combines creative instinct with analytical rigor. His paid media work generated 42% revenue growth for us in just 6 months — and he did it by genuinely understanding our customers.',
    rating: 5,
  },
  {
    name: 'David Nguyen',
    role: 'Director of Marketing at Oracle',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: 'Clarke\'s CRM segmentation work was a game-changer. He uncovered conversion patterns we\'d been missing for years. MQL generation jumped 22% within one quarter.',
    rating: 5,
  },
  {
    name: 'Aisha Thompson',
    role: 'Founder, Fashion Brand Client',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face',
    quote: 'He produced TikTok content that went viral overnight — 2.4M views for our launch. Clarke doesn\'t just post content; he engineers momentum.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-100/50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}