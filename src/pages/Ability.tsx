import SubShell from './SubShell'

type Props = { lang: 'zh' | 'en' }

const content = {
  zh: {
    label: 'Capabilities',
    kicker: 'Capabilities',
    headline: '把设备装好，把工艺做稳',
    sub: '科研训练给我的不是单一技能，而是「装调 — 工艺 — 表征 — 迭代」的完整闭环',
    flow: ['需求分析', '安装调试', '工艺开发', '表征验证', '迭代优化'],
    cards: [
      {
        title: '真空镀膜设备',
        body: '参与国家光伏科学与技术重点实验室大型真空镀膜系统（磁控溅射、ALD、CVD）的安装、调试、运行与维护；熟悉真空获得、气路、电源与控制系统的故障排查。',
        metric: '7 年',
        metricLabel: '真空薄膜沉积经验',
      },
      {
        title: '工艺开发与放大',
        body: '覆盖旋涂、气萃、闪蒸、刮涂到真空蒸镀的完整工艺链；参与大面积组件工艺开发，系统优化均匀性、重复性与良率。',
        metric: '>200 cm²',
        metricLabel: '大面积组件工艺放大',
      },
      {
        title: '表征与问题定位',
        body: '从表征数据反推工艺根源，形成「测试 — 分析 — 工艺调整」闭环；覆盖 XRD 家族、PL / EQE Mapping、电学测试等全套手段。',
        metric: '10 年',
        metricLabel: 'SEM 操作与分析经验',
      },
      {
        title: '工程实现',
        body: 'Solidworks、AutoCAD、Blender、3ds Max 从图纸到实物；参与设备改造与原位表征装置搭建。',
        metric: '4 款',
        metricLabel: '工程设计与建模工具',
      },
      {
        title: '团队与项目管理',
        body: '作为子项目组长带领四人团队完成整体项目指标；建立二级单位实验室安全分级体系与 SOP；校企多方协作经验丰富。',
        metric: '4 人',
        metricLabel: '带队完成项目指标',
      },
      {
        title: 'AI 工具赋能',
        body: '掌握 AI 工具的开发与迭代，借助 AI 与大数据分析优化实验流程、数据处理与文档效率。',
        metric: '3 款',
        metricLabel: 'AI 工具日常深度使用',
      },
    ],
    note: '口径说明：年限按首次系统接触起算；大面积组件为合作项目成果，我负责其中结晶调控与工艺窗口部分。',
  },
  en: {
    label: 'Capabilities',
    kicker: 'Capabilities',
    headline: 'Install tools right. Run processes stable.',
    sub: 'What research trained me is not a single skill, but a closed loop: commissioning → process → characterization → iteration',
    flow: ['Requirement', 'Commissioning', 'Process dev', 'Characterization', 'Iteration'],
    cards: [
      {
        title: 'Vacuum Coating Equipment',
        body: 'Installation, commissioning, operation and maintenance of large vacuum coating systems (magnetron sputtering, ALD, CVD) at the State Key Laboratory; hands-on troubleshooting of vacuum, gas-line, power and control systems.',
        metric: '7 yrs',
        metricLabel: 'vacuum thin-film deposition',
      },
      {
        title: 'Process Development & Scale-up',
        body: 'Full chain from spin-coating, gas quenching and flash evaporation to blade-coating and vacuum evaporation; systematic optimization of uniformity, repeatability and yield on large-area modules.',
        metric: '>200 cm²',
        metricLabel: 'module process scale-up',
      },
      {
        title: 'Characterization & Root-cause',
        body: 'Trace process issues from characterization data and close the test–analysis–adjustment loop; full toolkit covering XRD family, PL / EQE mapping and electrical testing.',
        metric: '10 yrs',
        metricLabel: 'SEM operation & analysis',
      },
      {
        title: 'Engineering Implementation',
        body: 'From drawings to working hardware with Solidworks, AutoCAD, Blender and 3ds Max; equipment modification and in-situ characterization setups.',
        metric: '4',
        metricLabel: 'CAD / modeling toolchains',
      },
      {
        title: 'Team & Project Management',
        body: 'Led a four-person team as subgroup leader to deliver overall project targets; built a tiered lab-safety system and SOPs; experienced in university–industry collaboration.',
        metric: '4',
        metricLabel: 'team members led on target',
      },
      {
        title: 'AI-enabled Workflow',
        body: 'Develop and iterate AI tools; leverage AI and big-data analysis to streamline experiments, data processing and documentation.',
        metric: '3',
        metricLabel: 'AI tools in daily deep use',
      },
    ],
    note: 'Note: years counted from first systematic training; the >200 cm² module was a collaborative result — I owned crystallization control and the process window.',
  },
}

export default function Ability({ lang }: Props) {
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

      <div className="mb-12 flex flex-wrap items-center gap-x-2 gap-y-2">
        {c.flow.map((f, i) => (
          <span key={f} className="flex items-center gap-2">
            <span className="rounded-lg bg-[#e7efe6] px-3 py-1.5 text-sm font-medium text-[#1d5c38]">{f}</span>
            {i < c.flow.length - 1 && <span className="text-[#9aa89e]">→</span>}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {c.cards.map((card) => (
          <div key={card.title} className="flex flex-col rounded-xl border border-[#e3e6e0] bg-white p-5">
            <h3 className="mb-2 text-base font-semibold text-[#1d5c38]">{card.title}</h3>
            <p className="flex-1 text-sm leading-7 text-[#3a4a40]">{card.body}</p>
            <div className="mt-4 border-t border-[#eef1ea] pt-3">
              <span className="text-2xl font-bold text-[#14201a]">{card.metric}</span>
              <span className="ml-2 text-xs text-[#6b7a70]">{card.metricLabel}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs leading-6 text-[#9aa89e]">{c.note}</p>
    </SubShell>
  )
}
