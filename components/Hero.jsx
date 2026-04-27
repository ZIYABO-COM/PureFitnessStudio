'use client'

import { motion } from 'framer-motion'

/* ─── Stats Data ───────────────────────────────────────────────
   Keeping data separate from JSX makes it easy to update later.
──────────────────────────────────────────────────────────────── */
const STATS = [
  { num: '8+',   label: 'Training Types' },
  { num: '3',    label: 'Centres'        },
  { num: '500+', label: 'Members'        },
  { num: '12+',  label: 'Expert Trainers'},
]

/* ─── Ticker Items ─────────────────────────────────────────── */
const TICKER_ITEMS = [
  'Weight Loss', 'Yoga Training', 'Zumba', 'Aerobics',
  'Physiotherapy', 'Nutrition & Diet', 'Bodybuilding', 'Weight Gain',
  'Trainer at Home',
]

/* ─── Framer Motion Variants ───────────────────────────────────
   Variants let us define animation states (hidden / visible)
   and reuse them across multiple elements cleanly.
──────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,  // each child animates 0.15s after the previous
    },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const statVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO SECTION
          - Full viewport height
          - Background image with dark overlay
          - Animated heading + CTAs
          - Stats row at bottom right
      ═══════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* ── Background Image ───────────────────────
            We use a free Unsplash image here.
            Later you can replace the URL with your
            own gym photo in /public/images/hero.jpg
            and change src to "/images/hero.jpg"
        ─────────────────────────────────────────── */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')`,
          }}
        />

        {/* ── Dark overlay — makes text readable ──── */}
        <div className="absolute inset-0 bg-black/65" />

        {/* ── Grain texture overlay (from globals.css) */}
        <div className="grain-overlay absolute inset-0" />

        {/* ── Hero Content ────────────────────────────
            z-10 puts this above the overlays above.
            We use Framer Motion's staggerChildren so
            each element animates in one after another.
        ─────────────────────────────────────────── */}
        <motion.div
          className="relative z-10 px-8 md:px-16 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag pill */}
          <motion.div variants={itemVariants}>
            <span className="
              inline-block bg-accent text-black
              text-[0.65rem] font-bold tracking-[3px] uppercase
              px-3 py-1.5 mb-6
            ">
              📍 Kerala's Premium Fitness Destination
            </span>
          </motion.div>

          {/* Main heading — Bebas Neue display font */}
          <motion.h1
            variants={itemVariants}
            className="
              font-display
              text-[clamp(5rem,12vw,10rem)]
              leading-[0.9] tracking-[2px]
              text-white mb-6
            "
          >
            FORGE<br />
            YOUR <span className="text-accent">BEST</span><br />
            SELF
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="
              text-white/65 font-light
              text-base md:text-lg
              leading-relaxed max-w-md mb-8
            "
          >
            Three state-of-the-art centres across Kerala.
            Expert trainers, personalized plans, and a community
            that pushes you beyond limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            <a href="#membership" className="btn btn-primary">
              View Membership
            </a>
            <a href="#contact" className="btn btn-outline">
              Book Free Trial →
            </a>
          </motion.div>
        </motion.div>

        {/* ── Stats Row ───────────────────────────────
            Positioned bottom-right.
            Each stat uses a custom delay via the
            statVariants "custom" index.
        ─────────────────────────────────────────── */}
        <div className="
          absolute bottom-10 right-8 md:right-16
          z-10 flex gap-8 md:gap-12
        ">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <div className="
                font-display text-[2.5rem] md:text-[3rem]
                text-accent leading-none
              ">
                {stat.num}
              </div>
              <div className="
                text-[0.65rem] text-white/50
                tracking-[2px] uppercase mt-1
              ">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TICKER STRIP
          Scrolling banner of all training types.
          The duplicate of TICKER_ITEMS creates a
          seamless infinite loop effect.
      ═══════════════════════════════════════════════ */}
      <div className="bg-accent py-3 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {/* Render twice to create seamless loop */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-display text-black text-base tracking-[3px] flex-shrink-0"
            >
              {i % TICKER_ITEMS.length === 0 && i !== 0 ? null : null}
              {item}
              <span className="ml-12 text-black/40">★</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}