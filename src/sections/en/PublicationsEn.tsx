import { SectionHeading, AccentBadge, Badge } from '../Shared'

const papers = [
  {
    cite: 'Miao, D.‡; Zhu, Z.‡; Ding, Y.; Ning, Q.; Cheng, L.; Fang, Z.; Chen, Y.; Qin, G.; Shi, Y.; Li, G.; Mi, Q. Congruent and Oriented Crystallization of Mixed Sn–Pb Perovskite from the Nano- to Centimeter Scale. Adv. Sci. 2025, 12, 2412101.',
    tags: [{ text: 'First author', accent: true }, { text: 'IF 14.3' }, { text: 'Q1 Top' }],
  },
  {
    cite: 'Ning, Q.‡; Miao, D.‡; Ma, M.; Zhu, Z.; Chen, Y.; Ding, Y.; Li, W.; Zhou, W.; Shi, Y.; Ning, Z.; Mi, Q. Homogenizing Electron and Hole Transport Layers in Tin Perovskite Solar Cells to Enhance Photocurrent and Voltage. ACS Appl. Mater. Interfaces 2025, 17 (22), 32489–32496.',
    tags: [{ text: 'Co-first author', accent: true }, { text: 'IF 9.8' }],
  },
  {
    cite: 'Chen, Y.; Xu, C.; …; Miao, D.; …; Zhang, H. Stabilizing Efficient Perovskite/Silicon Tandem Solar Cells with Amorphous and Asymmetric Hole-Selective Contacts. Adv. Mater. 2026, 38, e73106.',
    tags: [{ text: 'IF 29.1' }, { text: 'Q1 Top' }],
  },
  {
    cite: 'Shi, Y.; Zhu, Z.; Miao, D.; Ding, Y.; Mi, Q. Interfacial Dipoles Boost Open-Circuit Voltage of Tin Halide Perovskite Solar Cells. ACS Energy Lett. 2024, 9 (4), 1895–1897.',
    tags: [{ text: 'IF 19.8' }, { text: 'Q1 Top' }],
  },
  {
    cite: 'Nat. Commun. 2021, 12, 3548 (perovskite single crystals, co-author).',
    tags: [{ text: 'IF 15.7' }, { text: 'Q1 Top' }],
  },
]

const underReview = [
  'Nature Energy (co-corresponding author, under review)',
  'Advanced Materials (first author, under review)',
  'Angew. Chem. Int. Ed. (co-author, under review)',
]

const patents = [
  'Zhang, H.; Miao, D.; et al. A pure-iodide wide-bandgap transparent perovskite solar cell and its preparation method.',
  'Zhang, H.; Chen, Y.; Miao, D. A mixed A-site-cation wide-bandgap perovskite material, and its preparation and application.',
  'Yu, P.; Miao, D.; et al. Antibacterial titanium alloy articles and preparation method. CN116727668A (2022).',
]

export default function PublicationsEn() {
  return (
    <section id="publications" className="scroll-mt-20 py-14">
      <SectionHeading index="04" label="Publications" title="Publications & Patents" />
      <p className="mb-8 text-sm leading-7 text-[#3a4a40]">
        8 papers published or under review with 324 citations, including 7 in top journals of semiconductor
        optoelectronic materials and devices (3 as first author, 1 as co-corresponding author, including one Nature
        sister journal), and 3 invention patents.
      </p>

      <h3 className="mb-4 text-base font-semibold text-[#14201a]">Selected Papers</h3>
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

      <h3 className="mb-4 mt-10 text-base font-semibold text-[#14201a]">Under Review</h3>
      <ul className="space-y-2 text-sm leading-7 text-[#3a4a40]">
        {underReview.map((u) => (
          <li key={u} className="flex gap-2">
            <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#9aa89e]" />
            <span>{u}</span>
          </li>
        ))}
      </ul>

      <h3 className="mb-4 mt-10 text-base font-semibold text-[#14201a]">Invention Patents</h3>
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
