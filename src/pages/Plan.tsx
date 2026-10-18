import SubShell from './SubShell'

type Props = { lang: 'zh' | 'en' }

const content = {
  zh: {
    kicker: 'Plans',
    headline: '下一站：半导体设备',
    sub: '把科研里练出的工艺与设备能力，带到量产一线',
    direction: '目标方向：半导体设备厂商（工艺 / 设备 / 研发岗位）',
    stages: [
      {
        stage: '短期 · 0–2 年',
        title: '深入量产一线',
        body: '加入半导体设备厂商，深入量产现场，系统掌握主流设备的工艺整合与 troubleshooting，完成从科研思维到工程思维的转换。',
      },
      {
        stage: '中期 · 3–5 年',
        title: '独当一面',
        body: '主导新设备导入或新工艺开发项目，沉淀可复制的调试与优化方法论，成为团队里「叫得应、靠得住」的那个人。',
      },
      {
        stage: '长期 · 5 年以上',
        title: '技术专家 / 技术管理',
        body: '向技术专家或技术管理方向发展，推动国产设备与新材料、新工艺的结合创新。',
      },
    ],
    matchTitle: '为什么是设备行业',
    match:
      '钙钛矿光伏与真空镀膜的交叉背景，让我既理解工艺端的真实需求，也熟悉设备端的运行逻辑；从实验室克级小面积到 200 cm² 以上大面积组件的放大经验，正是设备行业最看重的工程化能力。',
    note: '规划会随着对行业的理解持续修正；唯一不变的是方向：离设备和工艺越近越好。',
  },
  en: {
    kicker: 'Plans',
    headline: 'Next stop: semiconductor equipment',
    sub: 'Bring the process and equipment skills built in research to the production line',
    direction: 'Target: semiconductor equipment companies (process / equipment / R&D roles)',
    stages: [
      {
        stage: 'Short term · 0–2 years',
        title: 'Into the production line',
        body: 'Join a semiconductor equipment company, work close to mass production, master process integration and troubleshooting on mainstream tools — shifting from a research mindset to an engineering one.',
      },
      {
        stage: 'Mid term · 3–5 years',
        title: 'Independent ownership',
        body: 'Lead new-tool introduction or new-process development projects; distill repeatable commissioning and optimization methodology; become the go-to person on the team.',
      },
      {
        stage: 'Long term · 5+ years',
        title: 'Technical expert / leadership',
        body: 'Grow toward a technical expert or technical management track, driving innovation where domestic equipment meets new materials and new processes.',
      },
    ],
    matchTitle: 'Why the equipment industry',
    match:
      'A cross-disciplinary background in perovskite photovoltaics and vacuum coating means I understand both the real needs of the process side and the operating logic of the equipment side. Scaling from gram-scale lab devices to >200 cm² modules is exactly the engineering capability this industry values most.',
    note: 'Plans will be revised as my understanding of the industry deepens; the constant is the direction — stay as close to tools and processes as possible.',
  },
}

export default function Plan({ lang }: Props) {
  const c = content[lang]
  return (
    <SubShell lang={lang}>
      <div className="mb-10">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#6b7a70]">{c.kicker}</p>
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-[#14201a] sm:text-4xl">
          {c.headline}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3a4a40]">{c.sub}</p>
      </div>

      <p className="mb-10 inline-block rounded-lg bg-[#e7efe6] px-4 py-2 text-sm font-medium text-[#1d5c38]">
        {c.direction}
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {c.stages.map((s, i) => (
          <div key={s.stage} className="relative rounded-xl border border-[#e3e6e0] bg-white p-5">
            <p className="font-mono text-xs tracking-wider text-[#6b7a70]">{s.stage}</p>
            <h3 className="mt-2 text-base font-semibold text-[#14201a]">{s.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#3a4a40]">{s.body}</p>
            {i < c.stages.length - 1 && (
              <span className="absolute -right-3.5 top-1/2 hidden -translate-y-1/2 text-lg text-[#9aa89e] sm:block">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border-l-4 border-[#1d5c38] bg-white p-5">
        <h3 className="mb-2 text-base font-semibold text-[#1d5c38]">{c.matchTitle}</h3>
        <p className="text-sm leading-7 text-[#3a4a40]">{c.match}</p>
      </div>

      <p className="mt-10 text-xs leading-6 text-[#9aa89e]">{c.note}</p>
    </SubShell>
  )
}
