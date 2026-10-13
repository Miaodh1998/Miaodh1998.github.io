import { SectionHeading, Badge } from '../Shared'

const groups = [
  {
    label: 'Equipment & Instrumentation',
    items: ['ALD', 'PVD', 'CVD', 'Glovebox', 'In-situ PL setup', 'Equipment installation, commissioning & maintenance', 'Tiered lab-safety system'],
  },
  {
    label: 'Device Processing',
    items: ['Spin-coating', 'Gas quenching', 'Flash evaporation', 'Blade-coating', 'Large-area devices', 'Semi-transparent devices', 'Single junctions: 1.25/1.4/1.5/1.65/1.77/1.95 eV', 'All-perovskite tandems', 'Perovskite–Si tandems', 'Vacuum ampoule sealing', 'Bridgman single-crystal growth', 'Zone refining'],
  },
  {
    label: 'Characterization',
    items: ['SEM (10 years)', 'XPS', 'P-XRD', 'SC-XRD', 'GIXRD', 'AFM', 'FTIR', 'Raman Mapping', 'PL / TRPL', 'PLQY / QFLS', 'PL Mapping', 'EQE / EQE Mapping', 'J-V & SPO', 'UV-Vis', 'NMR', 'TOP-SIMS'],
  },
  {
    label: 'Software',
    items: ['Origin', 'Office', 'PS', 'Jade', 'Olex2', 'Avantage', 'MestReNova', 'VESTA', 'GIWAXS-tools', 'Blender', 'Solidworks', 'AutoCAD', '3ds Max'],
  },
  {
    label: 'Languages & Certificates',
    items: ['English (CET-6)', 'Japanese (beginner)'],
  },
]

export default function SkillsEn() {
  return (
    <section id="skills" className="scroll-mt-20 py-14">
      <SectionHeading index="05" label="Stack" title="Skills" />
      <p className="mb-8 text-sm leading-7 text-[#3a4a40]">
        Solid background in semiconductor processing and device physics, with 7 years of experience in vacuum
        thin-film deposition and device fabrication. Multidisciplinary R&D experience spanning metallic materials,
        nanomaterials, materials synthesis, crystal cutting and polishing, thin-film deposition, and device
        fabrication, with extensive experience in process optimization and instrument repair.
      </p>
      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.label}>
            <h3 className="mb-3 text-sm font-semibold text-[#14201a]">{g.label}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <Badge key={it}>{it}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
