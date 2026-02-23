const testimonials = [
  {
    quote:
      "I'd tried therapy before but always gave up because of the drive and waiting rooms. Kora came to me. That changed everything. I've been in consistent care for 8 months now.",
    name: "Maria G.",
    location: "Laveen, Phoenix",
    initials: "MG",
  },
  {
    quote:
      "The care coordinator handled everything — insurance, scheduling, follow-ups. I just showed up (at my own couch). Finally, a system that works for real people.",
    name: "James T.",
    location: "Ahwatukee, Phoenix",
    initials: "JT",
  },
  {
    quote:
      "My son has severe anxiety and getting him to a clinic was impossible. Kora's home visits gave him a safe space and he made more progress in 3 months than 2 years of office visits.",
    name: "Sandra M.",
    location: "Maryvale, Phoenix",
    initials: "SM",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white px-6 py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C0D6EA]/40 px-3.5 py-1.5 text-xs font-medium text-[#002233]">
            Testimonials
          </div>
          <h2 className="max-w-xl text-[clamp(1.8rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-slate-900 leading-[1.15]">
            Real people. Real outcomes.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#DDFF55">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
              </div>

              <blockquote className="flex-1 text-[14px] leading-[1.8] text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#F6F2E8] ring-2 ring-[#C5C0C9]/60 flex items-center justify-center text-[#002233] text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-slate-800">{t.name}</div>
                  <div className="text-[12px] text-slate-400">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
