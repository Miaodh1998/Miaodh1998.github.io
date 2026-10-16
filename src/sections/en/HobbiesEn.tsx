import { SectionHeading, Badge } from '../Shared'

const groups = [
  {
    label: 'Sports',
    items: ['Football', 'Skateboarding', 'Running'],
  },
  {
    label: 'Literature',
    items: ['Magic realism', 'Rural literature', 'Classical literature', 'Web novels'],
  },
  {
    label: 'Music',
    items: ['Xu Wei', 'Sound Toy', 'Wu Tiao Ren', 'Omnipotent Youth Society'],
  },
  {
    label: 'Film',
    items: ['New Wave', 'B-movies', 'Wuxia', 'Hong Kong cinema'],
  },
  {
    label: 'AI',
    items: ['Kimi', 'DeepSeek', 'ChatGPT'],
  },
]

export default function HobbiesEn() {
  return (
    <section id="hobbies" className="scroll-mt-20 py-14">
      <SectionHeading index="06" label="Life" title="Hobbies" />
      <p className="mb-8 text-sm leading-7 text-[#3a4a40]">
        Work–life balance beyond research.
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
