import SubShell, { SubHeading } from './SubShell'

type Props = { lang: 'zh' | 'en' }

const content = {
  zh: {
    label: 'Capabilities',
    title: '个人能力',
    intro:
      '面向半导体设备行业的能力图谱：以真空镀膜设备与薄膜工艺为核心，覆盖从设备安装调试、工艺开发到表征分析与团队管理的完整链条。',
    cards: [
      {
        title: '真空镀膜设备',
        body: '在国家光伏科学与技术重点实验室参与大型真空镀膜系统（磁控溅射、ALD、CVD）的安装、调试、运行与维护；7 年真空薄膜沉积经验，熟悉真空获得、气路、电源与控制系统的故障排查与维修。',
      },
      {
        title: '工艺开发与放大',
        body: '覆盖旋涂、气萃、闪蒸、刮涂到真空蒸镀的完整工艺链；参与大面积（>200 cm²）组件工艺开发，熟悉均匀性、重复性与良率的系统性优化。',
      },
      {
        title: '表征与问题定位',
        body: 'SEM 十年经验，配合 XRD、PL/EQE Mapping 等全套表征手段；擅长从表征数据反推工艺根源，形成"测试—分析—工艺调整"的闭环。',
      },
      {
        title: '工程实现',
        body: '熟练使用 Solidworks、AutoCAD、Blender、3ds Max；参与设备改造与原位表征装置搭建，具备从图纸设计到实物落地的能力。',
      },
      {
        title: '团队与项目管理',
        body: '作为子项目组长带领四人团队完成整体项目指标；建立二级单位实验室安全分级体系与 SOP；丰富的校企多方协作经验。',
      },
      {
        title: 'AI 工具赋能',
        body: '掌握 AI 工具的开发与迭代，借助 AI 与大数据分析优化实验流程、数据处理与文档效率。',
      },
    ],
  },
  en: {
    label: 'Capabilities',
    title: 'Capabilities',
    intro:
      'A capability map for the semiconductor equipment industry — centered on vacuum coating systems and thin-film processing, spanning installation & commissioning, process development, characterization, and team leadership.',
    cards: [
      {
        title: 'Vacuum Coating Equipment',
        body: 'Installation, commissioning, operation and maintenance of large vacuum coating systems (magnetron sputtering, ALD, CVD) at the State Key Laboratory of Photovoltaic Science and Technology; 7 years of vacuum thin-film deposition, with hands-on troubleshooting of vacuum, gas-line, power and control systems.',
      },
      {
        title: 'Process Development & Scale-up',
        body: 'Full process chain from spin-coating, gas quenching and flash evaporation to blade-coating and vacuum evaporation; contributed to >200 cm² module process development with systematic optimization of uniformity, repeatability and yield.',
      },
      {
        title: 'Characterization & Root-cause Analysis',
        body: 'Ten years of SEM experience plus the full toolkit (XRD family, PL/EQE mapping, and more); skilled at tracing process issues from characterization data and closing the test–analysis–adjustment loop.',
      },
      {
        title: 'Engineering Implementation',
        body: 'Proficient with Solidworks, AutoCAD, Blender and 3ds Max; hands-on in equipment modification and in-situ characterization setups — from drawings to working hardware.',
      },
      {
        title: 'Team & Project Management',
        body: 'Led a four-person team as subgroup leader to deliver overall project targets; established a tiered lab-safety system and SOPs; experienced in university–industry multi-party collaboration.',
      },
      {
        title: 'AI-enabled Workflow',
        body: 'Develop and iterate AI tools, leveraging AI and big-data analysis to streamline experiments, data processing and documentation.',
      },
    ],
  },
}

export default function Ability({ lang }: Props) {
  const c = content[lang]
  return (
    <SubShell lang={lang}>
      <SubHeading label={c.label} title={c.title} />
      <p className="mb-10 max-w-3xl text-sm leading-7 text-[#3a4a40]">{c.intro}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {c.cards.map((card) => (
          <div key={card.title} className="rounded-xl border border-[#e3e6e0] bg-white p-5">
            <h3 className="mb-2 text-base font-semibold text-[#1d5c38]">{card.title}</h3>
            <p className="text-sm leading-7 text-[#3a4a40]">{card.body}</p>
          </div>
        ))}
      </div>
    </SubShell>
  )
}
