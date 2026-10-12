import { SectionHeading, AccentBadge, Badge } from './Shared'
import imgGroup from '@/assets/group.jpg'
import imgPhd from '@/assets/phd.jpg'
import imgBachelor from '@/assets/bachelor.jpg'

type Entry = {
  period: string
  org: string
  role: string
  points: string[]
  img?: string
  badges?: { text: string; accent?: boolean }[]
}

const entries: Entry[] = [
  {
    period: '2025.09 - 至今',
    org: '复旦大学 · 光电研究院',
    role: '博士后',
    points: [
      '研究方向：光伏半导体、钙硅叠层光电器件、新型半导体材料研发与稳定性研究。',
      '作为课题组核心成员参与国家光伏科学与技术重点实验室大型真空镀膜系统（磁控溅射、原子层沉积、气相沉积等）的安装、调试、运行与维护。',
      '作为实验室安全员，系统性排查实验室安全风险，建立二级单位实验室安全分级系统',
    ],
    img: imgGroup,
    badges: [{ text: '参与国家重点研发计划项目', accent: true }, { text: '第80批面上资助申报', accent: true }],
  },
  {
    period: '2020.09 - 2025.07',
    org: '上海科技大学 · 材料科学与工程',
    role: '博士（保送硕博连读）',
    points: [
      '研究方向：光伏半导体、叠层光电器件、薄膜工艺研发、单晶材料生长。',
      '参与国家重点研发计划项目（No. 22075182）与 Shell-CAS 前沿科学项目（No. PT78963）。',
      '2021.09 - 2021.12 担任《实验室安全与科研诚信》课程教学助理',
    ],
    img: imgPhd,
    badges: [
      { text: '研究生学业奖学金 ×5', accent: true },
      { text: '上科大创新创业大赛一等奖 (2021)', accent: true },
    ],
  },
  {
    period: '2020.07 - 2020.09',
    org: '南方科技大学 · 人文社科中心',
    role: '科研助理',
    points: ['文物收纳整理、陶片分档回溯、电子登记信息、协助开设展览'],
  },
  {
    period: '2019.07 - 2019.09',
    org: '贝特瑞新材料集团 · 分析测试中心',
    role: '实习工程师',
    points: ['正负极材料性能分析、SEM 观测材料形貌、数据整理归纳'],
  },
  {
    period: '2016.09 - 2020.07',
    org: '南方科技大学 · 材料科学与工程',
    role: '学士',
    points: [
      '研究方向：金属材料、纳米材料制备、扫描电镜 SEM 探测。',
      '参与全国大学生创新创业项目 1 项（省级立项，优秀结题）。',
      '南科大书友会协会会长，树仁书院 1626 班心理委员，校级足球比赛冠军 ×3',
    ],
    img: imgBachelor,
    badges: [{ text: '新生奖学金' }, { text: '足球校赛冠军 ×3' }],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-14">
      <SectionHeading index="02" label="Experience" title="教育与工作经历" />
      <div className="space-y-10">
        {entries.map((e) => (
          <div key={e.org} className="relative border-l-2 border-[#dfe4dc] pl-6">
            <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[#1d5c38]" />
            <p className="font-mono text-xs text-[#6b7a70]">{e.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-[#14201a]">{e.org}</h3>
            <p className="text-sm font-medium text-[#1d5c38]">{e.role}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-7 text-[#3a4a40]">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#9aa89e]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {e.img && (
              <img
                src={e.img}
                alt=""
                className="mx-auto mt-5 aspect-[3/2] w-[60%] max-w-[267px] rounded-xl border border-[#e3e6e0] object-cover shadow-sm"
              />
            )}
            {e.badges && (
              <div className="mt-3 flex flex-wrap gap-2">
                {e.badges.map((b) =>
                  b.accent ? <AccentBadge key={b.text}>{b.text}</AccentBadge> : <Badge key={b.text}>{b.text}</Badge>,
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
