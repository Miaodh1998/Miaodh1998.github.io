import { SectionHeading } from '../Shared'

type Item = { t: string; h?: string }

const groups: { label: string; items: Item[] }[] = [
  {
    label: 'Sports',
    items: [{ t: 'Football' }, { t: 'Skateboarding' }, { t: 'Running' }],
  },
  {
    label: 'Literature',
    items: [
      { t: 'Magic realism', h: 'https://baike.baidu.com/item/魔幻现实主义' },
      { t: 'Rural literature', h: 'https://baike.baidu.com/item/乡土文学' },
      { t: 'Classical literature', h: 'https://baike.baidu.com/item/古典文学' },
      { t: 'Web novels', h: 'https://baike.baidu.com/item/网络小说' },
    ],
  },
  {
    label: 'Music',
    items: [
      { t: 'Xu Wei', h: 'https://baike.baidu.com/item/许巍' },
      { t: 'Sound Toy', h: 'https://baike.baidu.com/item/声音玩具乐队' },
      { t: 'Wu Tiao Ren', h: 'https://baike.baidu.com/item/五条人' },
      { t: 'Omnipotent Youth Society', h: 'https://baike.baidu.com/item/万能青年旅店' },
    ],
  },
  {
    label: 'Film',
    items: [
      { t: 'New Wave', h: 'https://baike.baidu.com/item/法国新浪潮' },
      { t: 'B-movies', h: 'https://baike.baidu.com/item/B级片' },
      { t: 'Wuxia', h: 'https://baike.baidu.com/item/武侠片' },
      { t: 'Hong Kong cinema', h: 'https://baike.baidu.com/item/香港电影' },
    ],
  },
  {
    label: 'AI',
    items: [
      { t: 'Kimi', h: 'https://www.kimi.com' },
      { t: 'DeepSeek', h: 'https://www.deepseek.com' },
      { t: 'ChatGPT', h: 'https://chatgpt.com' },
    ],
  },
]

const badgeCls =
  'inline-block rounded-full border border-[#d8ddd4] bg-white px-2.5 py-0.5 text-xs text-[#4a5a50]'

function ItemBadge({ it }: { it: Item }) {
  if (!it.h) return <span className={badgeCls}>{it.t}</span>
  return (
    <a
      href={it.h}
      target="_blank"
      rel="noreferrer"
      className={`${badgeCls} transition-colors hover:border-[#1d5c38] hover:text-[#1d5c38]`}
    >
      {it.t}
    </a>
  )
}

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
                <ItemBadge key={it.t} it={it} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
