import { SectionHeading, AccentBadge, Badge } from './Shared'

const papers = [
  {
    cite: 'Miao, D.‡; Zhu, Z.‡; Ding, Y.; Ning, Q.; Cheng, L.; Fang, Z.; Chen, Y.; Qin, G.; Shi, Y.; Li, G.; Mi, Q. Congruent and Oriented Crystallization of Mixed Sn–Pb Perovskite from the Nano- to Centimeter Scale. Adv. Sci. 2025, 12, 2412101.',
    tags: [{ text: '第一作者', accent: true }, { text: 'IF 14.3' }, { text: '一区 TOP' }],
  },
  {
    cite: 'Ning, Q.‡; Miao, D.‡; Ma, M.; Zhu, Z.; Chen, Y.; Ding, Y.; Li, W.; Zhou, W.; Shi, Y.; Ning, Z.; Mi, Q. Homogenizing Electron and Hole Transport Layers in Tin Perovskite Solar Cells to Enhance Photocurrent and Voltage. ACS Appl. Mater. Interfaces 2025, 17 (22), 32489–32496.',
    tags: [{ text: '共同一作', accent: true }, { text: 'IF 9.8' }],
  },
  {
    cite: 'Advanced Materials 2026, 38, e73106（钙钛矿-晶硅叠层方向，共同作者）.',
    tags: [{ text: 'IF 29.1' }, { text: '一区 TOP' }],
  },
  {
    cite: 'Shi, Y.; Zhu, Z.; Miao, D.; Ding, Y.; Mi, Q. Interfacial Dipoles Boost Open-Circuit Voltage of Tin Halide Perovskite Solar Cells. ACS Energy Lett. 2024, 9 (4), 1895–1897.',
    tags: [{ text: 'IF 19.8' }, { text: '一区 TOP' }],
  },
  {
    cite: 'Nat. Commun. 2021, 12, 3548（钙钛矿单晶材料方向，共同作者）.',
    tags: [{ text: 'IF 15.7' }, { text: '一区 TOP' }],
  },
]

const underReview = [
  'Nature Energy（共同通讯作者，under review）',
  'Advanced Materials（第一作者，under review）',
  'Angew. Chem. Int. Ed.（共同作者，under review）',
]

const patents = [
  '张鸿，缪东昊 等. 一种纯碘宽带隙透明钙钛矿太阳电池及其制备方法.',
  '张鸿，陈一凡，缪东昊. 一种混合 A 位阳离子宽带隙钙钛矿材料及其制备方法和应用.',
  '余鹏，缪东昊 等. 抗菌钛合金制品及其制备方法. CN116727668A (2022).',
]

export default function Publications() {
  return (
    <section id="publications" className="scroll-mt-20 py-14">
      <SectionHeading index="04" label="Publications" title="论文与专利" />
      <p className="mb-8 text-sm leading-7 text-[#3a4a40]">
        累积发表 / 在投论文 8 篇，引用量 224 次。
      </p>

      <h3 className="mb-4 text-base font-semibold text-[#14201a]">代表性论文</h3>
      <div className="space-y-5">
        {papers.map((p, i) => (
          <div key={i} className="rounded-xl border border-[#e3e6e0] bg-white p-5">
            <p className="text-sm leading-7 text-[#3a4a40]">{p.cite}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) =>
                t.accent ? <AccentBadge key={t.text}>{t.text}</AccentBadge> : <Badge key={t.text}>{t.text}</Badge>,
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-4 mt-10 text-base font-semibold text-[#14201a]">在投论文</h3>
      <ul className="space-y-2 text-sm leading-7 text-[#3a4a40]">
        {underReview.map((u) => (
          <li key={u} className="flex gap-2">
            <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#9aa89e]" />
            <span>{u}</span>
          </li>
        ))}
      </ul>

      <h3 className="mb-4 mt-10 text-base font-semibold text-[#14201a]">发明专利</h3>
      <ul className="space-y-2 text-sm leading-7 text-[#3a4a40]">
        {patents.map((pt) => (
          <li key={pt} className="flex gap-2">
            <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#9aa89e]" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
