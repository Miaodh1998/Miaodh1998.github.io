import SubShell, { SubHeading } from './SubShell'

type Props = { lang: 'zh' | 'en' }

type Node = { period: string; title: string; desc: string; milestone?: boolean }

const content: { zh: { title: string; nodes: Node[] }; en: { title: string; nodes: Node[] } } = {
  zh: {
    title: '工作时间线',
    nodes: [
      {
        period: '2016.09 – 2020.07',
        title: '南方科技大学 · 材料科学与工程（本科）',
        desc: '金属材料与纳米材料入门，首次系统接触 SEM 与材料表征；全国大学生创新创业项目优秀结题。',
      },
      {
        period: '2019.07 – 2019.09',
        title: '贝特瑞新材料集团 · 实习工程师',
        desc: '工业界初体验：精密仪器操作与 SOP 规范——有规必依，依规必严。',
      },
      {
        period: '2020.09 – 2025.07',
        title: '上海科技大学 · 博士（硕博连读）',
        desc: '钙钛矿光伏器件与真空薄膜工艺研究；锡基钙钛矿 16% 认证效率（当时世界纪录）；Advanced Science 一作。',
        milestone: true,
      },
      {
        period: '2025.09 – 至今',
        title: '复旦大学 光电研究院 · 博士后',
        desc: '认证效率 34% 钙钛矿-晶硅叠层电池；参与国家光伏科学与技术重点实验室大型真空镀膜系统建设与运维。',
        milestone: true,
      },
    ],
  },
  en: {
    title: 'Work Timeline',
    nodes: [
      {
        period: '2016.09 – 2020.07',
        title: 'SUSTech · Materials Science & Engineering (B.Sc.)',
        desc: 'First systematic training in metallic/nano materials and SEM characterization; national undergraduate innovation project concluded with excellence.',
      },
      {
        period: '2019.07 – 2019.09',
        title: 'BTR New Material Group · Intern Engineer',
        desc: 'First taste of industry: precision instruments and strict SOP discipline.',
      },
      {
        period: '2020.09 – 2025.07',
        title: 'ShanghaiTech University · Ph.D.',
        desc: 'Perovskite photovoltaics and vacuum thin-film processing; 16% certified Sn-based perovskite cells (world record at the time); first-author paper in Advanced Science.',
        milestone: true,
      },
      {
        period: '2025.09 – Present',
        title: 'Fudan University, Institute of Optoelectronics · Postdoc',
        desc: 'Certified 34% perovskite–Si tandem cells; building and operating large vacuum coating systems at the State Key Laboratory of Photovoltaic Science and Technology.',
        milestone: true,
      },
    ],
  },
}

export default function Timeline({ lang }: Props) {
  const c = content[lang]
  return (
    <SubShell lang={lang}>
      <SubHeading label="Timeline" title={c.title} />
      <div className="relative ml-2 border-l-2 border-[#dfe4dc] pl-8">
        {c.nodes.map((n) => (
          <div key={n.period} className="relative pb-12 last:pb-0">
            <span
              className={`absolute -left-[41px] top-1 rounded-full border-2 border-[#fafaf7] ${
                n.milestone ? 'h-4 w-4 bg-[#1d5c38]' : 'h-3 w-3 bg-[#9aa89e]'
              }`}
            />
            <p className="font-mono text-xs tracking-wider text-[#6b7a70]">{n.period}</p>
            <h3 className="mt-1.5 text-lg font-semibold text-[#14201a]">{n.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#3a4a40]">{n.desc}</p>
          </div>
        ))}
      </div>
    </SubShell>
  )
}
