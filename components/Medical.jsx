'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Medical Services Data ────────────────────────────────── */
const SERVICES = [
  {
    icon:  '🩻',
    title: 'Physiotherapy Centre',
    desc:  'Our certified physiotherapists work with members to prevent and recover from injuries. Available at all three centres for in-person and online consultations.',
    tag:   'Available at all centres',
  },
  {
    icon:  '👨‍⚕️',
    title: 'Doctors Panel',
    desc:  'Access to our panel of fitness-oriented medical doctors for health screenings, fitness clearances, and medical guidance tied to your training program.',
    tag:   'By appointment',
  },
  {
    icon:  '🥦',
    title: 'Nutrition Experts',
    desc:  'Our registered dieticians create science-backed meal plans that complement your workouts — whether you are losing weight, building muscle, or managing conditions.',
    tag:   'Personalized plans',
  },
  {
    icon:  '❤️',
    title: 'Health Screening',
    desc:  'Regular health assessments including body composition analysis, fitness tests, and blood pressure monitoring to keep your training on the right track safely.',
    tag:   'Monthly check-ins',
  },
]

/* ─── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Medical() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="medical"
      ref={ref}
      className="py-24 px-8 md:px-16 bg-[#141414]"
    >
      {/* ── Section Header ─────────────────────────── */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-16"
      >
        <div className="section-tag">Medical Panel</div>
        <h2 className="
          font-display text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide text-white mb-4
        ">
          HEALTH-FIRST<br />APPROACH
        </h2>
        <p className="section-sub">
          We go beyond gym training — our dedicated medical professionals
          ensure your fitness journey is safe, effective, and truly holistic.
        </p>
      </motion.div>

      {/* ── Services Grid — 2×2 ────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {SERVICES.map((service) => (
          <MedicalCard key={service.title} service={service} />
        ))}
      </motion.div>

      {/* ── Bottom CTA Strip ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="
          mt-10 p-8
          bg-[#0a0a0a] border border-[#333]
          rounded-sm
          grid grid-cols-1 md:grid-cols-3
          gap-6 items-center
        "
      >
        {/* Left text */}
        <div className="md:col-span-2">
          <h3 className="font-heading font-bold text-white text-xl mb-2">
            Need a medical consultation before joining?
          </h3>
          <p className="text-[#888] text-sm font-light leading-relaxed">
            Our doctors panel is here to review your health history and
            clear you for training safely. Book a free consultation today.
          </p>
        </div>

        {/* Right CTA */}
        <div className="flex justify-start md:justify-end">
          <a href="#contact" className="btn btn-primary">
            Book Consultation →
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── MedicalCard ──────────────────────────────────────────────
   Horizontal layout — icon on the left, content on the right.
   Yellow left border slides in on hover using CSS group.
──────────────────────────────────────────────────────────────── */
function MedicalCard({ service }) {
  return (
    <motion.div
      variants={cardVariants}
      className="
        group relative
        flex gap-5 items-start
        bg-[#1a1a1a] border border-[#333]
        hover:border-accent
        p-6 rounded-sm
        transition-all duration-300
        overflow-hidden
      "
    >
      {/* Accent left border on hover */}
      <div className="
        absolute left-0 top-0 bottom-0 w-[3px]
        bg-accent
        scale-y-0 group-hover:scale-y-100
        transition-transform duration-300 origin-top
      " />

      {/* Icon box */}
      <div className="
        w-14 h-14 bg-accent
        flex items-center justify-center
        text-2xl flex-shrink-0
        rounded-sm
        transition-transform duration-300
        group-hover:scale-110
      ">
        {service.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="
          font-heading font-bold text-white text-base mb-2
          group-hover:text-accent transition-colors duration-300
        ">
          {service.title}
        </h3>
        <p className="text-[#888] text-sm leading-relaxed font-light mb-3">
          {service.desc}
        </p>
        {/* Tag */}
        <span className="
          text-[0.6rem] tracking-[1.5px] uppercase
          text-accent border border-accent/40
          px-2 py-0.5 rounded-sm
        ">
          {service.tag}
        </span>
      </div>
    </motion.div>
  )
}