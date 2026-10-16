import { SectionHeading, Badge } from './Shared'

const groups = [
  {
    label: '体育运动',
    items: ['足球', '滑板', '跑步'],
  },
  {
    label: '文学',
    items: ['魔幻现实主义', '乡土文学', '古典文学', '网文'],
  },
  {
    label: '音乐',
    items: ['许巍', '声音玩具', '五条人', '万能青年旅店'],
  },
  {
    label: '电影',
    items: ['新浪潮', 'B级片', '武侠', '港片'],
  },
  {
    label: 'AI',
    items: ['Kimi', 'DeepSeek', 'ChatGPT'],
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-20 py-14">
      <SectionHeading index="06" label="Life" title="爱好" />
      <p className="mb-8 text-sm leading-7 text-[#3a4a40]">
        Work &amp; Life Balance：科研之外，保持热爱。
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
