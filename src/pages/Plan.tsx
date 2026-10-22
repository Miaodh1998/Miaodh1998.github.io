import SubShell, { PageHeader, Block } from './SubShell'

type Props = { lang: 'zh' | 'en' }

const content = {
  zh: {
    kicker: 'Plans',
    title: '下一站：把实验室里的工艺，带到半导体行业',
    lead: (
      <>
        前十年一直在向工程端靠近：从用设备做材料，到搭平台做器件，再到聚焦设备工艺提升性能。接下来希望进入
        <strong className="font-extrabold text-[#14201a]">半导体行业</strong>，
        <strong className="font-semibold text-[#14201a]">设备厂商</strong>、
        <strong className="font-semibold text-[#14201a]">晶圆厂</strong>与
        <strong className="font-semibold text-[#14201a]">光伏企业</strong>
        都在考虑之列，在量产一线把工艺与设备能力真正落地；同时保持与学术界在叠层光伏和真空薄膜方向的合作。
      </>
    ),
    roadLabel: '01 · Roadmap',
    roadTitle: '路线',
    roadDesc: '每一段写清楚要做什么，以及怎样算做到。',
    checkWord: '怎样算做到',
    road: [
      {
        stage: '现在 · 2025–',
        title: '复旦博后',
        body: '钙硅叠层与大面积组件研究，参与复旦、港大、天合光能三方合作的国家重点研发计划项目；参与国家重点实验室大型真空镀膜系统的安装、调试与运维。',
        check: '为转向产业积累设备装调与工艺放大的一手经验',
        now: true,
      },
      {
        stage: '0 – 2 年',
        title: '深入量产一线',
        body: '进入半导体行业（设备厂商、晶圆厂或光伏企业），系统掌握主流设备与产线的工艺整合与 troubleshooting，完成从科研思维到工程思维的转换。',
        check: '能独立负责一类设备的工艺调试与问题定位',
      },
      {
        stage: '3 – 5 年',
        title: '独当一面',
        body: '主导新设备导入或新工艺开发项目，沉淀可复制的调试与优化方法论，成为团队里叫得应、靠得住的人。',
        check: '主导至少一个设备导入或工艺开发项目并完成交付',
      },
      {
        stage: '5 年以上',
        title: '技术专家 / 技术管理',
        body: '向技术专家或技术管理方向发展，推动国产设备与新材料、新工艺的结合创新。',
        check: '在国产设备 × 新材料 / 新工艺方向形成自己的技术积累',
      },
    ],
    fitLabel: '02 · Fit',
    fitTitle: '为什么是半导体行业',
    fitDesc: '无论设备厂、晶圆厂还是光伏产线，都需要同时理解工艺和设备的人，这恰好是我过去十年的交叉点。',
    fit: [
      {
        title: '懂工艺端的真实需求',
        body: '做过旋涂、刮涂、气萃、闪蒸到真空沉积的完整工艺链，知道一个工艺窗口落到设备上意味着什么。',
        link: { label: '看案例', href: '#/ability' },
      },
      {
        title: '熟悉设备端的运行逻辑',
        body: '参与 CVD、ALD、PVD 系统的安装、调试与运维，处理过真空、气路、电源与控制系统的故障。',
        link: { label: '看能力矩阵', href: '#/ability' },
      },
      {
        title: '有从小样到大面积的放大经验',
        body: '参与 >200 cm² 钙硅叠层组件开发，负责结晶调控与工艺窗口，组件效率 27%。',
        link: { label: '看时间线', href: '#/timeline' },
      },
    ],
    seekLabel: '03 · Open to',
    seekTitle: '我在寻找',
    seek: [
      {
        title: '产业岗位',
        items: ['半导体设备厂商 · 晶圆厂（Fab）· 光伏企业', '工艺工程师 · 工艺整合工程师 · 研发工程师', '薄膜沉积（PVD / ALD / CVD）相关方向优先'],
      },
      {
        title: '学术合作',
        items: ['钙钛矿 / 叠层光伏', '真空薄膜工艺与原位表征', '新型半导体材料与稳定性'],
      },
    ],
    ctaTitle: '如果方向契合，欢迎直接联系',
    ctaBody: '邮件回复最及时；也可以通过页面底部的微信二维码联系。',
    ctaMail: '发邮件',
    note: '规划会随着对行业的理解持续修正；唯一不变的是方向：离设备和工艺越近越好。',
  },
  en: {
    kicker: 'Plans',
    title: 'Next stop: taking lab processes into the semiconductor industry',
    lead: (
      <>
        The last ten years have steadily moved toward engineering: from using tools on materials, to building platforms
        for devices, to focusing on equipment processes that push performance. Next, I want to join the{' '}
        <strong className="font-extrabold text-[#14201a]">semiconductor industry</strong> —{' '}
        <strong className="font-semibold text-[#14201a]">equipment makers</strong>,{' '}
        <strong className="font-semibold text-[#14201a]">fabs</strong> and{' '}
        <strong className="font-semibold text-[#14201a]">PV manufacturers</strong> are all in scope — and put process and
        equipment skills to work in production, while keeping academic collaborations in tandem PV and vacuum thin films.
      </>
    ),
    roadLabel: '01 · Roadmap',
    roadTitle: 'Roadmap',
    roadDesc: 'For each stage: what to do, and what counts as done.',
    checkWord: 'Done when',
    road: [
      {
        stage: 'Now · 2025–',
        title: 'Postdoc at Fudan',
        body: 'Perovskite/Si tandems and large-area modules within a National Key R&D Program project shared by Fudan, HKU and Trina Solar; installing, commissioning and running large vacuum coating systems at a State Key Lab.',
        check: 'Hands-on commissioning and scale-up experience in place for the move to industry',
        now: true,
      },
      {
        stage: '0 – 2 years',
        title: 'Into the production line',
        body: 'Join the semiconductor industry (equipment maker, fab or PV manufacturer) and master process integration and troubleshooting on mainstream tools and lines — from a research mindset to an engineering one.',
        check: 'Independently own process tuning and root-cause work for one tool class',
      },
      {
        stage: '3 – 5 years',
        title: 'Independent ownership',
        body: 'Lead new-tool introduction or new-process development; distill repeatable commissioning and optimization methods; be the go-to person on the team.',
        check: 'Lead at least one tool introduction or process project through delivery',
      },
      {
        stage: '5+ years',
        title: 'Technical expert / leadership',
        body: 'Grow toward a technical expert or management track, driving innovation where domestic equipment meets new materials and processes.',
        check: 'A recognized body of expertise in domestic tools × new materials / processes',
      },
    ],
    fitLabel: '02 · Fit',
    fitTitle: 'Why the semiconductor industry',
    fitDesc: 'Equipment makers, fabs and PV lines all need people who understand both process and tool — exactly where my last ten years intersect.',
    fit: [
      {
        title: 'I know what the process side needs',
        body: 'Worked the full chain from spin-coating, blade-coating, gas quenching and flash evaporation to vacuum deposition — I know what a process window means once it lands on a tool.',
        link: { label: 'See cases', href: '#/ability' },
      },
      {
        title: 'I know how the tools behave',
        body: 'Installed, commissioned and maintained CVD, ALD and PVD systems; handled vacuum, gas, power and control faults.',
        link: { label: 'See matrix', href: '#/ability' },
      },
      {
        title: 'I have scaled from coupon to module',
        body: 'Contributed to >200 cm² perovskite/Si tandem modules, owning crystallization control and the process window; module efficiency 27%.',
        link: { label: 'See timeline', href: '#/timeline' },
      },
    ],
    seekLabel: '03 · Open to',
    seekTitle: 'What I am looking for',
    seek: [
      {
        title: 'Industry roles',
        items: ['Semiconductor equipment makers · fabs · PV manufacturers', 'Process · process integration · R&D engineer', 'Thin-film deposition (PVD / ALD / CVD) preferred'],
      },
      {
        title: 'Academic collaboration',
        items: ['Perovskite / tandem photovoltaics', 'Vacuum thin-film processing & in-situ characterization', 'Novel semiconductors and stability'],
      },
    ],
    ctaTitle: 'If this fits what you are working on, get in touch',
    ctaBody: 'Email gets the fastest reply; WeChat QR codes are at the bottom of the page.',
    ctaMail: 'Send email',
    note: 'These plans will keep evolving as I learn the industry; the constant is the direction — stay as close to tools and processes as possible.',
  },
}

export default function Plan({ lang }: Props) {
  const c = content[lang]
  return (
    <SubShell lang={lang} current="plan">
      <PageHeader index="03" kicker={c.kicker} title={c.title} lead={c.lead} oneLine={lang === 'zh'} />

      <Block label={c.roadLabel} title={c.roadTitle} desc={c.roadDesc}>
        <ol className="relative grid gap-8 sm:grid-cols-4 sm:gap-5">
          <span className="absolute bottom-2 left-[9px] top-2 w-0.5 bg-gradient-to-b from-[#1d5c38] to-[#dfe4dc] sm:bottom-auto sm:left-2 sm:right-2 sm:top-[9px] sm:h-0.5 sm:w-auto sm:bg-gradient-to-r" />
          {c.road.map((r) => (
            <li key={r.stage} className="relative flex flex-col pl-9 sm:pl-0 sm:pt-10">
              <span
                className={
                  'absolute left-0 top-0 h-5 w-5 rounded-full ' +
                  ('now' in r && r.now
                    ? 'bg-[#1d5c38] ring-4 ring-[#dbe7d8]'
                    : 'border-2 border-[#8fb08d] bg-[#fafaf7]')
                }
              />
              <p className={'font-mono text-xs tracking-wider ' + ('now' in r && r.now ? 'text-[#1d5c38]' : 'text-[#6b7a70]')}>
                {r.stage}
              </p>
              <h3 className="mt-1.5 text-base font-bold text-[#14201a]">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-[#3a4a40]">{r.body}</p>
              <div className="mt-4 rounded-lg bg-[#eef1ea] px-3 py-2.5">
                <p className="text-[11px] font-semibold text-[#6b7a70]">{c.checkWord}</p>
                <p className="mt-0.5 text-xs leading-5 text-[#14201a]">{r.check}</p>
              </div>
            </li>
          ))}
        </ol>
      </Block>

      <Block label={c.fitLabel} title={c.fitTitle} desc={c.fitDesc}>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.fit.map((f, i) => (
            <div key={f.title} className="flex flex-col rounded-2xl border border-[#e3e6e0] bg-white p-6">
              <p className="font-mono text-3xl font-bold text-[#dbe7d8]">0{i + 1}</p>
              <h3 className="mt-3 text-base font-semibold text-[#14201a]">{f.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-[#3a4a40]">{f.body}</p>
              <a
                href={f.link.href}
                className="mt-4 text-sm font-medium text-[#1d5c38] underline decoration-[#c8d2c5] underline-offset-4 hover:decoration-[#1d5c38]"
              >
                {f.link.label} →
              </a>
            </div>
          ))}
        </div>
      </Block>

      <Block label={c.seekLabel} title={c.seekTitle}>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.seek.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#e3e6e0] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#1d5c38]">{s.title}</h3>
              <ul className="mt-3 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm leading-7 text-[#3a4a40]">
                    <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#9aa89e]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#14201a] p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-bold">{c.ctaTitle}</p>
            <p className="mt-1 text-sm text-[#c9d8c8]">{c.ctaBody}</p>
          </div>
          <a
            href="mailto:miaodh@fudan.edu.cn"
            className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#14201a] transition-colors hover:bg-[#dbe7d8]"
          >
            {c.ctaMail} · miaodh@fudan.edu.cn
          </a>
        </div>

        <p className="mt-10 text-xs leading-6 text-[#9aa89e]">{c.note}</p>
      </Block>
    </SubShell>
  )
}
