import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="w-full">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="font-serif text-5xl mb-6 text-warm-ink">Contact & Booking</h1>
          <p className="text-warm-ink-muted leading-relaxed">
            Ready to elevate your space? We'd love to hear from you. Use the calendar below to schedule a direct consultation, or reach out to us at just.the.wright.interiors@gmail.com for general inquiries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] w-full max-w-5xl mx-auto"
        >
          {/* Replace this placeholder iframe src with the actual Google Calendar Appointment Scheduling link */}
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/placeholder" // USER ACTION REQUIRED: Please change to actual URL
            className="w-full h-full border-0"
            title="Google Calendar Booking"
          />
        </motion.div>
        <p className="text-center mt-6 text-sm text-accent-olive uppercase tracking-widest">
          Please update the calendar link in the source code.
        </p>
      </section>
    </div>
  );
}
