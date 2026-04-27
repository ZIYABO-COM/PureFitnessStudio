This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.eslintrc.json
.gitignore
app/favicon.ico
app/fonts/GeistMonoVF.woff
app/fonts/GeistVF.woff
app/globals.css
app/layout.js
app/page.js
components.json
components/Activities.jsx
components/Assessment.jsx
components/Centres.jsx
components/Contact.jsx
components/Features.jsx
components/Footer.jsx
components/Hero.jsx
components/Medical.jsx
components/Membership.jsx
components/Navbar.jsx
components/Testimonials.jsx
components/Trainers.jsx
components/Training.jsx
components/ui/badge.jsx
components/ui/button.jsx
components/ui/card.jsx
components/ui/dialog.jsx
components/ui/input.jsx
components/ui/label.jsx
components/ui/select.jsx
components/ui/sheet.jsx
components/ui/textarea.jsx
jsconfig.json
lib/utils.js
next.config.mjs
package.json
postcss.config.mjs
public/logo.png
README.md
tailwind.config.js
```

# Files

## File: .eslintrc.json
````json
{
  "extends": "next/core-web-vitals"
}
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}
````

## File: components/Activities.jsx
````javascript
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
````

## File: components/Assessment.jsx
````javascript
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
````

## File: components/Centres.jsx
````javascript
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
````

## File: components/Contact.jsx
````javascript
'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react'

/* ─── EmailJS Config ───────────────────────────────────────────
   Steps to set up EmailJS (free — 200 emails/month):
   1. Go to https://emailjs.com and create a free account
   2. Add an Email Service (Gmail recommended)
   3. Create an Email Template — use these variable names:
      {{from_name}}, {{from_email}}, {{phone}},
      {{program}}, {{centre}}, {{message}}
   4. Copy your Service ID, Template ID, and Public Key
   5. Replace the values below with your actual IDs
──────────────────────────────────────────────────────────────── */
const EMAILJS_CONFIG = {
  serviceId:  'YOUR_SERVICE_ID',   // e.g. 'service_abc123'
  templateId: 'YOUR_TEMPLATE_ID',  // e.g. 'template_xyz789'
  publicKey:  'YOUR_PUBLIC_KEY',   // e.g. 'abcDEF123456'
}

/* ─── Form Options ─────────────────────────────────────────── */
const PROGRAMS = [
  'Weight Loss',
  'Weight Gain / Bodybuilding',
  'Yoga Training',
  'Aerobics',
  'Zumba',
  'Nutrition & Diet',
  'Physiotherapy',
  'Trainer at Home',
]

const CENTRES = [
  'Kayiliad (Main Branch)',
  'Vadanamkurissi',
  'Kothakurissi',
  'Home Visit',
]

const TIMES = [
  'Morning   5:00 – 8:00 AM',
  'Morning   8:00 – 12:00 PM',
  'Afternoon 12:00 – 4:00 PM',
  'Evening   4:00 – 7:00 PM',
  'Evening   7:00 – 10:00 PM',
]

/* ─── Contact Info Items ───────────────────────────────────── */
const CONTACT_INFO = [
  {
    icon:  Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    sub:   'Mon – Sat, 5 AM – 10 PM',
  },
  {
    icon:  Mail,
    label: 'Email Us',
    value: 'hello@purefitnessstudio.in',
    sub:   'We reply within 2 hours',
  },
  {
    icon:  MapPin,
    label: 'Main Centre',
    value: 'Kayiliad, Kanhangad, Kerala',
    sub:   '+ 2 more locations',
  },
  {
    icon:  Clock,
    label: 'Working Hours',
    value: '5:00 AM – 10:00 PM',
    sub:   'Open 7 days a week',
  },
]

/* ─── Animation Variants ───────────────────────────────────── */
const headingVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const formVariants = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const infoVariants = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

/* ─── Input / Select / Textarea base styles ────────────────── */
const inputClass = `
  w-full bg-[#1a1a1a] border border-[#333]
  text-white placeholder-[#555]
  px-4 py-3 rounded-sm text-sm
  focus:outline-none focus:border-accent
  transition-colors duration-200
  font-body
`

const labelClass = `
  block text-[0.7rem] font-bold tracking-[1.5px]
  uppercase text-[#888] mb-2
`

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  /* ── Form State ──────────────────────────────────
     A single object holds all field values.
     One handler updates any field by name.
  ──────────────────────────────────────────────── */
  const [form, setForm] = useState({
    firstName: '',
    lastName:  '',
    phone:     '',
    email:     '',
    program:   '',
    centre:    '',
    time:      '',
    message:   '',
  })

  /* ── Submission States ───────────────────────── */
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  /* ── Handle Input Change ─────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  /* ── Handle Submit ───────────────────────────────
     Imports EmailJS dynamically (client-side only).
     Sends the form data using the template variables.
  ──────────────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      /* Dynamic import — loads EmailJS only when needed */
      const emailjs = (await import('@emailjs/browser')).default

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name:  `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          phone:      form.phone,
          program:    form.program,
          centre:     form.centre,
          time:       form.time,
          message:    form.message || 'No additional notes.',
        },
        EMAILJS_CONFIG.publicKey,
      )

      setStatus('success')
      /* Reset form after success */
      setForm({
        firstName: '', lastName: '',
        phone: '', email: '',
        program: '', centre: '',
        time: '', message: '',
      })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-8 md:px-16 bg-[#1a1a1a]"
    >
      {/* ── Section Header ─────────────────────────── */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-16"
      >
        <div className="section-tag">Book a Session</div>
        <h2 className="
          font-display text-[clamp(2.5rem,6vw,5rem)]
          leading-none tracking-wide text-white mb-4
        ">
          START YOUR<br />FREE TRIAL
        </h2>
        <p className="section-sub">
          No commitment, no pressure. Try Pure Fitness Studio free
          and experience the difference expert coaching makes.
        </p>
      </motion.div>

      {/* ── Two Column Layout ──────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ══ LEFT — Contact Info ══════════════════════ */}
        <motion.div
          variants={infoVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-10"
        >
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.label}
                className="
                  flex gap-4 items-start
                  bg-[#141414] border border-[#333]
                  hover:border-accent
                  p-5 rounded-sm
                  transition-colors duration-300
                  group
                "
              >
                <div className="
                  w-10 h-10 bg-accent
                  flex items-center justify-center
                  flex-shrink-0 rounded-sm
                  group-hover:scale-110 transition-transform duration-300
                ">
                  <info.icon size={16} className="text-black" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-[#888] tracking-[2px] uppercase font-bold mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-white text-sm font-medium">
                    {info.value}
                  </div>
                  <div className="text-[#666] text-xs mt-0.5">
                    {info.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info bullets */}
          <div className="flex flex-col gap-5">
            {[
              {
                title: 'Free Health Assessment Included',
                desc:  'Every trial member gets a complimentary fitness assessment to design the most effective plan for your goals.',
              },
              {
                title: 'Trainer at Home Available',
                desc:  'Select Home Visit and our trainer comes to you — available across all three centre regions.',
              },
              {
                title: 'Flexible Membership Pricing',
                desc:  'All prices are negotiable. Contact us directly to find a plan that perfectly fits your budget.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="
                  w-1.5 h-1.5 rounded-full bg-accent
                  flex-shrink-0 mt-2
                " />
                <div>
                  <h4 className="font-heading font-bold text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#888] text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══ RIGHT — Booking Form ══════════════════════ */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="
            bg-[#141414] border border-[#333]
            p-8 rounded-sm
          ">
            <h3 className="font-heading font-bold text-white text-xl mb-1">
              Book Your Free Trial
            </h3>
            <p className="text-[#888] text-sm mb-7 font-light">
              Fill out the form and we'll confirm your slot within 2 hours.
            </p>

            {/* ── Success Message ──────────────────────── */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  flex items-center gap-3
                  bg-accent/10 border border-accent/30
                  text-accent p-4 rounded-sm mb-6
                "
              >
                <CheckCircle size={18} />
                <div>
                  <div className="font-bold text-sm">Booking Confirmed!</div>
                  <div className="text-xs opacity-80">
                    We'll contact you within 2 hours to confirm your slot.
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Error Message ────────────────────────── */}
            {status === 'error' && (
              <div className="
                bg-red-500/10 border border-red-500/30
                text-red-400 p-4 rounded-sm mb-6 text-sm
              ">
                Something went wrong. Please call us directly at +91 98765 43210.
              </div>
            )}

            {/* ── Form ─────────────────────────────────── */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Rahul"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Nair"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                  className={inputClass}
                />
              </div>

              {/* Program */}
              <div>
                <label className={labelClass}>Training Interest</label>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="" disabled>Select a program</option>
                  {PROGRAMS.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Centre + Time row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Preferred Centre</label>
                  <select
                    name="centre"
                    value={form.centre}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>Select centre</option>
                    {CENTRES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Time</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>Select time</option>
                    {TIMES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>
                  Health Conditions{' '}
                  <span className="text-[#555] normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="e.g. diabetes, knee pain, hypertension..."
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="
                  btn btn-primary w-full
                  disabled:opacity-60 disabled:cursor-not-allowed
                  mt-2
                "
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Book Free Trial →'
                )}
              </button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
````

## File: components/Features.jsx
````javascript
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
````

## File: components/Footer.jsx
````javascript
'use client'

/* Zero external icon imports — all inline SVGs below */

const FOOTER_LINKS = {
  Programs: [
    { label: 'Weight Loss',       href: '#training'    },
    { label: 'Weight Gain',       href: '#training'    },
    { label: 'Yoga Training',     href: '#training'    },
    { label: 'Aerobics',          href: '#training'    },
    { label: 'Zumba',             href: '#training'    },
    { label: 'Physiotherapy',     href: '#medical'     },
    { label: 'Bodybuilding',      href: '#training'    },
  ],
  Company: [
    { label: 'About Us',          href: '#about'       },
    { label: 'Our Trainers',      href: '#trainers'    },
    { label: 'Membership Plans',  href: '#membership'  },
    { label: 'Activities',        href: '#activities'  },
    { label: 'Medical Panel',     href: '#medical'     },
    { label: 'Health Assessment', href: '#assessment'  },
  ],
  Locations: [
    { label: 'Kayiliad Centre',         href: '#centres'  },
    { label: 'Vadanamkurissi Centre',   href: '#centres'  },
    { label: 'Kothakurissi Centre',     href: '#centres'  },
    { label: '+91 98765 43210',         href: 'tel:+919876543210' },
    { label: 'hello@purefitness.in',    href: 'mailto:hello@purefitness.in' },
    { label: 'Trainer at Home',         href: '#contact'  },
  ],
}

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
]

function scrollTo(href) {
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.open(href, '_blank')
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-[#333]">

      {/* CTA Strip */}
      <div className="bg-accent px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-black leading-none max-w-xl">
          READY TO TRANSFORM YOUR BODY AND MIND?
        </h2>
        <button
          onClick={() => scrollTo('#contact')}
          className="btn btn-dark flex-shrink-0"
        >
          Start Today — It's Free →
        </button>
      </div>

      {/* Main Footer */}
      <div className="px-8 md:px-16 pt-16 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-xl tracking-[3px] text-white hover:text-accent transition-colors duration-200 mb-4 block text-left"
            >
              PURE <span className="text-accent">FITNESS</span> STUDIO
            </button>
            <p className="text-[#888] text-sm font-light leading-relaxed mb-6 max-w-xs">
              Three state-of-the-art fitness centres across Kerala, dedicated to
              transforming lives through expert coaching and personalized plans.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#888] hover:text-accent hover:border-accent transition-all duration-200 rounded-sm"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-white text-[0.75rem] tracking-[2px] uppercase mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-[#888] hover:text-accent text-sm font-light transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#333] mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} Pure Fitness Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <button key={item} className="text-[#555] hover:text-accent text-xs transition-colors duration-200">
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
````

## File: components/Hero.jsx
````javascript
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
````

## File: components/Medical.jsx
````javascript
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
````

## File: components/Membership.jsx
````javascript
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
````

## File: components/Navbar.jsx
````javascript
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

/* ─── Navigation Links Data ────────────────────────────────────
   Keeping links in an array makes it easy to add/remove items.
   href uses hash (#) links to scroll to section IDs on the page.
──────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Training',   href: '#training'   },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers',   href: '#trainers'   },
  { label: 'Centres',    href: '#centres'    },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {

  /* ── scrolled: true when user scrolls past 80px
     We use this to increase nav opacity on scroll       */
  const [scrolled, setScrolled]   = useState(false)

  /* ── mobileOpen: controls the mobile menu drawer     */
  const [mobileOpen, setMobileOpen] = useState(false)

  /* ── Track scroll position ────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove the listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Smooth scroll to section ─────────────────────── */
  const scrollTo = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false) // close mobile menu after clicking
  }

  return (
    <>
      {/* ─── Desktop / Main Nav ──────────────────────────── */}
      <motion.nav
        // Fade in from top when page loads
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0,    opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}

        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-16 py-5
          transition-all duration-300
          ${scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-gray-4/50 py-4'
            : 'bg-black/80 backdrop-blur-sm'
          }
        `}
      >
        {/* ── Logo ───────────────────────────────────────── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl tracking-[3px] text-white hover:text-accent transition-colors duration-200"
        >
          PURE <span className="text-accent">FITNESS</span> STUDIO
        </button>

        {/* ── Desktop Links ──────────────────────────────── */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="
                  text-white/60 hover:text-accent
                  text-xs font-semibold tracking-[1.5px] uppercase
                  transition-colors duration-200
                  relative group
                "
              >
                {link.label}
                {/* Underline that slides in on hover */}
                <span className="
                  absolute -bottom-1 left-0 w-0 h-px bg-accent
                  transition-all duration-300 group-hover:w-full
                " />
              </button>
            </li>
          ))}
        </ul>

        {/* ── CTA Button (desktop) ───────────────────────── */}
        <button
          onClick={() => scrollTo('#contact')}
          className="
            hidden lg:block
            btn btn-primary
            text-[0.75rem] px-5 py-3
          "
        >
          Free Trial →
        </button>

        {/* ── Mobile Hamburger ───────────────────────────── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* ─── Mobile Menu Drawer ──────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            // Slide down from top
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}

            className="
              fixed top-[72px] left-0 right-0 z-40
              bg-gray-1 border-b border-gray-4
              flex flex-col
              lg:hidden
            "
          >
            {/* Mobile nav links */}
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                // Each link staggers in with a small delay
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: i * 0.05 }}

                onClick={() => scrollTo(link.href)}
                className="
                  text-left px-6 py-4
                  text-sm font-semibold tracking-[1.5px] uppercase
                  text-white/70 hover:text-accent hover:bg-gray-2
                  border-b border-gray-4/50
                  transition-colors duration-200
                "
              >
                {link.label}
              </motion.button>
            ))}

            {/* Mobile CTA */}
            <div className="p-5">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn btn-primary w-full"
              >
                Book Free Trial →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
````

## File: components/Testimonials.jsx
````javascript
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
````

## File: components/Trainers.jsx
````javascript
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
````

## File: components/Training.jsx
````javascript
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
````

## File: components/ui/badge.jsx
````javascript
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps({
      className: cn(badgeVariants({ variant }), className),
    }, props),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants }
````

## File: components/ui/button.jsx
````javascript
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
````

## File: components/ui/card.jsx
````javascript
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props} />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props} />
  );
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
````

## File: components/ui/dialog.jsx
````javascript
"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Dialog({
  ...props
}) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props} />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button variant="ghost" className="absolute top-2 right-2" size="icon-sm" />
            }>
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

function DialogHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}>
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

function DialogTitle({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("font-heading text-base leading-none font-medium", className)}
      {...props} />
  );
}

function DialogDescription({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props} />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
````

## File: components/ui/input.jsx
````javascript
import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props} />
  );
}

export { Input }
````

## File: components/ui/label.jsx
````javascript
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props} />
  );
}

export { Label }
````

## File: components/ui/select.jsx
````javascript
"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

const Select = SelectPrimitive.Root

function SelectGroup({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props} />
  );
}

function SelectValue({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left", className)}
      {...props} />
  );
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
        } />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50">
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            "relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}>
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props} />
  );
}

function SelectItem({
  className,
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}>
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span
            className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }>
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props} />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
````

## File: components/ui/sheet.jsx
````javascript
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({
  ...props
}) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props} />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}>
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button variant="ghost" className="absolute top-3 right-3" size="icon-sm" />
            }>
            <XIcon />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props} />
  );
}

function SheetFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props} />
  );
}

function SheetTitle({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-heading text-base font-medium text-foreground", className)}
      {...props} />
  );
}

function SheetDescription({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props} />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
````

## File: components/ui/textarea.jsx
````javascript
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props} />
  );
}

export { Textarea }
````

## File: jsconfig.json
````json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
````

## File: lib/utils.js
````javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
````

## File: next.config.mjs
````javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
````

## File: postcss.config.mjs
````javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
````

## File: app/globals.css
````css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── Brand Tokens ───────────────────────────────── */
:root {
  --black:        #0a0a0a;
  --white:        #f5f2ee;
  --accent:       #e8ff3e;
  --accent-hover: #d4eb2a;
  --gray-1:       #141414;
  --gray-2:       #1a1a1a;
  --gray-3:       #252525;
  --gray-4:       #333333;
  --gray-5:       #555555;
  --muted:        #888888;
  --font-display: 'Bebas Neue', cursive;
  --font-heading: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --section-py:   6rem;
  --section-px:   4rem;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
  --background: 0 0% 4%;
  --foreground: 0 0% 96%;
  --border: 0 0% 20%;
  --input: 0 0% 15%;
  --ring: 72 100% 62%;
  --radius: 0.25rem;
}

/* ── Base Reset ─────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  border-color: hsl(var(--border));
}
html { scroll-behavior: smooth; }
body {
  background-color: var(--black);
  color: var(--white);
  font-family: var(--font-body);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a   { color: inherit; text-decoration: none; }

/* ── Font Utilities ─────────────────────────────── */
.font-display { font-family: var(--font-display) !important; }
.font-heading { font-family: var(--font-heading) !important; }
.font-body    { font-family: var(--font-body) !important; }

/* ── Color Utilities ────────────────────────────── */
.text-accent   { color: #e8ff3e !important; }
.bg-accent     { background-color: #e8ff3e !important; }
.border-accent { border-color: #e8ff3e !important; }
.text-muted    { color: #888888; }

/* ── Typography ─────────────────────────────────── */
.section-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #e8ff3e;
  margin-bottom: 0.75rem;
}
.section-sub {
  font-size: 1rem;
  font-weight: 300;
  color: #888888;
  line-height: 1.75;
  max-width: 520px;
}

/* ── Buttons ────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2.2rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: all 250ms ease;
  white-space: nowrap;
  text-decoration: none;
}
.btn-primary { background: #e8ff3e; color: #0a0a0a; }
.btn-primary:hover { background: #f5f2ee; transform: translateY(-2px); }
.btn-outline { background: transparent; color: #f5f2ee; border: 1px solid rgba(245,242,238,0.35); }
.btn-outline:hover { border-color: #e8ff3e; color: #e8ff3e; }
.btn-dark { background: #0a0a0a; color: #e8ff3e; border: none; }
.btn-dark:hover { background: #252525; }

/* ── Shadow Utilities ───────────────────────────── */
.shadow-accent    { box-shadow: 0 0 40px rgba(232,255,62,0.15); }
.shadow-accent-md { box-shadow: 0 0 60px rgba(232,255,62,0.25); }

/* ── Ticker Animation ───────────────────────────── */
@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.animate-ticker { animation: ticker 25s linear infinite; }
.animate-ticker:hover { animation-play-state: paused; }

/* ── Grain overlay ──────────────────────────────── */
.grain-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
}

/* ── Scrollbar ──────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #141414; }
::-webkit-scrollbar-thumb { background: #333333; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #e8ff3e; }
::selection { background: #e8ff3e; color: #0a0a0a; }

/* ── Responsive ─────────────────────────────────── */
@media (max-width: 1024px) {
  :root { --section-py: 4rem; --section-px: 2rem; }
}
@media (max-width: 768px) {
  :root { --section-py: 3rem; --section-px: 1.25rem; }
}
````

## File: app/layout.js
````javascript
import { Bebas_Neue, Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Pure Fitness Studio — Transform Your Body, Elevate Your Life',
  description: "Kerala's premium fitness destination across Kayiliad, Vadanamkurissi & Kothakurissi.",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body
        style={{
          backgroundColor: '#0a0a0a',
          color: '#f5f2ee',
          fontFamily: 'var(--font-body)',
          overflowX: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {children}
      </body>
    </html>
  )
}
````

## File: app/page.js
````javascript
'use client'

import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Training     from '@/components/Training'
import Features     from '@/components/Features'
import Membership   from '@/components/Membership'
import Assessment   from '@/components/Assessment'
import Medical      from '@/components/Medical'
import Trainers     from '@/components/Trainers'
import Centres      from '@/components/Centres'
import Activities   from '@/components/Activities'
import Testimonials from '@/components/Testimonials'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Training />
      <Features />
      <Membership />
      <Assessment />
      <Medical />
      <Trainers />
      <Centres />
      <Activities />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black:   '#0a0a0a',
        white:   '#f5f2ee',
        accent:  '#e8ff3e',
        accent2: '#ff4d1c',
        gray: {
          1: '#141414',
          2: '#1a1a1a',
          3: '#252525',
          4: '#333333',
          5: '#555555',
        },
        muted: '#888888',
      },
      fontFamily: {
        display: ['var(--font-display)', 'cursive'],
        heading:  ['var(--font-heading)', 'sans-serif'],
        body:     ['var(--font-body)', 'sans-serif'],
        sans:     ['var(--font-body)', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      animation: {
        'ticker':     'ticker 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'shimmer':    'shimmer 2s linear infinite',
      },
      boxShadow: {
        'accent':    '0 0 30px rgba(232,255,62,0.15)',
        'accent-md': '0 0 50px rgba(232,255,62,0.25)',
      },
      brightness: {
        40: '.40',
        70: '.70',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
````

## File: package.json
````json
{
  "name": "pure-fitness-studio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@base-ui/react": "^1.4.1",
    "@emailjs/browser": "^4.4.1",
    "@hookform/resolvers": "^5.2.2",
    "axios": "^1.15.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.11.0",
    "next": "^16.2.4",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.74.0",
    "shadcn": "^4.5.0",
    "tailwind-merge": "^3.5.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "eslint": "^10.2.1",
    "eslint-config-next": "^16.2.4",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}
````
