import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CTO at TechCorp',
    quote: 'Exceptional backend work. Delivered scalable and clean APIs ahead of schedule.',
    initials: 'JD',
  },
  {
    name: 'Sarah Chen',
    role: 'Data Science Lead',
    quote: 'His ML models and data pipelines significantly improved our prediction accuracy.',
    initials: 'SC',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="text-center mb-12">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title">What colleagues say</h2>
        <p className="section-subtitle mx-auto">Feedback from clients and collaborators</p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="glass-card p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-6 left-8 text-6xl font-display text-accent-rose/20 leading-none select-none">&ldquo;</div>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-cream/80 leading-relaxed mb-8 relative z-10 pl-4">
              {testimonials[current].quote}
            </p>

            <div className="flex items-center gap-4 pl-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center text-white font-semibold text-sm">
                {testimonials[current].initials}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-cream">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-light dark:text-muted">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="btn-secondary !px-5 !py-2.5 !text-sm"
        >
          ← Prev
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-accent-rose w-6' : 'bg-black/10 dark:bg-white/20'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="btn-secondary !px-5 !py-2.5 !text-sm"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
