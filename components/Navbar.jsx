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