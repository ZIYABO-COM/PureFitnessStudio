'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Activities Data ──────────────────────────────────────────
   Photo grid layout — one tall card on the left (spans 2 rows),
   four smaller cards on the right in a 2x2 grid.
──────────────────────────────────────────────────────────────── */
const ACTIVITIES = [
  {
    id:    1,
    tag:   'Group Programs',
    title: 'Group Cardio & Dance Classes',
    img:   'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    tall:  true,   // spans 2 rows on the left
  },
  {
    id:    2,
    tag:   'Member Trips',
    title: 'Fitness Tours & Retreats',
    img:   'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80',
    tall:  false,
  },
  {
    id:    3,
    tag:   'Celebrations',
    title: 'Onam · Vishu · Eid Events',
    img:   'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
    tall:  false,
  },
  {
    id:    4,
    tag:   'Fitness Challenges',
    title: '30-Day Transformation Challenges',
    img:   'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80',
    tall:  false,
  },
  {
    id:    5,
    tag:   'Workshops',
    title: 'Nutrition & Wellness Workshops',
    img:   'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
    tall:  false,
  },
]

/* ─── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Activities() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  /* Separate tall card from the rest */
  const tallCard  = ACTIVITIES.find(a => a.tall)
  const smallCards = ACTIVITIES.filter(a => !a.tall)

  return (
    <section
      id="activities"
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
        <div className="section-tag">Community & Events</div>
        <h2 className="
          font-display text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide text-white mb-4
        ">
          BEYOND THE<br />GYM
        </h2>
        <p className="section-sub">
          We believe fitness is a lifestyle. Our activities and
          community events keep you engaged, motivated, and connected
          long after your workout ends.
        </p>
      </motion.div>

      {/* ── Photo Grid ─────────────────────────────────
          Layout:
          [  TALL  ] [ sm ] [ sm ]
          [  TALL  ] [ sm ] [ sm ]

          On mobile: single column stack.
          On desktop: CSS grid with rows defined by content.
      ─────────────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="
          grid grid-cols-1 md:grid-cols-3
          gap-4
          md:grid-rows-2
        "
      >
        {/* Tall card — spans 2 rows */}
        {tallCard && (
          <motion.div
            variants={cardVariants}
            className="md:row-span-2 md:col-span-1"
          >
            <ActivityCard activity={tallCard} tall />
          </motion.div>
        )}

        {/* Small cards — 2x2 on the right */}
        {smallCards.map((activity) => (
          <motion.div key={activity.id} variants={cardVariants}>
            <ActivityCard activity={activity} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

/* ─── ActivityCard ─────────────────────────────────────────────
   Full-bleed image card with text label at the bottom.
   On hover: image darkens, label slides up slightly.
──────────────────────────────────────────────────────────────── */
function ActivityCard({ activity, tall = false }) {
  return (
    <div className={`
      group relative overflow-hidden rounded-sm cursor-pointer
      ${tall ? 'h-[500px] md:h-full' : 'h-60'}
    `}>
      {/* Background image */}
      <img
        src={activity.img}
        alt={activity.title}
        className="
          absolute inset-0 w-full h-full object-cover
          brightness-60
          transition-all duration-500
          group-hover:brightness-40 group-hover:scale-105
        "
      />

      {/* Gradient — bottom dark overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-t from-black/80 via-black/20 to-transparent
      " />

      {/* Label */}
      <div className="
        absolute bottom-0 left-0 right-0
        p-5
        translate-y-1 group-hover:translate-y-0
        transition-transform duration-300
      ">
        {/* Category tag */}
        <span className="
          text-[0.6rem] font-bold tracking-[2px] uppercase
          text-accent
          block mb-1
        ">
          {activity.tag}
        </span>

        {/* Activity title */}
        <h3 className={`
          font-heading font-bold text-white leading-tight
          ${tall ? 'text-xl' : 'text-base'}
        `}>
          {activity.title}
        </h3>
      </div>

      {/* Corner arrow — appears on hover */}
      <div className="
        absolute top-4 right-4
        w-8 h-8
        bg-accent text-black
        flex items-center justify-center
        text-sm font-bold
        opacity-0 group-hover:opacity-100
        translate-x-2 group-hover:translate-x-0
        transition-all duration-300
      ">
        ↗
      </div>
    </div>
  )
}