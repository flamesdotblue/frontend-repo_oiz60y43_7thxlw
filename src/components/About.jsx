import { motion } from 'framer-motion';

const primary = '#005aa1';

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: primary }}>About Us</h2>
            <p className="text-slate-700 leading-relaxed">
              We create timeless digital experiences with a strong emphasis on clarity, rhythm, and motion. Our layouts borrow from editorial design principles—ample whitespace, precise alignment, and thoughtful hierarchy—balanced with delightful micro-interactions.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Every section gracefully animates into view as you scroll, ensuring a polished and immersive journey on any device.
            </p>
          </motion.div>

          <motion.div variants={item} className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop"
                alt="Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
