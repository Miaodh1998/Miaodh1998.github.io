export default function FooterEn() {
  return (
    <footer id="contact" className="mt-10 border-t border-[#e3e6e0] bg-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#6b7a70]">06 / Contact</p>
        <h2 className="text-2xl font-bold text-[#14201a]">Contact</h2>
        <div className="mt-6 space-y-2 text-sm text-[#3a4a40]">
          <p>
            Email:{' '}
            <a href="mailto:miaodh@fudan.edu.cn" className="text-[#1d5c38] underline underline-offset-4">
              miaodh@fudan.edu.cn
            </a>
          </p>
          <p>Tel/WeChat: (+86) 150-2671-7860</p>
          <p>Affiliation: Institute of Optoelectronics, Fudan University</p>
        </div>
        <p className="mt-10 text-xs text-[#9aa89e]">
          © 2026 Miao Donghao · Built with React &amp; GitHub Pages
        </p>
      </div>
    </footer>
  )
}
