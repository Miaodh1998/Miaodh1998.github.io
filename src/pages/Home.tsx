import { useEffect, useState } from 'react'
import Hero from '@/sections/Hero'
import Focus from '@/sections/Focus'
import Experience from '@/sections/Experience'
import Research from '@/sections/Research'
import Publications from '@/sections/Publications'
import Skills from '@/sections/Skills'
import Footer from '@/sections/Footer'
import Nav from '@/sections/Nav'
import HeroEn from '@/sections/en/HeroEn'
import FocusEn from '@/sections/en/FocusEn'
import ExperienceEn from '@/sections/en/ExperienceEn'
import ResearchEn from '@/sections/en/ResearchEn'
import PublicationsEn from '@/sections/en/PublicationsEn'
import SkillsEn from '@/sections/en/SkillsEn'
import FooterEn from '@/sections/en/FooterEn'

type Lang = 'zh' | 'en'

export default function Home() {
  const [lang, setLang] = useState<Lang>(() =>
    typeof localStorage !== 'undefined' && localStorage.getItem('lang') === 'en' ? 'en' : 'zh',
  )

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = lang === 'zh' ? '缪东昊 · 个人学术主页' : 'Miao Donghao · Academic Homepage'
  }, [lang])

  const toggle = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'))

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#1a1f1c] antialiased">
      <Nav lang={lang} onToggle={toggle} />
      {lang === 'zh' ? (
        <>
          <main className="mx-auto max-w-3xl px-6">
            <Hero />
            <Focus />
            <Experience />
            <Research />
            <Publications />
            <Skills />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <main className="mx-auto max-w-3xl px-6">
            <HeroEn />
            <FocusEn />
            <ExperienceEn />
            <ResearchEn />
            <PublicationsEn />
            <SkillsEn />
          </main>
          <FooterEn />
        </>
      )}
    </div>
  )
}
