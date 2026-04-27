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
