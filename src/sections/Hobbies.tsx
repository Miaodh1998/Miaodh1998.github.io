import { SectionHeading } from './Shared'

type Item = { t: string; h?: string }

const groups: { label: string; items: Item[] }[] = [
  {
    label: '体育运动',
    items: [{ t: '足球' }, { t: '滑板' }, { t: '跑步' }],
  },
  {
    label: '文学',
    items: [
      { t: '魔幻现实主义', h: 'https://baike.baidu.com/item/魔幻现实主义' },
      { t: '乡土文学', h: 'https://baike.baidu.com/item/乡土文学' },
      { t: '古典文学', h: 'https://baike.baidu.com/item/古典文学' },
      { t: '网文', h: 'https://baike.baidu.com/item/网络小说' },
    ],
  },
  {
    label: '音乐',
    items: [
      { t: '许巍', h: 'https://baike.baidu.com/item/许巍' },
      { t: '声音玩具', h: 'https://baike.baidu.com/item/声音玩具乐队' },
      { t: '五条人', h: 'https://baike.baidu.com/item/五条人' },
      { t: '万能青年旅店', h: 'https://baike.baidu.com/item/万能青年旅店' },
    ],
  },
  {
    label: '电影',
    items: [
      { t: '新浪潮', h: 'https://baike.baidu.com/item/法国新浪潮' },
      { t: 'B级片', h: 'https://baike.baidu.com/item/B级片' },
      { t: '武侠', h: 'https://baike.baidu.com/item/武侠片' },
      { t: '港片', h: 'https://baike.baidu.com/item/香港电影' },
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
                <ItemBadge key={it.t} it={it} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
