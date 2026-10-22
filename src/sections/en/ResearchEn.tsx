import { SectionHeading, AccentBadge } from '../Shared'
import img165 from '@/assets/1.65.png'
import img3T from '@/assets/3T.png'
import imgAldQcm from '@/assets/ALD-QCM.webp'
import imgFPEABr from '@/assets/FPEABr.png'
import imgPMMA from '@/assets/PMMA.png'
import imgSC from '@/assets/SC.png'

const projects = [
  {
    title: 'Novel semiconductor materials and their photovoltaic applications',
    org: 'Fudan University · State Key Laboratory of Photovoltaic Science and Technology (postdoctoral project)',
    links: [{ label: 'Amorphous SAMs', href: 'papers/am-2026.pdf' }],
    body: [
      'Device platform: participated in the installation, commissioning, operation, and maintenance of vacuum coating systems (magnetron sputtering, ALD, vapor deposition), establishing a full chain from materials development and device processing to performance characterization.',
      'Novel tandem cells: developed a series of pure-iodide wide-bandgap perovskites with an innovative green antisolvent process, fundamentally eliminating iodide–bromide phase segregation.',
      'Large-area perovskite–Si tandems: contributed to a National Key R&D Program jointly with Fudan University, the University of Hong Kong, and Trina Solar, developing large-area modules for space photovoltaics.',
    ],
    img: img165,
    metrics: [
      { num: '22.7%', label: '1 cm² semi-transparent single junction (certified by SIMIT, CAS)' },
      { num: '34%', label: 'Perovskite–Si tandem (certified by SIMIT, CAS)' },
      { num: '29%', label: 'Certified efficiency of a >200 cm² module' },
      { num: '1000 h', label: '85 °C illumination / damp-heat aging, ≤10% loss' },
    ],
  },
  {
    title: 'Efficient all-perovskite tandem devices',
    org: 'ShanghaiTech University · School of Physical Science and Technology',
    links: [{ label: '3T additive', href: 'papers/as-2025.pdf' }],
    body: [
      'Additive engineering for better film crystallization: comprehensive interface engineering of Sn–Pb and wide-bandgap subcells systematically improved the oxidation resistance and efficiency of Sn–Pb mixed and wide-bandgap I–Br perovskites, reaching world-leading levels.',
      'In-situ ALD–QCM probing of nanoscale film deposition: a quartz crystal microbalance (QCM) inside the atomic layer deposition (ALD) chamber records, as a frequency (Hz) signal, the mass change from gas adsorption and reaction, verifying film growth cycle by cycle at the nanoscale; this was used to map how oxygen reacts with the perovskite layer and to grow a targeted SnO₂ interlayer that further raised device efficiency.',
    ],
    imgStack: [img3T, imgAldQcm],
    metrics: [
      { num: '23%', label: 'Certified Sn–Pb perovskite efficiency' },
      { num: '29%', label: 'Certified all-perovskite tandem efficiency' },
    ],
  },
  {
    title: 'Sn-based perovskites and their photovoltaic applications',
    org: 'ShanghaiTech University · School of Physical Science and Technology',
    links: [
      { label: 'FPEABr', href: 'papers/ael-2024.pdf' },
      { label: 'PMMA', href: 'papers/ami-2025.pdf' },
    ],
    body: [
      'Through additive and interface engineering — including interfacial dipole layers for energy-level alignment and doping optimization at both transport-layer interfaces — systematically improved film crystallinity, processing, and device efficiency of Sn-based perovskites, ranking first worldwide at the time.',
    ],
    imgPair: [imgFPEABr, imgPMMA],
    metrics: [
      { num: '16%', label: 'Certified small-area efficiency (SIMIT, CAS)' },
      { num: '15%', label: 'Certified 1 cm² efficiency (CPVT, Wuxi)' },
    ],
  },
  {
    title: 'Design and growth of perovskite single crystals',
    org: 'ShanghaiTech University · School of Physical Science and Technology',
    body: [
      'Synthesized high-quality materials (SnI2, PbI2, and doped semiconductors) in home-made vacuum-sealed glass/quartz ampoules; prepared perovskite precursors and hole-transport materials (FAI, NiOx) by chemical synthesis; purified raw materials by zone refining and grew SnPbI4, CsPbBr3 and other single crystals by the Bridgman method.',
    ],
    img: imgSC,
    metrics: [{ num: '1st Prize', label: '2021 ShanghaiTech Innovation Competition' }],
  },
  {
    title: 'Nano-doped metallic materials',
    org: 'SUSTech · Department of Materials Science and Engineering',
    links: [{ label: 'Ti–Ag alloy', href: 'papers/patent-cn116727668a.pdf' }],
    body: [
      'For antibacterial modification of titanium alloys, Ti powders were mixed with nano-sized Ag- or Cu-containing antibacterial powders. Based on the thermodynamics and kinetics of antibacterial-phase dissolution and the relationship between precipitate spacing and antibacterial performance, high antibacterial efficacy was achieved at low additive content and reduced cost.',
    ],
    metrics: [{ num: '1', label: 'Invention patent CN116727668A' }],
  },
]

export default function ResearchEn() {
  return (
    <section id="research" className="scroll-mt-20 py-14">
      <SectionHeading index="03" label="Research" title="Research Projects" />
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
                      {l.label} ↗
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
              <img src={p.img} alt="" className="mx-auto mt-5 w-[400px] max-w-full" />
            )}
            {'imgStack' in p && p.imgStack && (
              <div className="mt-5 flex flex-col items-center gap-4">
                {p.imgStack.map((src) => (
                  <img key={src} src={src} alt="" className="h-auto max-h-[140px] w-auto max-w-full" />
                ))}
              </div>
            )}
            {'imgPair' in p && p.imgPair && (
              <div className="mt-5 flex items-center justify-center gap-6">
                {p.imgPair.map((src) => (
                  <img key={src} src={src} alt="" className="h-[146px] w-auto" />
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
        <h3 className="mb-4 text-base font-semibold text-[#14201a]">Conferences</h3>
        <div className="space-y-3 text-sm leading-7 text-[#3a4a40]">
          <p>
            <AccentBadge>2026</AccentBadge> The 12th Young Scholars Forum on Perovskite Materials and Devices,
            Qingdao, China.
          </p>
          <p>
            <AccentBadge>2026</AccentBadge> The 19th International Photovoltaic Power Generation and Smart Energy
            Conference (SNEC), Shanghai, China.
          </p>
          <p>
            <AccentBadge>2025</AccentBadge> The 18th International Photovoltaic Power Generation and Smart Energy
            Conference (SNEC), Shanghai, China.
          </p>
          <p>
            <AccentBadge>2024 · Poster</AccentBadge> Materials Research Society Fall Meeting, Boston, USA —
            Congruent and Oriented Crystallization of Mixed Sn–Pb Perovskite from the Nano- to Centimeter Scale.
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
