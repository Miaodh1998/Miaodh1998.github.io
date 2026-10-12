export function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#6b7a70]">
        {index} / {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#14201a]">{title}</h2>
      <div className="mt-4 h-px w-full bg-[#e3e6e0]" />
    </div>
  )
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[#d8ddd4] bg-white px-2.5 py-0.5 text-xs text-[#4a5a50]">
      {children}
    </span>
  )
}

export function AccentBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#e7efe6] px-2.5 py-0.5 text-xs font-medium text-[#1d5c38]">
      {children}
    </span>
  )
}
