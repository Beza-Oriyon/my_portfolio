import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "John Doe",
    role: "CTO at TechCorp",
    quote: "Working with him on the backend was exceptional. Delivered scalable APIs ahead of schedule.",
    photo: "https://via.placeholder.com/80/9F1239/fff?text=JD"
  },
  {
    name: "Sarah Chen",
    role: "Data Science Lead",
    quote: "His data pipelines and ML model integration helped us reduce churn prediction error by 34%.",
    photo: "https://via.placeholder.com/80/9F1239/fff?text=SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    quote: "Professional, clean code, and great communication. Highly recommended for full-stack + data projects.",
    photo: "https://via.placeholder.com/80/9F1239/fff?text=MR"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">What People Say</h2>
        <p className="text-gray-600 dark:text-gray-400">Client & Colleague Testimonials</p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard {...testimonials[current]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg hover:bg-gray-100"
        >
          ←
        </button>
        <button 
          onClick={next}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg hover:bg-gray-100"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-burgundy-600 w-8' : 'bg-gray-300 dark:bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;