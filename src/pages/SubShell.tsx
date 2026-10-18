type Props = { lang: 'zh' | 'en'; children: React.ReactNode }

export default function SubShell({ lang, children }: Props) {
  return (
    <div className="py-14">
      <a href="#top" className="text-sm text-[#6b7a70] transition-colors hover:text-[#1d5c38]">
        {lang === 'zh' ? '← 返回主页' : '← Back to homepage'}
      </a>
      <div className="mt-6">{children}</div>
    </div>
  )
}

export function SubHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#6b7a70]">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight text-[#14201a]">{title}</h2>
      <div className="mt-4 h-px w-full bg-[#e3e6e0]" />
    </div>
  )
}
