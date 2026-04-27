import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: "Full-Service Interior Design",
      price: "Custom Pricing",
      description: "A comprehensive service handling every detail from conceptualization to installation. Perfect for renovations, new builds, or full home redesigns.",
      features: ["Space Planning", "Material Selection", "Custom Furniture Sourcing", "Project Management", "Final Installation"]
    },
    {
      title: "Room Refresh",
      price: "Starting at $1,500/room",
      description: "Breathe new life into a single room. We provide a tailored design plan, shopping list, and styling guide for you to implement at your own pace.",
      features: ["Mood Board", "Floor Plan", "Clickable Shopping List", "Styling Guidelines"]
    },
    {
      title: "Design Consultation",
      price: "$250/hour",
      description: "A collaborative working session to tackle your specific design dilemmas. Great for styling advice, paint color selection, or layout troubleshooting.",
      features: ["Virtual or In-Person", "Expert Advice", "Actionable Next Steps", "Follow-up Notes"]
    }
  ];

  return (
    <div className="w-full">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-serif text-5xl mb-6 text-warm-ink">Our Services</h1>
          <p className="text-warm-ink-muted max-w-2xl mx-auto leading-relaxed">
            From brief consultations to full-scale redesigns, we offer tailored interior design services to meet your specific needs and elevate your everyday living experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-10 border border-warm-bg-secondary"
            >
              <h2 className="font-serif text-3xl mb-2 text-warm-ink">{service.title}</h2>
              <p className="text-sm font-medium tracking-widest uppercase mb-6 text-accent-olive">{service.price}</p>
              <p className="font-light text-warm-ink-muted mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-start text-sm text-warm-ink-muted">
                    <span className="mr-3 text-accent-olive">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
