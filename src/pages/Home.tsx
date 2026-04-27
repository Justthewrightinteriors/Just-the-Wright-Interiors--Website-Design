import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col lg:flex-row bg-warm-bg overflow-hidden">
      {/* Left: Hero Section */}
      <section className="w-full lg:w-7/12 px-6 py-16 lg:p-24 flex flex-col justify-center">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-serif leading-[1.1] mb-6 text-warm-ink"
        >
          Spaces crafted <br/>
          <span className="italic font-light text-accent-olive">for life.</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg leading-relaxed text-warm-ink-muted max-w-md mb-10"
        >
          Discover curated home decor and bespoke interior design services that transform your house into a sanctuary. From boutique sourcing to full-scale renovation.
        </motion.p>
        
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
           className="flex gap-4 mb-12"
        >
          <div className="w-40 sm:w-48 h-56 sm:h-64 bg-warm-bg-secondary rounded-t-full overflow-hidden relative shadow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
          </div>
          <div className="w-40 sm:w-48 h-56 sm:h-64 bg-warm-bg-secondary rounded-full overflow-hidden mt-12 relative shadow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615876234886-fd9a3939c13d?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link 
            to="/shop" 
            className="px-8 py-3 bg-warm-ink text-white text-xs uppercase tracking-widest font-medium hover:bg-accent-olive transition-colors text-center"
          >
            Shop Collection
          </Link>
          <Link 
            to="/services" 
            className="px-8 py-3 border border-warm-ink text-warm-ink text-xs uppercase tracking-widest font-medium hover:text-accent-olive hover:border-accent-olive transition-colors text-center"
          >
            Our Services
          </Link>
        </motion.div>
      </section>

      {/* Right: Functional Grid (Categories & Booking) */}
      <section className="w-full lg:w-5/12 border-t lg:border-t-0 lg:border-l border-warm-bg-secondary flex flex-col">
        {/* Featured Categories */}
        <div className="p-8 lg:p-12 border-b border-warm-bg-secondary flex-1">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-accent-olive mb-2">Curated for your home</h3>
              <h2 className="text-3xl font-serif italic text-warm-ink">Collections</h2>
            </div>
            <Link to="/shop" className="text-xs underline tracking-widest uppercase text-warm-ink hover:text-accent-olive transition-colors">View All</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Furniture", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&auto=format&fit=crop" },
              { name: "Decor & Accents", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&auto=format&fit=crop" }
            ].map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer block"
              >
                <div className="aspect-square bg-warm-bg-tertiary mb-3 overflow-hidden flex items-center justify-center relative">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm font-medium text-warm-ink group-hover:text-accent-olive transition-colors">{cat.name}</p>
                <p className="text-xs text-accent-olive mt-1">Explore</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="bg-warm-ink text-warm-bg p-8 lg:p-12 min-h-[400px] flex flex-col justify-center">
          <h3 className="text-xs uppercase tracking-widest text-accent-olive mb-3">Ready to transform your space?</h3>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">Book a Consultation</h2>
          <div className="space-y-4 mb-10">
             <div className="flex items-center gap-4 border border-warm-ink-muted p-4 hover:border-accent-olive transition-colors cursor-pointer group">
               <div className="w-10 h-10 shrink-0 rounded-full border border-accent-olive flex items-center justify-center text-xs group-hover:bg-accent-olive group-hover:text-white transition-colors">01</div>
               <div>
                  <p className="font-medium text-white">Initial Discovery Call</p>
                  <p className="text-xs text-accent-olive mt-1">30 Minutes • Virtual</p>
               </div>
             </div>
             <div className="flex items-center gap-4 border border-warm-ink-muted p-4 hover:border-accent-olive transition-colors cursor-pointer group">
               <div className="w-10 h-10 shrink-0 rounded-full border border-accent-olive flex items-center justify-center text-xs group-hover:bg-accent-olive group-hover:text-white transition-colors">02</div>
               <div>
                  <p className="font-medium text-white">On-Site Assessment</p>
                  <p className="text-xs text-accent-olive mt-1">90 Minutes • In-Person</p>
               </div>
             </div>
          </div>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-accent-olive text-white text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity text-center w-full"
          >
            View Calendar
          </Link>
        </div>
      </section>
    </div>
  );
}
