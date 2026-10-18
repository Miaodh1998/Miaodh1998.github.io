import SubShell, { SubHeading } from './SubShell'

type Props = { lang: 'zh' | 'en' }

const content = {
  zh: {
    title: '未来规划',
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
        body: '成为独当一面的工艺 / 设备工程师，主导新设备导入或新工艺开发项目，沉淀可复制的调试与优化方法论。',
      },
      {
        stage: '长期 · 5 年以上',
        title: '技术专家 / 技术管理',
        body: '向技术专家或技术管理方向发展，推动国产设备与新材料、新工艺的结合创新。',
      },
    ],
    matchTitle: '我的匹配优势',
    match:
      '钙钛矿光伏与真空镀膜的交叉背景，让我既理解工艺端的真实需求，也熟悉设备端的运行逻辑；从实验室克级小面积到 200 cm² 以上大面积组件的放大经验，正是设备行业最看重的工程化能力。',
  },
  en: {
    title: 'Future Plans',
    direction: 'Target: semiconductor equipment companies (process / equipment / R&D roles)',
    stages: [
      {
        stage: 'Short term · 0–2 years',
        title: 'Into the production line',
        body: 'Join a semiconductor equipment company and work close to mass production — mastering process integration and troubleshooting on mainstream tools, and shifting from a research mindset to an engineering mindset.',
      },
      {
        stage: 'Mid term · 3–5 years',
        title: 'Independent ownership',
        body: 'Become an independent process / equipment engineer, leading new-tool introduction or new-process development projects, and distilling repeatable commissioning and optimization methodology.',
      },
      {
        stage: 'Long term · 5+ years',
        title: 'Technical expert / leadership',
        body: 'Grow toward a technical expert or technical management track, driving innovation at the intersection of domestic equipment, new materials and new processes.',
      },
    ],
    matchTitle: 'Why I fit',
    match:
      'A cross-disciplinary background in perovskite photovoltaics and vacuum coating means I understand both the real needs of the process side and the operating logic of the equipment side. Scaling from gram-scale lab devices to >200 cm² modules is exactly the engineering capability the equipment industry values most.',
  },
}

export default function Plan({ lang }: Props) {
  const c = content[lang]
  return (
    <SubShell lang={lang}>
      <SubHeading label="Plans" title={c.title} />
      <p className="mb-10 inline-block rounded-lg bg-[#e7efe6] px-4 py-2 text-sm font-medium text-[#1d5c38]">
        {c.direction}
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {c.stages.map((s) => (
          <div key={s.stage} className="rounded-xl border border-[#e3e6e0] bg-white p-5">
            <p className="font-mono text-xs tracking-wider text-[#6b7a70]">{s.stage}</p>
            <h3 className="mt-2 text-base font-semibold text-[#14201a]">{s.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#3a4a40]">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-[#e3e6e0] bg-white p-5">
        <h3 className="mb-2 text-base font-semibold text-[#1d5c38]">{c.matchTitle}</h3>
        <p className="text-sm leading-7 text-[#3a4a40]">{c.match}</p>
      </div>
    </SubShell>
  )
}
