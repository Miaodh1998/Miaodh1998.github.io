type Props = { lang: 'zh' | 'en' }

const items = {
  zh: [
    { title: '研究项目', href: '#research' },
    { title: '个人能力', href: '#/ability' },
    { title: '工作时间线', href: '#/timeline' },
    { title: '未来规划', href: '#/plan' },
  ],
  en: [
    { title: 'Research', href: '#research' },
    { title: 'Capabilities', href: '#/ability' },
    { title: 'Timeline', href: '#/timeline' },
    { title: 'Future Plans', href: '#/plan' },
  ],
}

export default function ColumnNav({ lang }: Props) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items[lang].map((c) => (
        <a
          key={c.href}
          href={c.href}
          className="group flex items-center justify-between rounded-xl bg-[#e7efe6] px-5 py-4 transition-colors hover:bg-[#dbe7d8]"
        >
          <span className="text-base font-bold text-[#1d5c38] sm:text-lg">{c.title}</span>
          <span className="text-[#1d5c38] transition-transform group-hover:translate-x-1">→</span>
        </a>
      ))}
    </div>
  )
}
