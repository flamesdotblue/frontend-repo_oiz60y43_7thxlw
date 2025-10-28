import { motion } from 'framer-motion';
import { Rocket, Sparkles, Shield } from 'lucide-react';

const primary = '#005aa1';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const services = [
  {
    title: 'Strategy & Identity',
    desc: 'Clear positioning and a visual language that resonates across touchpoints.',
    icon: Sparkles,
  },
  {
    title: 'Web Experience',
    desc: 'Responsive, accessible, and fast—built with modern frameworks and best practices.',
    icon: Rocket,
  },
  {
    title: 'Privacy & Security',
    desc: 'Robust infrastructure and careful handling of data to earn user trust.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-slate-50">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: primary }}>Services</h2>
          <p className="mt-3 text-slate-600">
            A focused set of offerings designed to elevate your brand and product.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ title, desc, icon: Icon }) => (
            <motion.div
              key={title}
              variants={card}
              className="group relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: primary + '1a' }}>
                <Icon className="h-6 w-6" style={{ color: primary }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: primary }}>{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
