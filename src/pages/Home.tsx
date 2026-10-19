import { useEffect, useState } from 'react'
import Hero from '@/sections/Hero'
import Focus from '@/sections/Focus'
import Experience from '@/sections/Experience'
import Research from '@/sections/Research'
import Publications from '@/sections/Publications'
import Skills from '@/sections/Skills'
import Hobbies from '@/sections/Hobbies'
import Footer from '@/sections/Footer'
import Nav from '@/sections/Nav'
import HeroEn from '@/sections/en/HeroEn'
import FocusEn from '@/sections/en/FocusEn'
import ExperienceEn from '@/sections/en/ExperienceEn'
import ResearchEn from '@/sections/en/ResearchEn'
import PublicationsEn from '@/sections/en/PublicationsEn'
import SkillsEn from '@/sections/en/SkillsEn'
import HobbiesEn from '@/sections/en/HobbiesEn'
import FooterEn from '@/sections/en/FooterEn'
import Ability from '@/pages/Ability'
import Timeline from '@/pages/Timeline'
import Plan from '@/pages/Plan'

type Lang = 'zh' | 'en'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function Home() {
  const [lang, setLang] = useState<Lang>(() =>
    typeof localStorage !== 'undefined' && localStorage.getItem('lang') === 'en' ? 'en' : 'zh',
  )
  const hash = useHash()
  const sub = hash.startsWith('#/') ? hash.slice(2) : null

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = lang === 'zh' ? '缪东昊 · 个人学术主页' : 'Miao Donghao · Academic Homepage'
  }, [lang])

  useEffect(() => {
    if (sub) {
      window.scrollTo(0, 0)
    } else if (hash && hash.length > 1) {
      const el = document.getElementById(hash.slice(1))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
    }
  }, [hash, sub])

  const toggle = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'))

  let subPage: React.ReactNode = null
  if (sub === 'ability') subPage = <Ability lang={lang} />
  else if (sub === 'timeline') subPage = <Timeline lang={lang} />
  else if (sub === 'plan') subPage = <Plan lang={lang} />

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#1a1f1c] antialiased">
      <Nav lang={lang} onToggle={toggle} />
      {subPage ? (
        <main className="mx-auto max-w-5xl px-6">{subPage}</main>
      ) : lang === 'zh' ? (
        <main className="mx-auto max-w-5xl px-6">
          <Hero />
          <Focus />
          <Experience />
          <Research />
          <Publications />
          <Skills />
          <Hobbies />
        </main>
      ) : (
        <main className="mx-auto max-w-5xl px-6">
          <HeroEn />
          <FocusEn />
          <ExperienceEn />
          <ResearchEn />
          <PublicationsEn />
          <SkillsEn />
          <HobbiesEn />
        </main>
      )}
      {lang === 'zh' ? <Footer /> : <FooterEn />}
    </div>
  )
}
