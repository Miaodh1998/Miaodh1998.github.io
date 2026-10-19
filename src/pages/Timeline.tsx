import SubShell, { PageHeader, Block } from './SubShell'

type Props = { lang: 'zh' | 'en' }

type Kind = 'milestone' | 'paper' | 'talk' | 'award'

// t：用于概览图定位的小数年份；未知月份取年中
type Event = { t: number; date: string; kind: Kind; text: string }

type Phase = {
  period: string
  org: string
  role: string
  theme: string
  highlights: string[]
  from: number
  to: number
  short: string
  events: Event[]
}

const START = 2016
const END = 2027
const pct = (t: number) => ((t - START) / (END - START)) * 100

const kindStyle: Record<Kind, { dot: string; tag: string }> = {
  milestone: { dot: '#1d5c38', tag: 'bg-[#1d5c38] text-white' },
  paper: { dot: '#5f9a70', tag: 'bg-[#e7efe6] text-[#1d5c38]' },
  talk: { dot: '#4a6fa5', tag: 'bg-[#e8eef7] text-[#2f4f7f]' },
  award: { dot: '#c08a2e', tag: 'bg-[#f7efdf] text-[#7a5310]' },
}

const content = {
  zh: {
    kicker: 'Timeline',
    title: '十年，从材料到器件，再到设备',
    lead: '把身份变化、论文、会议和荣誉放在同一条时间轴上。越往后，节奏越密，工作也越靠近设备本身。',
    kinds: { milestone: '经历', paper: '论文 · 专利', talk: '会议 · 报告', award: '荣誉' } as Record<Kind, string>,
    overviewLabel: '01 · Overview',
    overviewTitle: '全景',
    overviewDesc: '横轴为年份，色块为阶段，圆点为当年的产出。悬停圆点可查看详情。',
    lanes: ['paper', 'talk', 'award'] as Kind[],
    detailLabel: '02 · By year',
    detailTitle: '逐年展开',
    phaseWord: '阶段',
    phases: [
      {
        period: '2016 – 2020',
        org: '南方科技大学 · 材料科学与工程',
        role: '学士',
        short: '南科大 · 本科',
        theme: '材料入门：金属与纳米材料，第一次系统使用 SEM，第一次走进工业界。',
        highlights: ['大创项目省级立项 · 优秀结题', '足球校赛冠军 ×2'],
        from: 2016.67,
        to: 2020.5,
        events: [
          { t: 2016.67, date: '2016.09', kind: 'milestone', text: '进入南方科技大学材料科学与工程系' },
          { t: 2016.8, date: '2016', kind: 'award', text: '新生奖学金' },
          { t: 2019.5, date: '2019.07', kind: 'milestone', text: '贝特瑞新材料集团分析测试中心实习：正负极材料分析与 SEM 形貌观测' },
          { t: 2020.5, date: '2020.07', kind: 'milestone', text: '本科毕业；在南科大人文社科中心任科研助理，参与文物整理与展览' },
        ],
      },
      {
        period: '2020 – 2025',
        org: '上海科技大学 · 材料科学与工程',
        role: '博士（硕博连读）',
        short: '上科大 · 博士',
        theme: '器件研究：从单晶生长、锡基钙钛矿到全钙叠层，建立完整的材料—工艺—器件链条。',
        highlights: ['锡基 16% 认证（当时世界纪录）', '全钙叠层 29% 认证', '研究生学业奖学金 ×5'],
        from: 2020.67,
        to: 2025.5,
        events: [
          { t: 2020.67, date: '2020.09', kind: 'milestone', text: '保送上海科技大学，硕博连读' },
          { t: 2021.4, date: '2021', kind: 'paper', text: 'Nat. Commun. 2021 · 钙钛矿单晶材料（共同作者）' },
          { t: 2021.5, date: '2021', kind: 'award', text: '上科大创新创业大赛一等奖（单晶生长项目）' },
          { t: 2021.55, date: '2021', kind: 'talk', text: '第三届上科大创新创业峰会 · 报告' },
          { t: 2021.67, date: '2021.09', kind: 'milestone', text: '《实验室安全与科研诚信》课程助教' },
          { t: 2022.5, date: '2022', kind: 'paper', text: '发明专利 CN116727668A · 抗菌钛合金（本科阶段工作）' },
          { t: 2024.3, date: '2024', kind: 'paper', text: 'ACS Energy Lett. 2024 · 界面偶极提升锡基电池开压' },
          { t: 2024.9, date: '2024', kind: 'talk', text: 'MRS Fall Meeting（美国波士顿）· Poster' },
          { t: 2025.1, date: '2025', kind: 'paper', text: 'Adv. Sci. 2025 · 锡铅混合钙钛矿取向结晶（第一作者）' },
          { t: 2025.4, date: '2025', kind: 'paper', text: 'ACS AMI 2025 · 锡基电池传输层均匀化（共同一作）' },
          { t: 2025.45, date: '2025', kind: 'talk', text: '第十八届 SNEC 国际光伏与智慧能源大会 · 上海' },
          { t: 2025.5, date: '2025.07', kind: 'milestone', text: '博士毕业' },
        ],
      },
      {
        period: '2025 – 至今',
        org: '复旦大学 · 光电研究院',
        role: '博士后',
        short: '复旦 · 博后',
        theme: '走向设备：钙硅叠层与大面积组件，参与国家重点实验室大型真空镀膜系统的装调与运维。',
        highlights: ['钙硅叠层 34% 认证', '>200 cm² 组件 29% 认证', '子项目组长 · 4 人团队'],
        from: 2025.67,
        to: 2026.8,
        events: [
          { t: 2025.67, date: '2025.09', kind: 'milestone', text: '加入复旦大学光电研究院，任博士后' },
          { t: 2026.2, date: '2026', kind: 'paper', text: 'Adv. Mater. 2026 · 钙硅叠层非晶非对称空穴接触（共同作者）' },
          { t: 2026.45, date: '2026', kind: 'talk', text: '第十九届 SNEC 国际光伏与智慧能源大会 · 上海' },
          { t: 2026.55, date: '2026', kind: 'talk', text: '第十二届钙钛矿材料与器件青年学者论坛 · 青岛' },
          { t: 2026.6, date: '2026', kind: 'milestone', text: '申报第 80 批中国博士后科学基金面上资助' },
        ],
      },
    ] as Phase[],
    note: '在投论文（Nature Energy、Advanced Materials、Angew. Chem.）未列入时间轴。',
  },
  en: {
    kicker: 'Timeline',
    title: 'Ten years: from materials, to devices, to equipment',
    lead: 'Roles, papers, talks and awards on a single time axis. The later it gets, the denser the pace — and the closer the work moves to the tools themselves.',
    kinds: { milestone: 'Milestone', paper: 'Paper · Patent', talk: 'Talk', award: 'Award' } as Record<Kind, string>,
    overviewLabel: '01 · Overview',
    overviewTitle: 'At a glance',
    overviewDesc: 'Years run left to right, bands are phases, dots are outputs. Hover a dot for details.',
    lanes: ['paper', 'talk', 'award'] as Kind[],
    detailLabel: '02 · By year',
    detailTitle: 'Year by year',
    phaseWord: 'Phase',
    phases: [
      {
        period: '2016 – 2020',
        org: 'SUSTech · Materials Science & Engineering',
        role: 'B.Sc.',
        short: 'SUSTech · B.Sc.',
        theme: 'Getting into materials: metallic and nano materials, first systematic SEM work, first taste of industry.',
        highlights: ['Provincial innovation project · excellent', 'University football champion ×2'],
        from: 2016.67,
        to: 2020.5,
        events: [
          { t: 2016.67, date: '2016.09', kind: 'milestone', text: 'Entered SUSTech, Department of Materials Science & Engineering' },
          { t: 2016.8, date: '2016', kind: 'award', text: 'Freshman scholarship' },
          { t: 2019.5, date: '2019.07', kind: 'milestone', text: 'Intern at BTR New Material Group: battery-material analysis and SEM imaging' },
          { t: 2020.5, date: '2020.07', kind: 'milestone', text: 'Graduated; research assistant at the SUSTech humanities center (artifact cataloguing and exhibitions)' },
        ],
      },
      {
        period: '2020 – 2025',
        org: 'ShanghaiTech University · Materials Science & Engineering',
        role: 'Ph.D.',
        short: 'ShanghaiTech · Ph.D.',
        theme: 'Device research: from single crystals and tin perovskites to all-perovskite tandems — a full materials–process–device chain.',
        highlights: ['16% certified Sn cell (world record then)', '29% certified all-perovskite tandem', 'Graduate scholarship ×5'],
        from: 2020.67,
        to: 2025.5,
        events: [
          { t: 2020.67, date: '2020.09', kind: 'milestone', text: 'Admitted to ShanghaiTech (direct Ph.D.)' },
          { t: 2021.4, date: '2021', kind: 'paper', text: 'Nat. Commun. 2021 · perovskite single crystals (co-author)' },
          { t: 2021.5, date: '2021', kind: 'award', text: 'First prize, ShanghaiTech Innovation & Entrepreneurship Competition (single crystals)' },
          { t: 2021.55, date: '2021', kind: 'talk', text: '3rd ShanghaiTech Innovation & Entrepreneurship Summit · talk' },
          { t: 2021.67, date: '2021.09', kind: 'milestone', text: 'Teaching assistant, Lab Safety & Research Integrity' },
          { t: 2022.5, date: '2022', kind: 'paper', text: 'Patent CN116727668A · antibacterial Ti alloy (undergraduate work)' },
          { t: 2024.3, date: '2024', kind: 'paper', text: 'ACS Energy Lett. 2024 · interfacial dipoles boost tin-cell voltage' },
          { t: 2024.9, date: '2024', kind: 'talk', text: 'MRS Fall Meeting, Boston · poster' },
          { t: 2025.1, date: '2025', kind: 'paper', text: 'Adv. Sci. 2025 · oriented crystallization of Sn–Pb perovskite (first author)' },
          { t: 2025.4, date: '2025', kind: 'paper', text: 'ACS AMI 2025 · homogenized transport layers in tin cells (co-first author)' },
          { t: 2025.45, date: '2025', kind: 'talk', text: '18th SNEC PV & Smart Energy Conference · Shanghai' },
          { t: 2025.5, date: '2025.07', kind: 'milestone', text: 'Ph.D. conferred' },
        ],
      },
      {
        period: '2025 – Present',
        org: 'Fudan University · Institute of Optoelectronics',
        role: 'Postdoc',
        short: 'Fudan · Postdoc',
        theme: 'Toward equipment: perovskite/Si tandems and large-area modules; commissioning and running large vacuum coating systems at a State Key Lab.',
        highlights: ['34% certified perovskite/Si tandem', '29% certified >200 cm² module', 'Subgroup lead · team of 4'],
        from: 2025.67,
        to: 2026.8,
        events: [
          { t: 2025.67, date: '2025.09', kind: 'milestone', text: 'Joined Fudan Institute of Optoelectronics as postdoc' },
          { t: 2026.2, date: '2026', kind: 'paper', text: 'Adv. Mater. 2026 · amorphous asymmetric hole contacts for tandems (co-author)' },
          { t: 2026.45, date: '2026', kind: 'talk', text: '19th SNEC PV & Smart Energy Conference · Shanghai' },
          { t: 2026.55, date: '2026', kind: 'talk', text: '12th Young Scholars Forum on Perovskite Materials & Devices · Qingdao' },
          { t: 2026.6, date: '2026', kind: 'milestone', text: 'Applied for the 80th China Postdoctoral Science Foundation general grant' },
        ],
      },
    ] as Phase[],
    note: 'Manuscripts under review (Nature Energy, Advanced Materials, Angew. Chem.) are not shown on the timeline.',
  },
}

const phaseColors = ['#c9d8c8', '#8fb08d', '#1d5c38']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthLabel = (date: string, lang: Props['lang']) => {
  const m = Number(date.slice(5))
  return lang === 'zh' ? `${m} 月` : months[m - 1]
}

function Overview({ c }: { c: (typeof content)['zh'] }) {
  const all = c.phases.flatMap((p) => p.events)
  const years = Array.from({ length: END - START + 1 }, (_, i) => START + i)
  return (
    <div className="rounded-2xl border border-[#e3e6e0] bg-white p-5 sm:p-6">
      <div className="grid grid-cols-[84px_1fr] gap-y-3">
        <div />
        <div className="relative h-11">
          {c.phases.map((p, i) => (
            <div
              key={p.short}
              className="absolute top-0 flex h-full items-center overflow-hidden rounded-md px-2"
              style={{ left: `${pct(p.from)}%`, width: `${pct(p.to) - pct(p.from)}%`, backgroundColor: phaseColors[i] }}
              title={`${p.org} · ${p.period}`}
            >
              <span className={'truncate text-[11px] font-semibold ' + (i === 0 ? 'text-[#1d5c38]' : 'text-white')}>
                {p.short}
              </span>
            </div>
          ))}
        </div>

        {c.lanes.map((lane) => (
          <Lane key={lane} label={c.kinds[lane]} events={all.filter((e) => e.kind === lane)} kind={lane} />
        ))}

        <div />
        <div className="relative h-5 border-t border-[#e3e6e0]">
          {years.map((y) => (
            <span
              key={y}
              className="absolute top-1 -translate-x-1/2 font-mono text-[10px] text-[#9aa89e]"
              style={{ left: `${pct(y)}%` }}
            >
              {y % 2 === 0 || y === END ? y : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Lane({ label, events, kind }: { label: string; events: Event[]; kind: Kind }) {
  return (
    <>
      <p className="self-center text-[11px] text-[#6b7a70]">{label}</p>
      <div className="relative h-7 rounded-md bg-[#f6f8f3]">
        {events.map((e) => (
          <span
            key={e.text}
            className="group absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pct(e.t)}%` }}
          >
            <span
              className="block h-3 w-3 cursor-default rounded-full ring-2 ring-white transition-transform group-hover:scale-125"
              style={{ backgroundColor: kindStyle[kind].dot }}
            />
            <span
              className={
                'pointer-events-none absolute bottom-5 z-20 hidden w-56 rounded-lg bg-[#14201a] px-3 py-2 text-[11px] leading-5 text-white shadow-lg group-hover:block ' +
                (pct(e.t) > 75 ? '-right-2' : pct(e.t) < 20 ? '-left-2' : 'left-1/2 -translate-x-1/2')
              }
            >
              <span className="font-mono text-[#9fc3a8]">{e.date}</span> {e.text}
            </span>
          </span>
        ))}
      </div>
    </>
  )
}

export default function Timeline({ lang }: Props) {
  const c = content[lang]
  return (
    <SubShell lang={lang} current="timeline">
      <PageHeader index="02" kicker={c.kicker} title={c.title} lead={c.lead} />

      <div className="hidden sm:block">
        <Block label={c.overviewLabel} title={c.overviewTitle} desc={c.overviewDesc}>
          <Overview c={c} />
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#6b7a70]">
            {c.lanes.map((k) => (
              <span key={k} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: kindStyle[k].dot }} />
                {c.kinds[k]}
              </span>
            ))}
          </div>
        </Block>
      </div>

      <Block label={c.detailLabel} title={c.detailTitle}>
        <div className="space-y-14">
          {c.phases.map((p, i) => {
            const byYear = new Map<number, Event[]>()
            p.events.forEach((e) => {
              const y = Math.floor(e.t)
              byYear.set(y, [...(byYear.get(y) ?? []), e])
            })
            return (
              <section key={p.short}>
                <div className="rounded-2xl bg-[#14201a] p-6 text-white sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-xs tracking-widest text-[#9fc3a8]">
                      {c.phaseWord} {i + 1} / {c.phases.length}
                    </p>
                    <p className="font-mono text-xs text-[#9fc3a8]">{p.period}</p>
                  </div>
                  <h3 className="mt-3 text-xl font-bold sm:text-2xl">{p.org}</h3>
                  <p className="mt-1 text-sm text-[#c9d8c8]">{p.role}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e3ebe2]">{p.theme}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span key={h} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-2">
                  {[...byYear.entries()].map(([year, evs]) => (
                    <div
                      key={year}
                      className="grid gap-3 border-b border-[#eef1ea] py-5 last:border-b-0 sm:grid-cols-[96px_1fr] sm:gap-6"
                    >
                      <p className="font-mono text-2xl font-bold text-[#b9c6bb] sm:text-3xl">{year}</p>
                      <ul className="space-y-3">
                        {evs.map((e) => (
                          <li key={e.text} className="flex items-start gap-3">
                            <span
                              className={
                                'mt-0.5 w-[76px] shrink-0 rounded-full py-0.5 text-center text-[11px] font-medium ' +
                                kindStyle[e.kind].tag
                              }
                            >
                              {c.kinds[e.kind]}
                            </span>
                            <span className="text-sm leading-6 text-[#3a4a40]">
                              {e.date.includes('.') && (
                                <span className="mr-2 font-mono text-xs text-[#9aa89e]">{monthLabel(e.date, lang)}</span>
                              )}
                              {e.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
        <p className="mt-10 text-xs leading-6 text-[#9aa89e]">{c.note}</p>
      </Block>
    </SubShell>
  )
}
