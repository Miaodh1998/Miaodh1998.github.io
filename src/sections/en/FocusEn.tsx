import { SectionHeading } from '../Shared'

const items = [
  {
    title: 'Wide-bandgap perovskites and tandem devices',
    body: 'Developed a series of novel pure-iodide wide-bandgap perovskites. An innovative green antisolvent process fundamentally eliminates the iodide–bromide phase segregation common in wide-bandgap materials, enabling efficient and stable semi-transparent single-junction cells and perovskite–silicon tandem cells.',
  },
  {
    title: 'Large-area modules and operational stability',
    body: 'Contribute to a National Key R&D Program jointly carried out by Fudan University, the University of Hong Kong, and Trina Solar, developing large-area modules for space photovoltaics and addressing the operational stability of tandem cells under high irradiance (≤10% efficiency loss after 1000 h at 85 °C under illumination).',
  },
  {
    title: 'Sn-based and Sn–Pb mixed perovskites',
    body: 'Through additive engineering, interfacial dipole layers for energy-level alignment, and doping optimization at the transport-layer interfaces, systematically improved the crystallinity and device efficiency of Sn-based and Sn–Pb perovskites; the certified efficiency of the Sn-based devices ranked first worldwide at the time.',
  },
  {
    title: 'Single-crystal growth and materials synthesis',
    body: 'Synthesized high-quality halide precursors in home-made vacuum-sealed glass/quartz ampoules, purified raw materials by zone refining, and grew perovskite single crystals by the Bridgman method — building an end-to-end capability from raw materials to device performance.',
  },
]

export default function FocusEn() {
  return (
    <section id="focus" className="scroll-mt-20 py-14">
      <SectionHeading index="01" label="Focus" title="Research Focus" />
      <div className="space-y-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-[#e3e6e0] bg-white p-6">
            <h3 className="text-base font-semibold text-[#14201a]">{it.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#3a4a40]">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
