'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Plans Data ───────────────────────────────────────────────
   Each plan has everything needed to render the card.
   'featured' flag makes one card visually highlighted.
   'badge' shows a label on the featured card.
──────────────────────────────────────────────────────────────── */
const PLANS = [
  {
    id:       'student',
    name:     'Student Plan',
    price:    '999',
    period:   '3 months',
    desc:     'Perfect for students who want to kickstart their fitness journey at an affordable price.',
    featured: false,
    badge:    null,
    features: [
      'Valid student ID required',
      'Full gym floor access',
      'Group aerobics & Zumba',
      'Basic diet guidance',
      'Cross-centre access',
      'Locker room access',
    ],
  },
  {
    id:       'ladies',
    name:     'Ladies Package',
    price:    '1499',
    period:   'month',
    desc:     'Designed exclusively for women with dedicated sessions and a comfortable environment.',
    featured: false,
    badge:    null,
    features: [
      'Ladies-only sessions available',
      'Yoga + Zumba included',
      'Nutrition counselling',
      'Physiotherapy access',
      'Cross-centre access',
      'Personal trainer check-in',
    ],
  },
  {
    id:       'couples',
    name:     'Couples Package',
    price:    '2499',
    period:   'month',
    desc:     'Train together, grow together. The best value plan for two people committed to fitness.',
    featured: true,
    badge:    'Most Popular',
    features: [
      '2 members — full access',
      'All training types included',
      'Personal trainer sessions',
      'Online video content',
      'Priority booking slots',
      'Cross-centre access',
      'Monthly progress review',
    ],
  },
  {
    id:       'annual',
    name:     'Annual Gold',
    price:    '9999',
    period:   'year',
    desc:     'Our most comprehensive plan for serious athletes who want everything Pure Fitness offers.',
    featured: false,
    badge:    null,
    features: [
      'All training programs',
      'Unlimited PT sessions',
      'Medical panel access',
      'Trainer at Home — 4×/month',
      'Full online content library',
      'Cross-centre access',
      'Quarterly body assessment',
    ],
  },
]

/* ─── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Membership() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="membership"
      ref={ref}
      className="py-24 px-8 md:px-16 bg-[#0a0a0a]"
    >
      {/* ── Section Header — centered ───────────────── */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-center mb-16"
      >
        <div className="section-tag">Membership Plans</div>
        <h2 className="
          font-display
          text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide text-white mb-4
        ">
          CHOOSE YOUR<br />JOURNEY
        </h2>
        <p className="
          text-[#888] font-light text-base leading-relaxed
          max-w-md mx-auto
        ">
          All memberships include cross-centre access across all 3 locations.
          Pricing is flexible — contact us for customized packages.
        </p>
      </motion.div>

      {/* ── Plans Grid ─────────────────────────────────
          4 cards on desktop, 2 on tablet, 1 on mobile.
          The featured card is slightly taller due to
          the badge at the top pushing content down.
      ─────────────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
          gap-6 items-start
        "
      >
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </motion.div>

      {/* ── Bottom Note ────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center text-[#555] text-sm mt-10"
      >
        💬 All prices are negotiable. Call us at{' '}
        <span className="text-accent">+91 98765 43210</span>{' '}
        to discuss a plan that fits your budget.
      </motion.p>
    </section>
  )
}

/* ─── PlanCard Component ───────────────────────────────────────
   Handles its own hover state with useState.
   Featured card has special border + background styling.
──────────────────────────────────────────────────────────────── */
function PlanCard({ plan }) {
  /* Track hover state to animate the button */
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={()   => setHovered(false)}
      className={`
        relative flex flex-col
        border rounded-sm p-8
        transition-all duration-300
        ${plan.featured
          ? 'border-accent bg-[#1a1a1a] shadow-[0_0_40px_rgba(232,255,62,0.1)]'
          : 'border-[#333] bg-[#141414] hover:border-accent'
        }
      `}
    >
      {/* ── Featured Badge ──────────────────────────── */}
      {plan.badge && (
        <div className="
          absolute -top-px left-1/2 -translate-x-1/2
          bg-accent text-black
          text-[0.6rem] font-bold tracking-[2px] uppercase
          px-4 py-1
        ">
          {plan.badge}
        </div>
      )}

      {/* ── Plan Name ──────────────────────────────── */}
      <div className="
        font-heading font-bold text-[0.75rem]
        tracking-[2px] uppercase text-[#888]
        mb-4 mt-2
      ">
        {plan.name}
      </div>

      {/* ── Price ──────────────────────────────────── */}
      <div className="mb-2">
        <span className="font-display text-[3.5rem] leading-none text-white">
          ₹{plan.price}
        </span>
        <span className="text-[#888] text-sm ml-1">/ {plan.period}</span>
      </div>

      {/* ── Description ────────────────────────────── */}
      <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
        {plan.desc}
      </p>

      {/* ── Divider ────────────────────────────────── */}
      <div className="h-px bg-[#333] mb-6" />

      {/* ── Features List ──────────────────────────── */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-white/80"
          >
            {/* Checkmark */}
            <span className="
              text-accent font-bold text-base
              leading-none mt-0.5 flex-shrink-0
            ">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* ── CTA Button ─────────────────────────────────
          Featured card always has accent background.
          Other cards switch to accent on hover.
      ─────────────────────────────────────────────── */}
      <a
        href="#contact"
        className={`
          block text-center py-3 px-6
          text-[0.75rem] font-bold tracking-[2px] uppercase
          border rounded-sm
          transition-all duration-200
          ${plan.featured || hovered
            ? 'bg-accent text-black border-accent'
            : 'bg-transparent text-white border-[#444] hover:border-accent hover:text-accent'
          }
        `}
      >
        Get Started →
      </a>
    </motion.div>
  )
}