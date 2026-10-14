import qrWechat from '@/assets/qr-wechat.png'
import qrMp from '@/assets/qr-mp.jpg'

export default function FooterEn() {
  return (
    <footer id="contact" className="mt-10 border-t border-[#e3e6e0] bg-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#6b7a70]">06 / Contact</p>
        <h2 className="text-2xl font-bold text-[#14201a]">Contact</h2>
        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-center text-sm text-[#3a4a40] sm:text-left">
            <p>
              Email:{' '}
              <a href="mailto:miaodh@fudan.edu.cn" className="text-[#1d5c38] underline underline-offset-4">
                miaodh@fudan.edu.cn
              </a>
            </p>
            <p>Tel/WeChat: (+86) 150-2671-7860</p>
            <p>Affiliation: Institute of Optoelectronics, Fudan University</p>
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
        <p className="mt-10 text-xs text-[#9aa89e]">
          © 2026 Miao Donghao · Built with React &amp; GitHub Pages
        </p>
      </div>
    </footer>
  )
}
