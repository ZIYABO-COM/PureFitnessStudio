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