'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

/* ─── Centres Data ─────────────────────────────────────────────
   Three gym locations with address, hours, phone,
   facilities list, and a photo.
──────────────────────────────────────────────────────────────── */
const CENTRES = [
  {
    id:       1,
    name:     'Kayiliad Centre',
    tag:      'Main Branch',
    address:  'Kayiliad, Kanhangad, Kerala 671315',
    hours:    '5:00 AM – 10:00 PM',
    phone:    '+91 98765 43210',
    desc:     'Our flagship location featuring the full suite of equipment, a dedicated yoga studio, and the physiotherapy centre.',
    tags:     ['Full Equipment', 'Yoga Studio', 'Physio Centre', 'Parking'],
    img:      'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=600&q=80',
  },
  {
    id:       2,
    name:     'Vadanamkurissi Centre',
    tag:      'Branch',
    address:  'Vadanamkurissi, Palakkad, Kerala',
    hours:    '6:00 AM – 9:00 PM',
    phone:    '+91 98765 43211',
    desc:     'A modern facility offering all major training programs including group Zumba and aerobics classes throughout the week.',
    tags:     ['Group Classes', 'Zumba Studio', 'Cardio Zone'],
    img:      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80',
  },
  {
    id:       3,
    name:     'Kothakurissi Centre',
    tag:      'Branch',
    address:  'Kothakurissi, Palakkad, Kerala',
    hours:    '5:30 AM – 9:30 PM',
    phone:    '+91 98765 43212',
    desc:     'Compact and fully-equipped facility focused on personal training, weight training, and nutrition counselling.',
    tags:     ['Personal Training', 'Weight Room', 'Nutrition Desk'],
    img:      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80',
  },
]

/* ─── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Centres() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="centres"
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
        <div className="section-tag">Our Locations</div>
        <h2 className="
          font-display text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide text-white mb-4
        ">
          FIND US<br />NEAR YOU
        </h2>
        <p className="section-sub">
          Three fully-equipped centres across Kerala.
          Your membership grants access to all three —
          train wherever suits you best.
        </p>
      </motion.div>

      {/* ── Centres Grid ───────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {CENTRES.map((centre) => (
          <CentreCard key={centre.id} centre={centre} />
        ))}
      </motion.div>

      {/* ── Cross-centre note ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="
          mt-12 p-6
          border border-accent/30 bg-accent/5
          rounded-sm
          flex flex-col md:flex-row
          items-center justify-between gap-4
        "
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">🏋️</span>
          <div>
            <div className="font-heading font-bold text-white text-sm">
              One Membership. All Three Centres.
            </div>
            <div className="text-[#888] text-sm font-light">
              Switch between locations anytime — no extra charges, no restrictions.
            </div>
          </div>
        </div>
        <a href="#contact" className="btn btn-primary flex-shrink-0">
          Join Now →
        </a>
      </motion.div>
    </section>
  )
}

/* ─── CentreCard ───────────────────────────────────────────────
   Each card has:
   - Photo with zoom on hover
   - Tag badge (Main Branch / Branch)
   - Name, description, facility tags
   - Contact info row (address, hours, phone)
   - Accent border appears on hover
──────────────────────────────────────────────────────────────── */
function CentreCard({ centre }) {
  return (
    <motion.div
      variants={cardVariants}
      className="
        group
        border border-[#333] hover:border-accent
        rounded-sm overflow-hidden
        bg-[#1a1a1a]
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* ── Photo ───────────────────────────────────── */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={centre.img}
          alt={centre.name}
          className="
            w-full h-full object-cover brightness-70
            transition-all duration-500
            group-hover:brightness-85 group-hover:scale-105
          "
        />
        {/* Branch tag badge */}
        <div className="
          absolute top-3 left-3
          bg-accent text-black
          text-[0.6rem] font-bold tracking-[2px] uppercase
          px-2 py-1
        ">
          {centre.tag}
        </div>
      </div>

      {/* ── Card Body ───────────────────────────────── */}
      <div className="p-6">

        {/* Name */}
        <h3 className="
          font-heading font-bold text-white text-lg mb-2
          group-hover:text-accent transition-colors duration-300
        ">
          {centre.name}
        </h3>

        {/* Description */}
        <p className="text-[#888] text-sm leading-relaxed mb-4 font-light">
          {centre.desc}
        </p>

        {/* Facility tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {centre.tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[0.6rem] tracking-[1.5px] uppercase
                bg-[#252525] text-[#888]
                px-2 py-1 rounded-sm
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Divider ─────────────────────────────── */}
        <div className="h-px bg-[#333] mb-4" />

        {/* ── Contact Info ────────────────────────────
            Uses Lucide icons for a clean look.
            Each row has an icon + text.
        ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-start gap-2.5">
            <MapPin size={13} className="text-accent mt-0.5 flex-shrink-0" />
            <span className="text-[#888] text-xs leading-relaxed">
              {centre.address}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock size={13} className="text-accent flex-shrink-0" />
            <span className="text-[#888] text-xs">{centre.hours}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={13} className="text-accent flex-shrink-0" />
            <span className="text-[#888] text-xs">{centre.phone}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}