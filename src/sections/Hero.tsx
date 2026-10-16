import photo from '@/assets/photo.jpg'

export default function Hero() {
  return (
    <section id="top" className="py-20 sm:py-28">
      <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-stretch sm:gap-12">
        <div className="min-w-0 flex-1">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#6b7a70]">
            Resume · Updated 2026-10
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-[#14201a] sm:text-6xl">缪东昊</h1>
          <p className="mt-4 text-xl font-medium text-[#2a3a30]">
            复旦大学 光电研究院 · 博士后
          </p>
          <p className="mt-1 text-sm text-[#6b7a70]">
            钙钛矿光伏 · 叠层太阳能电池 · 半导体材料与器件
          </p>

          <p className="mt-8 max-w-2xl leading-8 text-[#3a4a40]">
            学士毕业于南方科技大学，博士毕业于上海科技大学，现为复旦大学光电研究院博士后。
            长期从事半导体钙钛矿材料与光伏器件研究，覆盖从材料合成、单晶生长、真空薄膜工艺到器件制备与表征的完整技术链条。
            代表性成果包括认证效率 34% 的钙钛矿-晶硅叠层电池、22.7% 的 1 cm² 半透明宽带隙单结电池，锡基钙钛矿16%认证效率（世界纪录），
            以及合作制备面积达 200 cm² 以上、认证效率 29% 的大面积叠层组件，均达到国际领先水平。
            掌握 AI 工具的开发与迭代，善于借助 AI 与大数据分析优化工作流程、提升效率。
          </p>
        </div>
        <figure className="flex shrink-0 flex-col">
          <img
            src={photo}
            alt="缪东昊"
            className="h-64 w-52 rounded-2xl border border-[#e3e6e0] object-cover shadow-sm sm:h-auto sm:min-h-0 sm:flex-1 sm:w-64"
            style={{ objectPosition: '28% 55%' }}
          />
          <figcaption className="mt-2 text-center text-xs text-[#6b7a70]">
            缪东昊 · 2026.08 · 七彩丹霞
          </figcaption>
        </figure>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { num: '34%', label: '钙钛矿-晶硅叠层认证效率' },
          { num: '22.7%', label: '1 cm² 半透明宽带隙电池认证效率' },
          { num: '16%', label: '锡基钙钛矿电池世界纪录' },
          { num: '8篇', label: '发表/在投论文' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-[#e3e6e0] bg-white p-4">
            <p className="text-2xl font-bold text-[#1d5c38]">{s.num}</p>
            <p className="mt-1 text-xs leading-5 text-[#6b7a70]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-y-1.5 text-center text-sm text-[#4a5a50] sm:grid-cols-2">
        <p>
          email:{' '}
          <a href="mailto:miaodh@fudan.edu.cn" className="underline decoration-[#c8d2c5] underline-offset-4 hover:text-[#1d5c38]">
            miaodh@fudan.edu.cn
          </a>
        </p>
        <p>tel/wechat: (+86)150-2671-7860</p>
        <p>web: miaodh.site</p>
        <p>微信公众号: MH的情诗</p>
      </div>
    </section>
  )
}
