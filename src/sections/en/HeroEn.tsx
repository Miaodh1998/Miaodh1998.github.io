import photo from '@/assets/photo.jpg'
import qrWechat from '@/assets/qr-wechat.png'
import qrMp from '@/assets/qr-mp.jpg'

export default function HeroEn() {
  return (
    <section id="top" className="py-20 sm:py-28">
      <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-stretch sm:gap-12">
        <div className="min-w-0 flex-1">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#6b7a70]">
            Resume · Updated 2026-10
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#14201a] sm:text-5xl">Mio</h1>
          <p className="mt-2 text-base font-medium tracking-tight text-[#4a5a50]">Miao Donghao</p>
          <p className="mt-4 text-xl font-medium text-[#2a3a30]">
            Postdoctoral Researcher · Institute of Optoelectronics, Fudan University
          </p>
          <p className="mt-1 text-sm text-[#6b7a70]">
            Perovskite photovoltaics · Tandem solar cells · Semiconductor materials & devices
          </p>

          <p className="mt-8 max-w-2xl text-sm leading-6 text-[#3a4a40]">
            B.Sc. from SUSTech, Ph.D. from ShanghaiTech University. My research covers perovskite
            materials and photovoltaic devices, from single-crystal growth to tandem solar cells.
            Highlights: certified 34% perovskite–Si tandem, 22.7% 1 cm² semi-transparent
            wide-bandgap, and record 16% Sn-based cells.
          </p>
        </div>
        <figure className="flex shrink-0 flex-col">
          <img
            src={photo}
            alt="Miao Donghao"
            className="h-64 w-52 rounded-2xl border border-[#e3e6e0] object-cover shadow-sm sm:h-auto sm:min-h-0 sm:flex-1 sm:w-64"
            style={{ objectPosition: '28% 55%' }}
          />
          <figcaption className="mt-2 text-center text-xs text-[#6b7a70]">
            Miao Donghao · Aug 2026 · Danxia Landform, China
          </figcaption>
        </figure>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { num: '34%', label: 'Certified perovskite–Si tandem' },
          { num: '22.7%', label: 'Certified 1 cm² semi-transparent wide-bandgap cell' },
          { num: '16%', label: 'Sn-based perovskite cell (world record)' },
          { num: '8', label: 'Papers published / under review' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-[#e3e6e0] bg-white p-4">
            <p className="text-2xl font-bold text-[#1d5c38]">{s.num}</p>
            <p className="mt-1 text-xs leading-5 text-[#6b7a70]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="grid flex-1 grid-cols-1 gap-y-1.5 text-center text-sm text-[#4a5a50] sm:grid-cols-2">
          <p>
            email:{' '}
            <a href="mailto:miaodh@fudan.edu.cn" className="underline decoration-[#c8d2c5] underline-offset-4 hover:text-[#1d5c38]">
              miaodh@fudan.edu.cn
            </a>
          </p>
          <p>tel/wechat: (+86)150-2671-7860</p>
          <p>web: miaodh.site</p>
          <p>WeChat official account: MH的情诗</p>
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <figure className="flex flex-col items-center">
            <img src={qrWechat} alt="Personal WeChat QR code" className="h-20 w-20 rounded-lg border border-[#e3e6e0] object-cover" />
            <figcaption className="mt-1.5 text-xs text-[#6b7a70]">个人微信</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img src={qrMp} alt="WeChat official account QR code" className="h-20 w-20 rounded-lg border border-[#e3e6e0] object-cover" />
            <figcaption className="mt-1.5 text-xs text-[#6b7a70]">公众号</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
