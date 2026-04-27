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