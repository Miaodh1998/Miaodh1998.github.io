import { SectionHeading, AccentBadge } from './Shared'
import img165 from '@/assets/1.65.png'
import img3T from '@/assets/3T.png'
import imgFPEABr from '@/assets/FPEABr.png'
import imgPMMA from '@/assets/PMMA.png'
import imgSC from '@/assets/SC.png'

const projects = [
  {
    title: '新型半导体材料的开发及其光伏应用',
    org: '复旦大学 · 国家光伏科学与技术重点实验室（博士后项目）',
    links: [{ label: 'AM', href: 'papers/am-2026.pdf' }],
    body: [
      '器件平台搭建与维护：参与磁控溅射、原子层沉积、气相沉积等真空镀膜系统的安装、调试、运行与维护，构建从材料研发、器件加工到性能表征的完整技术链条。',
      '新型叠层电池研发：设计开发多种新型纯碘宽带隙钙钛矿材料，创新性采用绿色反溶剂制备工艺，从根本上解决碘溴分相问题。',
      '高效稳定大面积钙硅叠层：协同复旦大学、香港大学、天合光能合作国家重点研发计划项目，开发适配空天光伏的大面积组件。',
    ],
    img: img165,
    metrics: [
      { num: '22.7%', label: '1 cm² 半透明单结（中科院微系统所认证）' },
      { num: '34%', label: '钙钛矿-晶硅叠层（中科院微系统所认证）' },
      { num: '29%', label: '>200 cm² 大面积组件认证效率' },
      { num: '1000 h', label: '85 ℃ 光照 / 双 85 老化，效率损失 ≤10%' },
    ],
  },
  {
    title: '高效全钙钛矿叠层器件制备',
    org: '上海科技大学 · 物质科学与技术学院',
    links: [{ label: 'AS', href: 'papers/as-2025.pdf' }],
    body: [
      '通过对锡铅混合器件及宽带隙上下界面的综合调控，系统性提升锡铅混合钙钛矿和宽带隙碘溴钙钛矿的抗氧化能力与器件效率，达国际领先水平。',
    ],
    img: img3T,
    metrics: [
      { num: '23%', label: '锡铅混合钙钛矿认证效率' },
      { num: '29%', label: '全钙钛矿叠层认证效率' },
    ],
  },
  {
    title: '锡基钙钛矿材料的开发及其光伏应用',
    org: '上海科技大学 · 物质科学与技术学院',
    links: [
      { label: 'AEL', href: 'papers/ael-2024.pdf' },
      { label: 'AMI', href: 'papers/ami-2025.pdf' },
    ],
    body: [
      '通过添加剂工程和界面工程，创新性引入界面偶极层实现能级对齐，对上下传输层界面掺杂优化，系统性提升锡基钙钛矿薄膜结晶质量与器件效率，达当时国际第一水平。',
    ],
    imgPair: [imgFPEABr, imgPMMA],
    metrics: [
      { num: '16%', label: '小面积认证效率（中科院微系统所）' },
      { num: '15%', label: '1 cm² 器件认证效率（无锡国家光伏质检中心）' },
    ],
  },
  {
    title: '半导体钙钛矿单晶材料的设计与生长',
    org: '上海科技大学 · 物质科学与技术学院',
    body: [
      '使用自制密封玻璃/石英管真空封管合成高质量材料（SnI₂、PbI₂ 及掺杂半导体），通过化学合成制备钙钛矿原材料与空穴传输层材料（FAI、NiOx 等），以区域熔融法提纯、布里奇曼法生长 SnPbI₄、CsPbBr₃ 等单晶。',
    ],
    img: imgSC,
    metrics: [{ num: '一等奖', label: '2021 上海科技大学创新创意大赛' }],
  },
  {
    title: '纳米掺杂金属材料制备',
    org: '南方科技大学 · 材料科学与工程系',
    links: [{ label: '专利', href: 'papers/patent-cn116727668a.pdf' }],
    body: [
      '针对钛合金抗菌性能改性，将钛合金粉末与纳米含银/含铜抗菌粉末混合成型，基于抗菌析出相溶解的动力学、热力学过程及析出相平均间距与抗菌性能的关系，实现低添加量下的高效抗菌并降低成本。',
    ],
    metrics: [{ num: '1 项', label: '发明专利 CN116727668A' }],
  },
]

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 py-14">
      <SectionHeading index="03" label="Research" title="研究项目" />
      <div className="space-y-8">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border border-[#e3e6e0] bg-white p-6">
            <h3 className="text-lg font-semibold text-[#14201a]">
              {p.title}
              {'links' in p && p.links && (
                <span className="ml-2 inline-flex gap-1.5 align-middle">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-[#d8ddd4] bg-white px-1.5 py-0.5 text-[11px] font-medium text-[#4a5a50] transition-colors hover:border-[#1d5c38] hover:text-[#1d5c38]"
                    >
                      {l.label} PDF ↗
                    </a>
                  ))}
                </span>
              )}
            </h3>
            <p className="mt-1 text-xs text-[#6b7a70]">{p.org}</p>
            <ul className="mt-4 space-y-1.5 text-sm leading-7 text-[#3a4a40]">
              {p.body.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#9aa89e]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {'img' in p && p.img && (
              <img src={p.img} alt="" className="mx-auto mt-5 w-[300px] max-w-full" />
            )}
            {'imgPair' in p && p.imgPair && (
              <div className="mt-5 flex items-center justify-center gap-6">
                {p.imgPair.map((src) => (
                  <img key={src} src={src} alt="" className="h-[110px] w-auto" />
                ))}
              </div>
            )}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-[#f2f5ef] p-3">
                  <p className="text-lg font-bold text-[#1d5c38]">{m.num}</p>
                  <p className="mt-0.5 text-[11px] leading-4 text-[#6b7a70]">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-base font-semibold text-[#14201a]">学术会议</h3>
        <div className="space-y-3 text-sm leading-7 text-[#3a4a40]">
          <p>
            <AccentBadge>2026</AccentBadge> 第十二届"钙钛矿材料与器件青年学者论坛"，山东青岛。
          </p>
          <p>
            <AccentBadge>2026</AccentBadge> 第十九届国际太阳能光伏与智慧能源大会（SNEC），上海。
          </p>
          <p>
            <AccentBadge>2025</AccentBadge> 第十八届国际太阳能光伏与智慧能源大会（SNEC），上海。
          </p>
          <p>
            <AccentBadge>2024 · Poster</AccentBadge>{' '}
            Materials Research Society Fall Meeting, Boston, USA — Congruent and Oriented Crystallization of Mixed
            Sn–Pb Perovskite from the Nano- to Centimeter Scale.
          </p>
          <p>
            <AccentBadge>2021 · Presentation</AccentBadge> The 3rd Innovation &amp; Entrepreneurship Summit of
            ShanghaiTech University.
          </p>
        </div>
      </div>
    </section>
  )
}
