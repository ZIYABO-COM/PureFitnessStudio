'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/* ─── Training Programs Data ───────────────────────────────────
   Each program has an icon, title, description, and a color
   for the hover accent line. Keeping data here means you can
   add/remove programs without touching the JSX at all.
──────────────────────────────────────────────────────────────── */
const PROGRAMS = [
  {
    num:   '01',
    icon:  '🔥',
    title: 'Weight Loss',
    desc:  'Science-backed fat loss programs combining cardio, strength training, and personalized diet plans to burn fat effectively and sustainably.',
    tags:  ['Cardio', 'HIIT', 'Diet Plan'],
  },
  {
    num:   '02',
    icon:  '💪',
    title: 'Weight Gain',
    desc:  'Structured muscle-building protocols with progressive overload and nutrition plans designed to pack on lean mass the right way.',
    tags:  ['Strength', 'Hypertrophy', 'Nutrition'],
  },
  {
    num:   '03',
    icon:  '🧘',
    title: 'Yoga Training',
    desc:  'Traditional and modern yoga styles to improve flexibility, core strength, and mental clarity. Suitable for all experience levels.',
    tags:  ['Hatha', 'Vinyasa', 'Flexibility'],
  },
  {
    num:   '04',
    icon:  '🎵',
    title: 'Aerobics',
    desc:  'High-energy group aerobics sessions that boost cardiovascular health while keeping workouts fun, social, and motivating.',
    tags:  ['Cardio', 'Group Class', 'Endurance'],
  },
  {
    num:   '05',
    icon:  '🥗',
    title: 'Nutrition & Diet',
    desc:  'One-on-one diet counselling by certified nutritionists to complement your training and dramatically accelerate your results.',
    tags:  ['Diet Plan', 'Counselling', 'Meal Prep'],
  },
  {
    num:   '06',
    icon:  '🩺',
    title: 'Physiotherapy',
    desc:  'Expert physiotherapy services to recover from injuries, manage chronic pain, and prevent future setbacks with targeted rehab.',
    tags:  ['Rehab', 'Pain Relief', 'Recovery'],
  },
  {
    num:   '07',
    icon:  '💃',
    title: 'Zumba',
    desc:  'Latin-inspired dance fitness that makes working out feel like a party. Burns calories while you have the time of your life.',
    tags:  ['Dance', 'Fun', 'Group Class'],
  },
  {
    num:   '08',
    icon:  '🏆',
    title: 'Pro Bodybuilding',
    desc:  'Compete-ready programs designed by professional coaches for serious athletes and enthusiasts looking to step on stage.',
    tags:  ['Contest Prep', 'Posing', 'Peak Week'],
  },
]

/* ─── Animation Variants ───────────────────────────────────────
   useInView triggers the animation only when the section
   scrolls into the viewport — not on page load.
──────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const headingVariants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Training() {

  /* ── useRef + useInView ────────────────────────────────────
     We attach a ref to the section container.
     useInView watches it and returns true when it enters
     the viewport. once:true means it only fires once.
  ─────────────────────────────────────────────────────────── */
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="training"
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
        <div className="section-tag">What We Offer</div>
        <h2 className="
          font-display
          text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide
          text-white mb-4
        ">
          TRAINING<br />PROGRAMS
        </h2>
        <p className="section-sub">
          From intense bodybuilding to calming yoga — every fitness goal
          is covered with expert guidance and personalized plans.
        </p>
      </motion.div>

      {/* ── Programs Grid ──────────────────────────────
          8 cards in a 4-column grid on desktop,
          2 columns on tablet, 1 on mobile.
          The grid has 1px gaps with a background color
          creating a "border" effect between cards.
      ─────────────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-px bg-[#333]
        "
      >
        {PROGRAMS.map((program) => (
          <ProgramCard key={program.num} program={program} />
        ))}
      </motion.div>
    </section>
  )
}

/* ─── ProgramCard Component ────────────────────────────────────
   Extracted as its own component to keep the parent clean.
   Each card has a hover state with an accent top border
   that slides in using CSS transition (not Framer Motion —
   simple CSS transitions are fine for hover effects).
──────────────────────────────────────────────────────────────── */
function ProgramCard({ program }) {
  return (
    <motion.div
      variants={cardVariants}
      className="
        group relative
        bg-[#1a1a1a] p-8
        cursor-pointer
        transition-colors duration-300
        hover:bg-[#252525]
        overflow-hidden
      "
    >
      {/* Accent top border slides in on hover */}
      <div className="
        absolute top-0 left-0 right-0 h-[3px]
        bg-accent
        scale-x-0 group-hover:scale-x-100
        transition-transform duration-300 origin-left
      " />

      {/* Icon */}
      <div className="text-4xl mb-5">{program.icon}</div>

      {/* Title */}
      <h3 className="
        font-heading font-bold text-lg text-white
        mb-3 group-hover:text-accent transition-colors duration-300
      ">
        {program.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#888] leading-relaxed mb-5">
        {program.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {program.tags.map((tag) => (
          <span
            key={tag}
            className="
              text-[0.65rem] tracking-[1.5px] uppercase
              bg-[#333] text-[#888]
              px-2 py-1 rounded-sm
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Large background number — decorative */}
      <div className="
        absolute bottom-4 right-6
        font-display text-[5rem] leading-none
        text-white/[0.03]
        pointer-events-none select-none
      ">
        {program.num}
      </div>
    </motion.div>
  )
}