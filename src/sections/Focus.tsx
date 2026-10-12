import { SectionHeading } from './Shared'

const items = [
  {
    title: '宽带隙钙钛矿与叠层器件',
    body: '设计开发多种新型纯碘宽带隙钙钛矿材料，创新性采用绿色反溶剂工艺，从根本上解决常规宽带隙材料的碘溴分相问题，实现高效稳定的半透明单结与钙钛矿-晶硅叠层电池。',
  },
  {
    title: '大面积组件与运行稳定性',
    body: '参与复旦大学、香港大学、天合光能合作的国家重点研发计划项目，开发适配空天光伏的大面积组件，攻克高辐照下叠层电池的运行稳定性难题（85 ℃ 光照 1000 h 效率损失 ≤10%）。',
  },
  {
    title: '锡基与锡铅混合钙钛矿',
    body: '通过添加剂工程、界面偶极层能级对齐与传输层掺杂优化，系统性提升锡基与锡铅混合钙钛矿的结晶质量与器件效率，锡基器件认证效率达当时国际第一水平。',
  },
  {
    title: '单晶材料生长与材料合成',
    body: '以真空封管技术合成高质量卤化物原料，通过区域熔融法提纯、布里奇曼法生长钙钛矿单晶，构建从材料源头到器件性能的完整研究能力。',
  },
]

export default function Focus() {
  return (
    <section id="focus" className="scroll-mt-20 py-14">
      <SectionHeading index="01" label="Focus" title="研究主线" />
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
