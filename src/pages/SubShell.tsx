type Lang = 'zh' | 'en'

export type SubKey = 'ability' | 'timeline' | 'plan'

const pages: { key: SubKey; zh: string; en: string }[] = [
  { key: 'ability', zh: '个人能力', en: 'Capabilities' },
  { key: 'timeline', zh: '工作时间线', en: 'Timeline' },
  { key: 'plan', zh: '未来规划', en: 'Future Plans' },
]

type Props = { lang: Lang; current: SubKey; children: React.ReactNode }

export default function SubShell({ lang, current, children }: Props) {
  const idx = pages.findIndex((p) => p.key === current)
  const prev = idx > 0 ? pages[idx - 1] : null
  const next = idx < pages.length - 1 ? pages[idx + 1] : null
  const home = lang === 'zh' ? '主页' : 'Home'

  return (
    <div className="pb-10 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav className="text-sm text-[#6b7a70]">
          <a href="#top" className="transition-colors hover:text-[#1d5c38]">
            {home}
          </a>
          <span className="mx-2 text-[#c3cdc4]">/</span>
          <span className="text-[#14201a]">{pages[idx][lang]}</span>
        </nav>
        <div className="flex w-full gap-1 rounded-xl bg-[#eef1ea] p-1 sm:w-auto">
          {pages.map((p) => (
            <a
              key={p.key}
              href={`#/${p.key}`}
              className={
                'flex-1 whitespace-nowrap rounded-lg px-3 py-1.5 text-center text-xs transition-colors sm:flex-none sm:px-4 sm:text-sm ' +
                (p.key === current
                  ? 'bg-white font-semibold text-[#14201a] shadow-sm'
                  : 'text-[#4a5a50] hover:text-[#1d5c38]')
              }
            >
              {p[lang]}
            </a>
          ))}
        </div>
      </div>

      {children}

      <div className="mt-20 grid gap-4 border-t border-[#e3e6e0] pt-8 sm:grid-cols-2">
        <PagerLink
          href={prev ? `#/${prev.key}` : '#top'}
          hint={lang === 'zh' ? '← 上一页' : '← Previous'}
          title={prev ? prev[lang] : home}
        />
        <PagerLink
          href={next ? `#/${next.key}` : '#top'}
          hint={lang === 'zh' ? '下一页 →' : 'Next →'}
          title={next ? next[lang] : lang === 'zh' ? '回到主页' : 'Back to homepage'}
          alignRight
        />
      </div>
    </div>
  )
}

function PagerLink({ href, hint, title, alignRight }: { href: string; hint: string; title: string; alignRight?: boolean }) {
  return (
    <a
      href={href}
      className={
        'group rounded-xl border border-[#e3e6e0] bg-white px-5 py-4 transition-colors hover:border-[#1d5c38] ' +
        (alignRight ? 'sm:text-right' : '')
      }
    >
      <p className="font-mono text-[11px] tracking-wider text-[#9aa89e]">{hint}</p>
      <p className="mt-1 text-base font-semibold text-[#14201a] group-hover:text-[#1d5c38]">{title}</p>
    </a>
  )
}

export function PageHeader({ index, kicker, title, lead }: { index: string; kicker: string; title: string; lead: string }) {
  return (
    <header className="mb-16 mt-14">
      <p className="mb-3 font-mono text-xs tracking-widest text-[#6b7a70]">
        {index} / {kicker}
      </p>
      <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#14201a] sm:text-[44px] sm:leading-[1.2]">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#3a4a40]">{lead}</p>
    </header>
  )
}

export function Block({
  label,
  title,
  desc,
  children,
}: {
  label: string
  title: string
  desc?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-20 first:mt-0">
      <p className="mb-2 font-mono text-[11px] tracking-widest text-[#9aa89e]">{label}</p>
      <h2 className="text-xl font-bold text-[#14201a] sm:text-2xl">{title}</h2>
      {desc && <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6b7a70]">{desc}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}
