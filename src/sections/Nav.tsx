const links = [
  { href: '#focus', label: '研究主线' },
  { href: '#experience', label: '经历' },
  { href: '#research', label: '研究项目' },
  { href: '#publications', label: '论文专利' },
  { href: '#skills', label: '技能' },
  { href: '#contact', label: '联系' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e3e6e0] bg-[#fafaf7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-sm font-bold tracking-wide text-[#14201a]">
          缪东昊 <span className="ml-1 font-normal text-[#6b7a70]">Donghao Miao</span>
        </a>
        <nav className="hidden gap-5 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-[#4a5a50] transition-colors hover:text-[#1d5c38]">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
