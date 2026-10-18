import SubShell from './SubShell'

type Props = { lang: 'zh' | 'en' }

const content = {
  zh: {
    kicker: 'Timeline',
    headline: '从材料科学，一路做到真空镀膜设备',
    sub: '十年一条线：材料入门 → 器件研究 → 工艺放大 → 设备装调，节奏在加快',
    bar: [
      { label: '南科大 · 本科', years: '2016 – 2020', width: '38%', color: '#c9d8c8' },
      { label: '上科大 · 博士', years: '2020 – 2025', width: '46%', color: '#8fb08d' },
      { label: '复旦 · 博后', years: '2025 – 今', width: '16%', color: '#1d5c38' },
    ],
    stages: [
      {
        period: '2016.09 – 2020.07',
        title: '南方科技大学 · 材料科学与工程（本科）',
        desc: '金属材料与纳米材料入门，首次系统接触 SEM 与材料表征；全国大学生创新创业项目优秀结题。',
        metric: '起点',
        metricLabel: '第一次系统接触材料表征',
      },
      {
        period: '2019.07 – 2019.09',
        title: '贝特瑞新材料集团 · 实习工程师',
        desc: '工业界初体验：精密仪器操作与 SOP 规范——有规必依，依规必严。',
        metric: 'SOP',
        metricLabel: '工业界规范意识建立',
      },
      {
        period: '2020.09 – 2025.07',
        title: '上海科技大学 · 博士（硕博连读）',
        desc: '钙钛矿光伏器件与真空薄膜工艺研究，覆盖材料合成、单晶生长到器件制备的完整链条。',
        metric: '16%',
        metricLabel: '锡基钙钛矿认证效率（当时世界纪录）',
      },
      {
        period: '2025.09 – 至今',
        title: '复旦大学 光电研究院 · 博士后',
        desc: '叠层器件与新型半导体材料研究；参与国家重点实验室大型真空镀膜系统的安装、调试与运维。',
        metric: '34%',
        metricLabel: '钙钛矿-晶硅叠层认证效率',
      },
    ],
    note: '这页只讲一件事：每一段都在向设备靠近——从用设备做材料，到搭设备做器件，再到装调设备本身。',
  },
  en: {
    kicker: 'Timeline',
    headline: 'From materials science to vacuum coating equipment',
    sub: 'One line over ten years: materials → devices → process scale-up → equipment commissioning, accelerating',
    bar: [
      { label: 'SUSTech · B.Sc.', years: '2016 – 2020', width: '38%', color: '#c9d8c8' },
      { label: 'ShanghaiTech · Ph.D.', years: '2020 – 2025', width: '46%', color: '#8fb08d' },
      { label: 'Fudan · Postdoc', years: '2025 – now', width: '16%', color: '#1d5c38' },
    ],
    stages: [
      {
        period: '2016.09 – 2020.07',
        title: 'SUSTech · Materials Science & Engineering (B.Sc.)',
        desc: 'First systematic training in metallic/nano materials and SEM characterization; national undergraduate innovation project concluded with excellence.',
        metric: 'Start',
        metricLabel: 'first systematic characterization training',
      },
      {
        period: '2019.07 – 2019.09',
        title: 'BTR New Material Group · Intern Engineer',
        desc: 'First taste of industry: precision instruments and strict SOP discipline.',
        metric: 'SOP',
        metricLabel: 'industrial discipline established',
      },
      {
        period: '2020.09 – 2025.07',
        title: 'ShanghaiTech University · Ph.D.',
        desc: 'Perovskite photovoltaics and vacuum thin-film processing, spanning materials synthesis, single-crystal growth and device fabrication.',
        metric: '16%',
        metricLabel: 'certified Sn-based cells (world record then)',
      },
      {
        period: '2025.09 – Present',
        title: 'Fudan University, Institute of Optoelectronics · Postdoc',
        desc: 'Tandem devices and novel semiconductor materials; installing, commissioning and operating large vacuum coating systems at the State Key Laboratory.',
        metric: '34%',
        metricLabel: 'certified perovskite–Si tandem efficiency',
      },
    ],
    note: 'This page makes one point: every stage moves closer to the equipment itself — from using tools on materials, to building setups for devices, to commissioning the tools themselves.',
  },
}

export default function Timeline({ lang }: Props) {
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

      {/* proportional duration bar */}
      <div className="mb-12">
        <div className="flex h-14 w-full overflow-hidden rounded-xl border border-[#e3e6e0]">
          {c.bar.map((b) => (
            <div
              key={b.label}
              className="flex flex-col justify-center px-3"
              style={{ width: b.width, backgroundColor: b.color }}
            >
              <span className="truncate text-xs font-semibold text-white drop-shadow-sm sm:text-sm">{b.label}</span>
              <span className="truncate font-mono text-[10px] text-white/90">{b.years}</span>
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[#9aa89e]">
          <span>2016</span>
          <span>2020</span>
          <span>2025</span>
          <span>2026</span>
        </div>
      </div>

      <div className="relative ml-2 border-l-2 border-[#dfe4dc] pl-8">
        {c.stages.map((n) => (
          <div key={n.period} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-[#fafaf7] bg-[#1d5c38]" />
            <p className="font-mono text-xs tracking-wider text-[#6b7a70]">{n.period}</p>
            <h3 className="mt-1.5 text-lg font-semibold text-[#14201a]">{n.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#3a4a40]">{n.desc}</p>
            <div className="mt-3">
              <span className="text-xl font-bold text-[#1d5c38]">{n.metric}</span>
              <span className="ml-2 text-xs text-[#6b7a70]">{n.metricLabel}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs leading-6 text-[#9aa89e]">{c.note}</p>
    </SubShell>
  )
}
