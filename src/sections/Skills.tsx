import { SectionHeading, Badge } from './Shared'

const groups = [
  {
    label: '器件工艺',
    items: ['ALD', 'PVD', 'CVD', 'Plasma', 'Spin-coating', 'Blade-coating', '真空封管', '布里奇曼单晶生长', '区域熔融提纯'],
  },
  {
    label: '表征技术',
    items: ['SEM（十年经验）', 'XPS', 'P-XRD', 'SC-XRD', 'GIXRD', 'AFM', 'FTIR', 'Raman Mapping', 'PL / TRPL', 'PLQY / QFLS', 'PL Mapping', 'EQE / EQE Mapping', 'J-V & SPO', 'UV-Vis', 'NMR', 'TOP-SIMS'],
  },
  {
    label: '软件工具',
    items: ['Origin', 'Office', 'Jade', 'Olex2', 'Avantage', 'MestReNova', 'VESTA', 'GIWAXS-tools', 'Blender', 'Solidworks', 'AutoCAD', '3ds Max'],
  },
  {
    label: '语言与证书',
    items: ['英语 CET-6', '日语（入门）'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-14">
      <SectionHeading index="05" label="Stack" title="专业技能" />
      <p className="mb-8 text-sm leading-7 text-[#3a4a40]">
        具备扎实的半导体工艺与器件物理基础，7 年真空薄膜沉积技术与器件制备经验；具备多学科研发背景，横跨金属材料、
        材料合成、薄膜沉积及器件制备，并具有丰富的工艺优化经验及仪器维修能力。
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
