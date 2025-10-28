import { motion } from 'framer-motion';

const primary = '#005aa1';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const testimonials = [
  {
    quote:
      'The attention to detail and motion craft brought our story to life. The site feels premium and effortless.',
    name: 'Ava Thompson',
    role: 'Creative Director, Lumen Co.'
  },
  {
    quote:
      'Responsive, fast, and beautiful. Our engagement metrics improved across the board after launch.',
    name: 'Noah Patel',
    role: 'VP Product, Radiant Labs'
  },
  {
    quote:
      'A perfect balance of brand expression and usability—couldn’t be happier with the result.',
    name: 'Sophia Li',
    role: 'Founder, Atelier North'
  }
];

export default function Showcase() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: primary }}>What clients say</h2>
          <p className="mt-3 text-slate-600">Real feedback from teams we’ve helped transform.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={fadeUp}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              <p className="text-slate-800 leading-relaxed">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold" style={{ color: primary }}>{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 rounded-3xl p-8 sm:p-12 border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: primary }}>Ready to start?</h3>
              <p className="text-slate-600">Tell us about your goals. We’ll craft a plan with thoughtful motion and a clear visual rhythm.</p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2" style={{ outline: 'none', boxShadow: '0 0 0 2px rgba(0,90,161,0.2)' }} placeholder="Name" />
              <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2" style={{ outline: 'none', boxShadow: '0 0 0 2px rgba(0,90,161,0.2)' }} placeholder="Email" />
              <textarea rows={3} className="sm:col-span-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2" style={{ outline: 'none', boxShadow: '0 0 0 2px rgba(0,90,161,0.2)' }} placeholder="Your message"></textarea>
              <button type="submit" className="sm:col-span-2 rounded-lg text-white font-medium px-5 py-2.5" style={{ backgroundColor: primary }}>Send</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
