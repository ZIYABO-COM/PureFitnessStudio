'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Steps Data ───────────────────────────────────────────────
   4-step process for the health assessment flow.
──────────────────────────────────────────────────────────────── */
const STEPS = [
  {
    num:   '1',
    title: 'Fill Your Health Profile',
    desc:  'Enter your age, weight, medical history, current fitness level, and goals through our simple intake form.',
  },
  {
    num:   '2',
    title: 'Get Expert Analysis',
    desc:  'Our trainers and medical panel review your details and craft a personalized program designed specifically for you.',
  },
  {
    num:   '3',
    title: 'Start Your Plan',
    desc:  'Begin your tailored workout and diet plan with full trainer support from day one — in centre or at home.',
  },
  {
    num:   '4',
    title: 'Track & Evolve',
    desc:  'Regular check-ins to monitor your progress and update your plan as you grow stronger and hit new milestones.',
  },
]

/* ─── Fitness Bars Data ────────────────────────────────────────
   Decorative progress bars shown on the floating widget.
──────────────────────────────────────────────────────────────── */
const FITNESS_BARS = [
  { label: 'Strength',    value: 78 },
  { label: 'Cardio',      value: 65 },
  { label: 'Flexibility', value: 52 },
  { label: 'Nutrition',   value: 88 },
]

/* ─── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const stepVariants = {
  hidden:  { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const imageVariants = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const textVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Assessment() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="assessment"
      ref={ref}
      className="py-24 px-8 md:px-16 bg-[#0a0a0a]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ══ LEFT — Image + Widget ════════════════════ */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Main image */}
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=800&q=80"
              alt="Health Assessment"
              className="
                w-full h-[500px] object-cover brightness-75
                transition-transform duration-700 hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* ── Floating Fitness Score Widget ───────────
              Positioned top-right, overlapping the image.
              Shows decorative progress bars.
          ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={inView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.85, y: 20 }
            }
            transition={{ delay: 0.5, duration: 0.5 }}
            className="
              absolute top-6 -right-4 md:-right-8
              bg-[#141414] border border-[#333]
              p-5 rounded-sm w-52
              shadow-lg
            "
          >
            <div className="
              text-[0.6rem] text-[#888]
              tracking-[2px] uppercase mb-4 font-bold
            ">
              Your Fitness Score
            </div>

            {/* Progress bars */}
            <div className="flex flex-col gap-3">
              {FITNESS_BARS.map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[0.7rem] text-white/80">{bar.label}</span>
                    <span className="text-[0.7rem] text-accent font-bold">{bar.value}%</span>
                  </div>
                  {/* Bar track */}
                  <div className="h-1 bg-[#333] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.value}%` } : { width: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decorative accent line */}
          <div className="absolute -left-4 top-8 bottom-8 w-[3px] bg-accent" />
        </motion.div>

        {/* ══ RIGHT — Steps ════════════════════════════ */}
        <div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-10"
          >
            <div className="section-tag">Personalized Health Assessment</div>
            <h2 className="
              font-display text-[clamp(2.5rem,5vw,4.5rem)]
              leading-none tracking-wide text-white mb-4
            ">
              WE PLAN YOUR<br />PERFECT FIT
            </h2>
            <p className="section-sub">
              Tell us about your health, body, and goals. Our system
              recommends the ideal workout and diet plan tailored
              specifically for you — not a generic template.
            </p>
          </motion.div>

          {/* ── Steps List ──────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                variants={stepVariants}
                className="flex gap-4 items-start group"
              >
                {/* Step circle number */}
                <div className="
                  w-10 h-10 rounded-full
                  border-2 border-accent
                  flex items-center justify-content-center
                  flex-shrink-0
                  font-display text-xl text-accent
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-accent group-hover:text-black
                ">
                  {step.num}
                </div>

                <div>
                  <h4 className="
                    font-heading font-bold text-white text-sm mb-1
                    group-hover:text-accent transition-colors duration-300
                  ">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#888] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-10"
          >
            <a href="#contact" className="btn btn-primary">
              Get Your Assessment →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}