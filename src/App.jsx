import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Showcase from './components/Showcase';

function App() {
  useEffect(() => {
    // Ensure smooth scroll for in-page navigation
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight" style={{ color: '#005aa1' }}>
            AstraBlue
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:opacity-80" style={{ color: '#005aa1' }}>About</a>
            <a href="#services" className="hover:opacity-80" style={{ color: '#005aa1' }}>Services</a>
            <a href="#testimonials" className="hover:opacity-80" style={{ color: '#005aa1' }}>Testimonials</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-white shadow-sm" style={{ backgroundColor: '#005aa1' }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="scroll-smooth">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Showcase />
        </section>
      </main>

      <footer id="contact" className="pt-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 pb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#005aa1' }}>Get in touch</h3>
            <p className="text-slate-600 mb-6">Have a project in mind? Let's build something elegant and modern together.</p>
            <div className="space-y-2 text-slate-700">
              <p><span className="font-semibold">Email:</span> hello@astrablue.io</p>
              <p><span className="font-semibold">Phone:</span> +1 (555) 012-3456</p>
            </div>
          </div>
          <form className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2" style={{ outline: 'none', boxShadow: '0 0 0 2px rgba(0,90,161,0.2)' }} placeholder="First name" />
              <input className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2" style={{ outline: 'none', boxShadow: '0 0 0 2px rgba(0,90,161,0.2)' }} placeholder="Last name" />
            </div>
            <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2" style={{ outline: 'none', boxShadow: '0 0 0 2px rgba(0,90,161,0.2)' }} placeholder="Email address" />
            <textarea rows={4} className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2" style={{ outline: 'none', boxShadow: '0 0 0 2px rgba(0,90,161,0.2)' }} placeholder="Tell us about your project"></textarea>
            <button type="submit" className="rounded-lg text-white font-medium px-5 py-2.5" style={{ backgroundColor: '#005aa1' }}>Send message</button>
          </form>
        </div>
        <div className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600">
            <p>© {new Date().getFullYear()} AstraBlue. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <a href="#hero" className="hover:underline" style={{ color: '#005aa1' }}>Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
