import { SectionHeading, AccentBadge, Badge } from '../Shared'
import imgGroup from '@/assets/group.jpg'
import imgPhd from '@/assets/phd.jpg'
import imgBachelor from '@/assets/bachelor.jpg'

type Entry = {
  period: string
  org: string
  role: string
  points: string[]
  learn?: string
  img?: string
  badges?: { text: string; accent?: boolean }[]
}

const entries: Entry[] = [
  {
    period: '2025.09 - Present',
    org: 'Fudan University · Institute of Optoelectronics',
    role: 'Postdoctoral Researcher',
    points: [
      'Research: photovoltaic semiconductors, perovskite–silicon tandem devices, novel semiconductor materials, and operational stability.',
      'Core member of the group at the State Key Laboratory of Photovoltaic Science and Technology: installation, commissioning, operation, and maintenance of large vacuum coating systems (magnetron sputtering, ALD, and vapor deposition).',
      'Laboratory safety officer: systematic risk inspection and a tiered laboratory-safety system established for the secondary unit',
      'Led a four-person team as a subgroup leader, delivering the overall project targets',
    ],
    learn: 'University–industry teamwork · Small-team leadership · Project-driven · Multi-party communication · AI empowerment',
    img: imgGroup,
    badges: [
      { text: 'National Key R&D Program participant', accent: true },
      { text: 'NSFC General Program application (80th batch)', accent: true },
    ],
  },
  {
    period: '2020.09 - 2025.07',
    org: 'ShanghaiTech University · Materials Science and Engineering',
    role: 'Ph.D. (direct doctoral track, recommended admission)',
    points: [
      'Research: photovoltaic semiconductors, tandem optoelectronic devices, thin-film processing, and single-crystal growth.',
      'Participated in a State Key Research Project of the Ministry of Science and Technology (No. 22075182) and the Shell–CAS Frontier Sciences Program (No. PT78963).',
      'Teaching assistant for Laboratory Safety and Research Integrity (2021.09 - 2021.12)',
    ],
    learn: 'Spotting ideas · Scientific spirit · Multi-instrument development · Big-data analysis',
    img: imgPhd,
    badges: [
      { text: 'Graduate Academic Scholarship ×5', accent: true },
      { text: 'First Prize, ShanghaiTech Innovation Competition (2021)', accent: true },
    ],
  },
  {
    period: '2020.07 - 2020.09',
    org: 'SUSTech · Center for Social Sciences',
    role: 'Research Assistant',
    points: ['Artifact archiving, pottery shard cataloging and dating, digital registration, and exhibition support'],
    learn: 'Order & organization · Exploring history · Forming a view of history',
  },
  {
    period: '2019.07 - 2019.09',
    org: 'BTR New Material Group · Analysis & Testing Center',
    role: 'Intern Engineer',
    points: ['Performance analysis of cathode/anode materials, SEM imaging, and data curation'],
    learn: 'First taste of industry · Precision instruments · Follow every rule, and follow it strictly',
  },
  {
    period: '2016.09 - 2020.07',
    org: 'Southern University of Science and Technology · Materials Science and Engineering',
    role: 'B.Sc.',
    points: [
      'Research: metallic materials, nanomaterials preparation, and SEM characterization.',
      'Completed a National Undergraduate Innovation & Entrepreneurship project (provincial funding, concluded with excellence).',
      'Member of the Calligraphy & Painting Club, Skateboarding Club, and Shuren Football Team; class peer counselor; 2× university football champion',
    ],
    learn: 'Innovation mindset · Dare to be first · All-round development · Work–life balance',
    img: imgBachelor,
    badges: [{ text: 'Freshman Scholarship' }, { text: '2× Football Champion' }],
  },
]

export default function ExperienceEn() {
  return (
    <section id="experience" className="scroll-mt-20 py-14">
      <SectionHeading index="02" label="Experience" title="Education & Experience" />
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
                className="mx-auto mt-5 aspect-[3/2] w-2/3 max-w-[300px] rounded-xl border border-[#e3e6e0] object-cover shadow-sm"
              />
            )}
            {e.learn && (
              <p className="mt-4 text-sm leading-7 text-[#3a4a40]">
                <span className="font-semibold text-[#1d5c38]">What I learned: </span>
                {e.learn}
              </p>
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
