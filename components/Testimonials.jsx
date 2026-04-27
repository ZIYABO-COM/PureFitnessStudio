'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ─── Testimonials Data ────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id:     1,
    name:   'Sreeja Krishnamurthy',
    plan:   'Weight Loss Program · Kayiliad',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    stars:  5,
    text:   'I lost 18kg in 5 months at Pure Fitness. The weight loss program is extraordinary. The diet plan and trainer support changed my life completely. I feel stronger and more confident than ever before.',
  },
  {
    id:     2,
    name:   'Anil Varghese',
    plan:   'Annual Gold · All Centres',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    stars:  5,
    text:   'The cross-centre access is a game changer. I train at Kayiliad on weekdays and Kothakurissi on weekends. The yoga classes have completely fixed my back pain. Best investment I have made for my health.',
  },
  {
    id:     3,
    name:   'Meera & Sunil Pillai',
    plan:   'Couples Package · Vadanamkurissi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    stars:  5,
    text:   'We joined the couples package and it was the best decision. Training together has brought us so much closer. The trainers make every session enjoyable and push us just the right amount.',
  },
  {
    id:     4,
    name:   'Rajan Nambiar',
    plan:   'Student Plan · Kayiliad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    stars:  5,
    text:   'As a student, the pricing is incredibly affordable. The trainers genuinely care about your progress. In 3 months I have gained 6kg of muscle and my energy levels have gone through the roof.',
  },
  {
    id:     5,
    name:   'Fathima Beevi',
    plan:   'Ladies Package · Vadanamkurissi',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&q=80',
    stars:  5,
    text:   'The ladies-only sessions make me feel so comfortable. Priya ma\'am\'s Zumba class is the highlight of my week. I never thought working out could be this much fun. Highly recommend to all women.',
  },
  {
    id:     6,
    name:   'Dr. Thomas Mathew',
    plan:   'Annual Gold · Kothakurissi',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    stars:  5,
    text:   'As a doctor I am very particular about safe training. The medical panel here is outstanding. They reviewed my health history thoroughly before designing my program. Professional and trustworthy.',
  },
]

/* ─── Star Rating Component ────────────────────────────────── */
function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent text-sm">★</span>
      ))}
    </div>
  )
}

/* ─── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Testimonials() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  /* ── Show all / show less toggle ─────────────────
     On mobile we show 3 cards by default,
     user can expand to see all 6.
  ──────────────────────────────────────────────── */
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 3)

  return (
    <section
      id="testimonials"
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
        <div className="section-tag">Member Stories</div>
        <h2 className="
          font-display text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide text-white mb-4
        ">
          REAL<br />TRANSFORMATIONS
        </h2>
        <p className="section-sub">
          Don't take our word for it — hear directly from the
          members whose lives have been changed at Pure Fitness Studio.
        </p>
      </motion.div>

      {/* ── Testimonials Grid ──────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {visible.map((testi) => (
            <TestiCard key={testi.id} testi={testi} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── Show More / Less Button ─────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="text-center mt-10"
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-outline"
        >
          {showAll ? '↑ Show Less' : 'Read More Stories →'}
        </button>
      </motion.div>

      {/* ── Summary Stats Bar ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="
          mt-16 grid grid-cols-2 md:grid-cols-4
          gap-px bg-[#333]
          border border-[#333]
        "
      >
        {[
          { num: '500+', label: 'Happy Members'     },
          { num: '95%',  label: 'Retention Rate'    },
          { num: '4.9',  label: 'Average Rating'    },
          { num: '3',    label: 'Centres Available' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="
              bg-[#1a1a1a] py-8 px-6 text-center
              hover:bg-[#252525] transition-colors duration-300
            "
          >
            <div className="font-display text-4xl text-accent mb-1">
              {stat.num}
            </div>
            <div className="text-[0.7rem] text-[#888] tracking-[2px] uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

/* ─── TestiCard ────────────────────────────────────────────────
   Quote card with:
   - Large decorative " in the top-right corner
   - Star rating
   - Review text
   - Author avatar + name + plan
──────────────────────────────────────────────────────────────── */
function TestiCard({ testi }) {
  return (
    <motion.div
      variants={cardVariants}
      layout                          // animates layout changes when show more/less
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="
        relative
        bg-[#1a1a1a] border border-[#333]
        hover:border-accent
        p-7 rounded-sm
        transition-all duration-300
        hover:-translate-y-1
        overflow-hidden
      "
    >
      {/* Decorative large quote mark */}
      <div className="
        absolute top-2 right-5
        font-display text-[6rem] leading-none
        text-white/[0.04]
        pointer-events-none select-none
      ">
        "
      </div>

      {/* Stars */}
      <Stars count={testi.stars} />

      {/* Review text */}
      <p className="
        text-sm text-white/75 leading-relaxed
        font-light italic mb-6
      ">
        "{testi.text}"
      </p>

      {/* Divider */}
      <div className="h-px bg-[#333] mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testi.avatar}
          alt={testi.name}
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <div className="font-heading font-bold text-white text-sm">
            {testi.name}
          </div>
          <div className="text-[0.65rem] text-accent tracking-[1px] uppercase mt-0.5">
            {testi.plan}
          </div>
        </div>
      </div>
    </motion.div>
  )
}