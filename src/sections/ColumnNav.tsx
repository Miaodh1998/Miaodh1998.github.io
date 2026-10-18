type Props = { lang: 'zh' | 'en' }

const items = {
  zh: [
    { title: '研究项目', desc: '五大方向与代表成果', href: '#research' },
    { title: '个人能力', desc: '面向半导体设备行业', href: '#/ability' },
    { title: '工作时间线', desc: '2016 至今 · 关键节点', href: '#/timeline' },
    { title: '未来规划', desc: '职业方向与目标', href: '#/plan' },
  ],
  en: [
    { title: 'Research', desc: 'Five thrusts & key results', href: '#research' },
    { title: 'Capabilities', desc: 'For the semiconductor equipment industry', href: '#/ability' },
    { title: 'Timeline', desc: 'Milestones since 2016', href: '#/timeline' },
    { title: 'Future Plans', desc: 'Career direction & goals', href: '#/plan' },
  ],
}

export default function ColumnNav({ lang }: Props) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items[lang].map((c) => (
        <a
          key={c.href}
          href={c.href}
          className="group rounded-xl border border-[#e3e6e0] bg-white p-4 transition-colors hover:border-[#1d5c38]"
        >
          <p className="flex items-center justify-between text-sm font-semibold text-[#14201a] group-hover:text-[#1d5c38]">
            {c.title}
            <span className="text-[#9aa89e] transition-transform group-hover:translate-x-0.5">→</span>
          </p>
          <p className="mt-1 text-xs leading-5 text-[#6b7a70]">{c.desc}</p>
        </a>
      ))}
    </div>
  )
}
