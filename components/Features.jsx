'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Features Data ────────────────────────────────────────────
   Each feature has a number, title, and description.
   The number is decorative and also serves as a visual anchor.
──────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    num:   '01',
    title: 'Cross-Centre Access',
    desc:  'Your membership works at all 3 Pure Fitness centres — Kayiliad, Vadanamkurissi, and Kothakurissi. Train wherever is most convenient for you that day.',
  },
  {
    num:   '02',
    title: 'Trainer at Home Service',
    desc:  'Our certified trainers visit your location for personalized one-on-one sessions when you cannot make it to the studio. Fitness on your terms.',
  },
  {
    num:   '03',
    title: 'Personalized Health Assessment',
    desc:  'Every new member gets a complete health and fitness assessment. We design your program around your body, goals, and medical history — not a template.',
  },
  {
    num:   '04',
    title: 'Flexible & Negotiable Pricing',
    desc:  'We believe fitness should be accessible to everyone. Reach out to discuss custom pricing that fits your budget and specific training needs.',
  },
]

/* ─── Animation Variants ───────────────────────────────────── */
const imageVariants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const textVariants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const featureVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const badgeVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
}

export default function Features() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-8 md:px-16 bg-[#141414]"
    >
      <div className="
        grid grid-cols-1 lg:grid-cols-2
        gap-16 lg:gap-24 items-center
      ">

        {/* ══ LEFT — Image Column ══════════════════════ */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Main image */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="Training at Pure Fitness Studio"
              className="
                w-full h-[500px] lg:h-[600px]
                object-cover
                brightness-75
                transition-transform duration-700 hover:scale-105
              "
            />
            {/* Gradient overlay at bottom of image */}
            <div className="
              absolute inset-0
              bg-gradient-to-t from-black/60 via-transparent to-transparent
            " />
          </div>

          {/* ── Floating Badge ──────────────────────────
              Positioned bottom-right, overlapping the image.
              Uses negative margin to "break out" of the
              image container slightly.
          ─────────────────────────────────────────────── */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="
              absolute -bottom-6 -right-4 md:-right-8
              bg-accent text-black
              p-6 text-center
              shadow-[0_0_40px_rgba(232,255,62,0.2)]
            "
          >
            <div className="font-display text-5xl leading-none">95%</div>
            <div className="
              text-[0.65rem] font-bold tracking-[2px]
              uppercase mt-1
            ">
              Member<br />Retention
            </div>
          </motion.div>

          {/* ── Decorative accent line ──────────────── */}
          <div className="
            absolute -left-4 top-8 bottom-8
            w-[3px] bg-accent
          " />
        </motion.div>

        {/* ══ RIGHT — Text Column ══════════════════════ */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="section-tag">Why Pure Fitness</div>
          <h2 className="
            font-display
            text-[clamp(2.5rem,5vw,4.5rem)]
            leading-none tracking-wide text-white
            mb-4
          ">
            A STUDIO<br />BUILT FOR<br />RESULTS
          </h2>
          <p className="section-sub mb-12">
            We don't just give you a gym — we give you a complete system,
            a supportive community, and expert guidance every step of the way.
          </p>

          {/* ── Feature Items List ──────────────────── */}
          <div className="flex flex-col gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.num}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex gap-5 items-start group"
              >
                {/* Number — acts as a visual anchor */}
                <div className="
                  font-display text-[2.5rem] leading-none
                  text-accent min-w-[3rem]
                  transition-transform duration-300
                  group-hover:-translate-y-1
                ">
                  {feature.num}
                </div>

                <div>
                  {/* Feature title */}
                  <h4 className="
                    font-heading font-bold text-white text-base
                    mb-1
                    group-hover:text-accent transition-colors duration-300
                  ">
                    {feature.title}
                  </h4>
                  {/* Feature description */}
                  <p className="text-sm text-[#888] leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── CTA Link ──────────────────────────────── */}
          <div className="mt-10">
            <a
              href="#contact"
              className="btn btn-primary inline-flex"
            >
              Start Your Journey →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}