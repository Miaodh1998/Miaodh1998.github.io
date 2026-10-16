type Props = {
  lang: 'zh' | 'en'
  onToggle: () => void
}

const zhLinks = [
  { href: '#focus', label: '研究主线' },
  { href: '#experience', label: '经历' },
  { href: '#research', label: '研究项目' },
  { href: '#publications', label: '论文专利' },
  { href: '#skills', label: '技能' },
  { href: '#hobbies', label: '爱好' },
  { href: '#contact', label: '联系' },
]

const enLinks = [
  { href: '#focus', label: 'Focus' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#skills', label: 'Skills' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ lang, onToggle }: Props) {
  const links = lang === 'zh' ? zhLinks : enLinks
  return (
    <header className="sticky top-0 z-50 border-b border-[#e3e6e0] bg-[#fafaf7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-sm font-bold tracking-wide text-[#14201a]">
          {lang === 'zh' ? (
            <>
              缪东昊 <span className="ml-1 font-normal text-[#6b7a70]">Miao Donghao</span>
            </>
          ) : (
            <>
              Miao Donghao <span className="ml-1 font-normal text-[#6b7a70]">缪东昊</span>
            </>
          )}
        </a>
        <div className="flex items-center gap-5">
          <nav className="hidden gap-5 sm:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-xs text-[#4a5a50] transition-colors hover:text-[#1d5c38]">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={onToggle}
            className="rounded-full border border-[#d8ddd4] bg-white px-3 py-1 text-xs font-medium text-[#4a5a50] transition-colors hover:border-[#1d5c38] hover:text-[#1d5c38]"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
    </header>
  )
}
