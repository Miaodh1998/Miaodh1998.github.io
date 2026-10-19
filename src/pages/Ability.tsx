import SubShell, { PageHeader, Block } from './SubShell'

type Props = { lang: 'zh' | 'en' }

type Case = {
  tag: string
  title: string
  problem: string
  action: string
  results: { num: string; label: string }[]
  links?: { label: string; href: string }[]
}

// 0 = 未涉及, 1 = 参与, 2 = 主导 / 主要负责
type Level = 0 | 1 | 2

const levels: Level[][] = [
  [2, 2, 2, 2, 1], // 提出想法
  [2, 2, 0, 1, 0], // 真空设备装调与维护
  [2, 2, 2, 0, 0], // 薄膜沉积工艺
  [2, 1, 1, 2, 2], // 材料设计与合成
  [1, 2, 2, 0, 0], // 界面与能级调控
  [2, 2, 1, 0, 0], // 大面积与工艺放大
  [2, 1, 0, 0, 0], // 稳定性与可靠性
  [2, 2, 2, 2, 1], // 表征与问题定位
  [2, 2, 0, 0, 0], // 团队与项目管理
]

const content = {
  zh: {
    kicker: 'Capabilities',
    title: '每一项能力，都落在具体项目里',
    lead: '科研训练留下的不是一张技能清单，而是一个反复运转的闭环：从想法出发，把设备装好、把工艺跑通、用表征找到问题，再回到设备和工艺上迭代。下面是这个闭环，以及它在五个项目里的落点。',
    loopLabel: '01 · Loop',
    loopTitle: '一个闭环',
    loopDesc: '五个环节不是分工，而是同一个人要连续做完的事。',
    loop: [
      { verb: '想法', en: 'Idea', body: '发现问题，聚焦问题核心，提出解决问题的方案，再使用设备把想法变成现实。' },
      { verb: '装调', en: 'Commission', body: '磁控溅射、ALD、气相沉积等真空镀膜系统的安装、调试与运维；真空、气路、电源与控制系统排障。' },
      { verb: '工艺', en: 'Process', body: '旋涂、气萃、闪蒸、刮涂到真空沉积的完整工艺链；从小面积器件到 200 cm² 以上组件摸索工艺窗口。' },
      { verb: '表征', en: 'Characterize', body: 'SEM、XRD 家族、PL / EQE Mapping、J-V 等手段，从数据反推结晶、界面与均匀性问题。' },
      { verb: '迭代', en: 'Iterate', body: '把表征结论转成工艺与设备参数的调整，沉淀为可复现的 SOP。' },
    ],
    loopBack: '迭代的结论，催生下一个想法',
    matrixLabel: '02 · Evidence',
    matrixTitle: '能力 × 项目',
    matrixDesc: '每一行是一项能力，每一列是一个做过的项目。实心表示主导或主要负责，空心表示参与。',
    corner: '能力 \\ 项目',
    cols: [
      { name: '钙硅叠层', sub: '博后 · 2025–' },
      { name: '全钙叠层', sub: '博士' },
      { name: '锡基钙钛矿', sub: '博士' },
      { name: '单晶生长', sub: '博士' },
      { name: '抗菌钛合金', sub: '本科' },
    ],
    rows: [
      '提出想法',
      '真空设备装调与维护',
      '薄膜沉积工艺',
      '材料设计与合成',
      '界面与能级调控',
      '大面积与工艺放大',
      '稳定性与可靠性',
      '表征与问题定位',
      '团队与项目管理',
    ],
    legendMain: '主导 / 主要负责',
    legendPart: '参与',
    casesLabel: '03 · Cases',
    casesTitle: '四个问题，以及我是怎么解决的',
    casesDesc: '每个案例按「问题 — 做法 — 结果」展开，结果均为第三方认证数据或已发表论文。',
    problem: '问题',
    action: '做法',
    result: '结果',
    cases: [
      {
        tag: '宽带隙 · 叠层',
        title: '碘溴分相：换掉材料体系，而不是修补它',
        problem: '常规宽带隙钙钛矿依赖碘溴混合，光照下容易相分离，同时压低效率与稳定性。',
        action: '设计开发多种纯碘宽带隙钙钛矿材料，配合绿色反溶剂制备工艺，从源头上去掉溴。',
        results: [
          { num: '22.7%', label: '1 cm² 半透明单结认证' },
          { num: '32%', label: '钙钛矿-晶硅叠层认证' },
        ],
      },
      {
        tag: '大面积 · 稳定性',
        title: '大面积叠层组件：把工艺窗口放大到 200 cm² 以上',
        problem: '面向空天光伏的叠层组件，需要在大面积上保持均匀结晶，并承受高温、高辐照下的长期运行。',
        action: '在复旦、港大、天合光能合作的国家重点研发计划项目中，负责结晶调控与工艺窗口部分。',
        results: [
          { num: '29%', label: '>200 cm² 组件认证' },
          { num: '1000 h', label: '85 ℃ 光照 / 双 85，效率损失 ≤10%' },
        ],
      },
      {
        tag: '全钙叠层 · 第一作者',
        title: '锡铅混合：从纳米到厘米尺度的取向结晶',
        problem: '锡铅混合钙钛矿易氧化、结晶不一致，限制了窄带隙子电池和全钙叠层的效率。',
        action: '综合调控锡铅混合层与宽带隙层的上下界面，实现一致、取向的结晶，提升抗氧化能力。',
        results: [
          { num: '23%', label: '锡铅混合单结认证' },
          { num: '29%', label: '全钙钛矿叠层认证' },
        ],
        links: [{ label: 'Adv. Sci. 2025', href: 'papers/as-2025.pdf' }],
      },
      {
        tag: '锡基钙钛矿',
        title: '锡基器件：用界面能级对齐把电压拿回来',
        problem: '锡基钙钛矿结晶快、界面能级失配，开路电压和光电流损失明显。',
        action: '添加剂工程调控结晶；引入界面偶极层实现能级对齐；对上下传输层做掺杂均匀化。',
        results: [
          { num: '16%', label: '小面积认证（当时世界纪录）' },
          { num: '15%', label: '1 cm² 器件认证' },
        ],
        links: [
          { label: 'ACS Energy Lett. 2024', href: 'papers/ael-2024.pdf' },
          { label: 'ACS AMI 2025', href: 'papers/ami-2025.pdf' },
        ],
      },
    ] as Case[],
    note: '完整的设备、表征与软件清单见主页',
    noteLink: '「专业技能」',
  },
  en: {
    kicker: 'Capabilities',
    title: 'Every capability maps to a real project',
    lead: 'Research left me with a loop rather than a checklist: start from an idea, get the tool running, get the process working, find the problem through characterization, then iterate on the tool and the process. Below is that loop, and where it shows up across five projects.',
    loopLabel: '01 · Loop',
    loopTitle: 'One closed loop',
    loopDesc: 'Not five separate jobs — five steps one person carries through end to end.',
    loop: [
      { verb: 'Idea', en: '想法', body: 'Spot the problem, zero in on its core, propose a solution, then use the tools to make the idea real.' },
      { verb: 'Commission', en: '装调', body: 'Install, commission and maintain vacuum coating systems (sputtering, ALD, vapor deposition); troubleshoot vacuum, gas, power and control.' },
      { verb: 'Process', en: '工艺', body: 'Full chain from spin-coating, gas quenching, flash evaporation and blade-coating to vacuum deposition; process windows from small cells to >200 cm² modules.' },
      { verb: 'Characterize', en: '表征', body: 'SEM, XRD family, PL / EQE mapping and J-V to trace crystallization, interface and uniformity issues back to their cause.' },
      { verb: 'Iterate', en: '迭代', body: 'Turn findings into process and tool-parameter changes, and capture them as reproducible SOPs.' },
    ],
    loopBack: 'What iteration teaches sparks the next idea',
    matrixLabel: '02 · Evidence',
    matrixTitle: 'Capabilities × Projects',
    matrixDesc: 'Rows are capabilities, columns are projects. Filled = led or main owner; hollow = contributed.',
    corner: 'Capability \\ Project',
    cols: [
      { name: 'Perovskite/Si tandem', sub: 'Postdoc · 2025–' },
      { name: 'All-perovskite tandem', sub: 'Ph.D.' },
      { name: 'Tin perovskite', sub: 'Ph.D.' },
      { name: 'Single crystals', sub: 'Ph.D.' },
      { name: 'Antibacterial Ti alloy', sub: 'B.Sc.' },
    ],
    rows: [
      'Proposing ideas',
      'Vacuum tool commissioning',
      'Thin-film deposition',
      'Materials design & synthesis',
      'Interface & energy alignment',
      'Large-area scale-up',
      'Stability & reliability',
      'Characterization & root cause',
      'Team & project management',
    ],
    legendMain: 'Led / main owner',
    legendPart: 'Contributed',
    casesLabel: '03 · Cases',
    casesTitle: 'Four problems and how I solved them',
    casesDesc: 'Each case reads problem → approach → result; results are third-party certified or published.',
    problem: 'Problem',
    action: 'Approach',
    result: 'Result',
    cases: [
      {
        tag: 'Wide-bandgap · Tandem',
        title: 'Halide segregation: replace the chemistry instead of patching it',
        problem: 'Conventional wide-bandgap perovskites rely on mixed I/Br and phase-segregate under light, hurting both efficiency and stability.',
        action: 'Designed several pure-iodide wide-bandgap perovskites with a green antisolvent process, removing bromine at the source.',
        results: [
          { num: '22.7%', label: 'certified 1 cm² semi-transparent cell' },
          { num: '32%', label: 'certified perovskite/Si tandem' },
        ],
      },
      {
        tag: 'Large-area · Stability',
        title: 'Tandem modules: scaling the process window past 200 cm²',
        problem: 'Tandem modules for space PV must crystallize uniformly over large areas and survive long operation under heat and high irradiance.',
        action: 'In a national key R&D project with Fudan, HKU and Trina Solar, I owned crystallization control and the process window.',
        results: [
          { num: '29%', label: 'certified >200 cm² module' },
          { num: '1000 h', label: '85 °C light / damp-heat, ≤10% loss' },
        ],
      },
      {
        tag: 'All-perovskite tandem · First author',
        title: 'Sn–Pb perovskite: oriented crystallization from nano to centimeter scale',
        problem: 'Mixed Sn–Pb perovskites oxidize easily and crystallize inconsistently, capping narrow-bandgap and all-perovskite tandem efficiency.',
        action: 'Engineered the top and bottom interfaces of both the Sn–Pb and wide-bandgap layers for congruent, oriented crystallization and better oxidation resistance.',
        results: [
          { num: '23%', label: 'certified Sn–Pb single junction' },
          { num: '29%', label: 'certified all-perovskite tandem' },
        ],
        links: [{ label: 'Adv. Sci. 2025', href: 'papers/as-2025.pdf' }],
      },
      {
        tag: 'Tin perovskite',
        title: 'Tin cells: winning back voltage through energy-level alignment',
        problem: 'Tin perovskites crystallize fast and suffer interfacial energy mismatch, losing both open-circuit voltage and photocurrent.',
        action: 'Additive engineering for crystallization; interfacial dipole layers for energy alignment; homogenized doping of both transport layers.',
        results: [
          { num: '16%', label: 'certified small-area (world record then)' },
          { num: '15%', label: 'certified 1 cm² device' },
        ],
        links: [
          { label: 'ACS Energy Lett. 2024', href: 'papers/ael-2024.pdf' },
          { label: 'ACS AMI 2025', href: 'papers/ami-2025.pdf' },
        ],
      },
    ] as Case[],
    note: 'Full lists of tools, characterization and software are in',
    noteLink: 'Skills on the homepage',
  },
}

function Dot({ v }: { v: Level }) {
  if (v === 2) return <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#1d5c38]" />
  if (v === 1) return <span className="inline-block h-3.5 w-3.5 rounded-full border-2 border-[#8fb08d]" />
  return <span className="inline-block h-1 w-1 rounded-full bg-[#d5dbd2]" />
}

export default function Ability({ lang }: Props) {
  const c = content[lang]
  return (
    <SubShell lang={lang} current="ability">
      <PageHeader index="01" kicker={c.kicker} title={c.title} lead={c.lead} />

      <Block label={c.loopLabel} title={c.loopTitle} desc={c.loopDesc}>
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-5">
          {c.loop.map((s, i) => (
            <li key={s.verb} className="relative rounded-xl border border-[#e3e6e0] bg-white p-5">
              <p className="font-mono text-[11px] text-[#9aa89e]">0{i + 1}</p>
              <p className="mt-1 text-2xl font-bold text-[#1d5c38]">{s.verb}</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#9aa89e]">{s.en}</p>
              <p className="mt-3 text-sm leading-7 text-[#3a4a40]">{s.body}</p>
              {i < c.loop.length - 1 && (
                <span className="absolute -right-[11px] top-9 z-10 hidden h-5 w-5 items-center justify-center rounded-full bg-[#fafaf7] text-sm text-[#8fb08d] sm:flex">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="mx-[10%] hidden h-7 rounded-b-2xl border-x-2 border-b-2 border-dashed border-[#b9cbb9] sm:block" />
        <p className="mt-3 text-center text-xs text-[#6b7a70]">↺ {c.loopBack}</p>
      </Block>

      <Block label={c.matrixLabel} title={c.matrixTitle} desc={c.matrixDesc}>
        <div className="overflow-x-auto rounded-2xl border border-[#e3e6e0] bg-white">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-[#f6f8f3]">
                <th className="px-5 py-4 text-left text-xs font-medium text-[#9aa89e]">{c.corner}</th>
                {c.cols.map((col) => (
                  <th key={col.name} className="px-3 py-4 text-center align-bottom">
                    <p className="text-[13px] font-semibold leading-5 text-[#14201a]">{col.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] font-normal text-[#9aa89e]">{col.sub}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, i) => (
                <tr key={row} className="border-t border-[#eef1ea] transition-colors hover:bg-[#fafbf8]">
                  <td className="whitespace-nowrap px-5 py-3.5 font-medium text-[#14201a]">{row}</td>
                  {levels[i].map((v, j) => (
                    <td key={j} className="px-3 py-3.5 text-center">
                      <Dot v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-[#9aa89e] sm:hidden">{lang === 'zh' ? '← 左右滑动查看全部项目 →' : '← Swipe to see all projects →'}</p>
        <div className="mt-3 flex gap-5 text-xs text-[#6b7a70]">
          <span className="flex items-center gap-1.5">
            <Dot v={2} /> {c.legendMain}
          </span>
          <span className="flex items-center gap-1.5">
            <Dot v={1} /> {c.legendPart}
          </span>
        </div>
      </Block>

      <Block label={c.casesLabel} title={c.casesTitle} desc={c.casesDesc}>
        <div className="space-y-6">
          {c.cases.map((cs) => (
            <article key={cs.title} className="overflow-hidden rounded-2xl border border-[#e3e6e0] bg-white">
              <header className="flex flex-wrap items-end justify-between gap-3 border-b border-[#eef1ea] bg-[#f6f8f3] px-6 py-4">
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-[#1d5c38]">{cs.tag}</p>
                  <h3 className="mt-1 text-base font-semibold text-[#14201a] sm:text-lg">{cs.title}</h3>
                </div>
                {cs.links && (
                  <div className="flex flex-wrap gap-1.5">
                    {cs.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-[#d8ddd4] bg-white px-2 py-0.5 text-[11px] font-medium text-[#4a5a50] transition-colors hover:border-[#1d5c38] hover:text-[#1d5c38]"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </header>
              <div className="grid divide-y divide-[#eef1ea] sm:grid-cols-[1fr_1fr_0.85fr] sm:divide-x sm:divide-y-0">
                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold text-[#9aa89e]">{c.problem}</p>
                  <p className="text-sm leading-7 text-[#3a4a40]">{cs.problem}</p>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold text-[#9aa89e]">{c.action}</p>
                  <p className="text-sm leading-7 text-[#3a4a40]">{cs.action}</p>
                </div>
                <div className="bg-[#fbfcfa] p-6">
                  <p className="mb-3 text-xs font-semibold text-[#9aa89e]">{c.result}</p>
                  <div className="space-y-3">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <p className="text-2xl font-bold leading-none text-[#1d5c38]">{r.num}</p>
                        <p className="mt-1 text-xs leading-5 text-[#6b7a70]">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs leading-6 text-[#9aa89e]">
          {c.note}{' '}
          <a href="#skills" className="text-[#1d5c38] underline decoration-[#c8d2c5] underline-offset-4">
            {c.noteLink}
          </a>
          {lang === 'zh' ? '。' : '.'}
        </p>
      </Block>
    </SubShell>
  )
}
