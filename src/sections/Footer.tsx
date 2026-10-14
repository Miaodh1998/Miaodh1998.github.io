import qrWechat from '@/assets/qr-wechat.png'
import qrMp from '@/assets/qr-mp.jpg'

export default function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-[#e3e6e0] bg-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#6b7a70]">06 / Contact</p>
        <h2 className="text-2xl font-bold text-[#14201a]">联系方式</h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-8 text-center sm:flex-row sm:gap-14">
          <div className="space-y-2 text-sm text-[#3a4a40]">
            <p>
              邮箱：
              <a href="mailto:miaodh@fudan.edu.cn" className="text-[#1d5c38] underline underline-offset-4">
                miaodh@fudan.edu.cn
              </a>
            </p>
            <p>电话：(+86) 150-2671-7860</p>
            <p>单位：复旦大学 光电研究院</p>
          </div>
          <figure className="flex shrink-0 flex-col items-center">
            <img src={qrWechat} alt="个人微信二维码" className="h-20 w-20 rounded-lg border border-[#e3e6e0] object-cover" />
            <figcaption className="mt-1.5 text-xs text-[#6b7a70]">个人微信</figcaption>
          </figure>
          <figure className="flex shrink-0 flex-col items-center">
            <img src={qrMp} alt="公众号二维码" className="h-20 w-20 rounded-lg border border-[#e3e6e0] object-cover" />
            <figcaption className="mt-1.5 text-xs text-[#6b7a70]">公众号</figcaption>
          </figure>
        </div>
        <p className="mt-10 text-xs text-[#9aa89e]">
          © 2026 缪东昊 Miao Donghao · Built with React &amp; GitHub Pages
        </p>
      </div>
    </footer>
  )
}
