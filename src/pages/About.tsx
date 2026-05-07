import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl mb-8 text-warm-ink">About Us</h1>
            <div className="space-y-6 text-warm-ink-muted leading-relaxed">
              <p>
                At Just the Wright Interiors, we believe that your home should be a reflection of your personality—curated, welcoming, and intentionally designed. Our journey began with a simple passion for beautiful spaces and has grown into a destination for elevated home decor and bespoke interior design services.
              </p>
              <p>
                Drawing inspiration from earthly tones, organic textures, and timeless silhouettes, we source and curate collections that transform ordinary rooms into sanctuaries. Every piece we offer is selected with purpose.
              </p>
              <p>
                Whether you're looking for a single statement piece or seeking comprehensive interior design guidance, our team is dedicated to helping you craft a space that feels just right.
              </p>
              <p>
               Hours of operation:
              </p>
              <p>
Monday: 7:00AM-11:00PM
Tuesday: 7:00AM-11:00PM
Wednesday: 7:00AM-11:00PM
Thursday: 7:00AM-11:00PM
Friday: 7:00AM-11:00PM
Saturday: 9:00AM-5:00PM
Sunday: 9:00AM-5:00PM
               </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4]"
          >
            <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=1000&auto=format&fit=crop"
              alt="Designer working in studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
