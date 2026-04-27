'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Trainers Data ────────────────────────────────────────────
   Each trainer has a photo (Unsplash), name, role,
   specializations, and a short bio shown on hover.
──────────────────────────────────────────────────────────────── */
const TRAINERS = [
  {
    id:      1,
    name:    'Arjun Menon',
    role:    'Head Coach · Bodybuilding',
    bio:     'National-level bodybuilder with 8 years of coaching experience. Expert in hypertrophy training and contest prep programs.',
    specs:   ['Bodybuilding', 'Weight Gain', 'Contest Prep'],
    img:     'https://images.unsplash.com/photo-1567013127542-490d757e6349?w=500&q=80',
  },
  {
    id:      2,
    name:    'Priya Nair',
    role:    'Yoga & Zumba Specialist',
    bio:     'Certified yoga instructor with 6 years in Hatha and Vinyasa. Leads our most popular Zumba sessions every week.',
    specs:   ['Yoga', 'Zumba', 'Aerobics'],
    img:     'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80',
  },
  {
    id:      3,
    name:    'Rahul Krishnan',
    role:    'Fat Loss Expert',
    bio:     'Specializes in sustainable weight loss combining HIIT, functional training, and nutrition coaching. 500+ transformations.',
    specs:   ['Weight Loss', 'HIIT', 'Nutrition'],
    img:     'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80',
  },
  {
    id:      4,
    name:    'Divya Thomas',
    role:    'Physiotherapist · BPT',
    bio:     'Licensed physiotherapist with a sports medicine background. Heads our rehabilitation centre and injury prevention programs.',
    specs:   ['Physiotherapy', 'Rehab', 'Sports Medicine'],
    img:     'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80',
  },
]

/* ─── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Trainers() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="trainers"
      ref={ref}
      className="py-24 px-8 md:px-16 bg-[#0a0a0a]"
    >
      {/* ── Section Header ─────────────────────────── */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-16"
      >
        <div className="section-tag">Our Coaches</div>
        <h2 className="
          font-display text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide text-white mb-4
        ">
          MEET THE<br />EXPERTS
        </h2>
        <p className="section-sub">
          Each trainer brings specialized expertise, certifications,
          and a passion for transforming lives through fitness.
        </p>
      </motion.div>

      {/* ── Trainers Grid ──────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {TRAINERS.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </motion.div>
    </section>
  )
}

/* ─── TrainerCard ──────────────────────────────────────────────
   On hover:
   - Image darkens and scales up slightly
   - Overlay slides up revealing bio + specialization tags
   Uses CSS group-hover for all effects — no JS state needed.
──────────────────────────────────────────────────────────────── */
function TrainerCard({ trainer }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-sm cursor-pointer"
    >
      {/* ── Photo ───────────────────────────────────── */}
      <img
        src={trainer.img}
        alt={trainer.name}
        className="
          w-full h-[380px] object-cover
          brightness-75 grayscale-[20%]
          transition-all duration-500
          group-hover:brightness-40 group-hover:scale-105
        "
      />

      {/* ── Always-visible name bar (bottom) ────────── */}
      <div className="
        absolute bottom-0 left-0 right-0
        p-5
        bg-gradient-to-t from-black/90 to-transparent
        transition-opacity duration-300
        group-hover:opacity-0
      ">
        <div className="font-heading font-bold text-white text-base">
          {trainer.name}
        </div>
        <div className="text-[0.7rem] text-accent tracking-[1.5px] uppercase mt-0.5">
          {trainer.role}
        </div>
      </div>

      {/* ── Hover Overlay — slides up ────────────────
          translate-y-full = hidden below the card
          group-hover:translate-y-0 = slides up into view
      ──────────────────────────────────────────────── */}
      <div className="
        absolute inset-0 p-6
        flex flex-col justify-center
        bg-black/85
        translate-y-full group-hover:translate-y-0
        transition-transform duration-400 ease-out
      ">
        {/* Name + role inside overlay */}
        <div className="font-heading font-bold text-white text-lg mb-1">
          {trainer.name}
        </div>
        <div className="text-[0.7rem] text-accent tracking-[1.5px] uppercase mb-4">
          {trainer.role}
        </div>

        {/* Bio */}
        <p className="text-sm text-white/75 leading-relaxed mb-5 font-light">
          {trainer.bio}
        </p>

        {/* Specialization tags */}
        <div className="flex flex-wrap gap-2">
          {trainer.specs.map((spec) => (
            <span
              key={spec}
              className="
                bg-accent text-black
                text-[0.6rem] font-bold
                tracking-[1.5px] uppercase
                px-2 py-1
              "
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}