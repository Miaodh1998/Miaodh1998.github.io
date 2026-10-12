import Hero from '@/sections/Hero'
import Focus from '@/sections/Focus'
import Experience from '@/sections/Experience'
import Research from '@/sections/Research'
import Publications from '@/sections/Publications'
import Skills from '@/sections/Skills'
import Footer from '@/sections/Footer'
import Nav from '@/sections/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#1a1f1c] antialiased">
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Focus />
        <Experience />
        <Research />
        <Publications />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
