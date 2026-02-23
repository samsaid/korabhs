const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "8+", label: "Years of Practice" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "48h", label: "Avg. First Appointment" },
];

export default function Stats() {
  return (
    <section className="relative bg-[#F6F2E8]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-px bg-[#C5C0C9]/40 rounded-2xl overflow-hidden lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-1 bg-[#F6F2E8] px-8 py-10 text-center"
            >
              <span className="text-[2.75rem] font-bold tracking-[-0.04em] text-[#002233] leading-none">
                {s.value}
              </span>
              <span className="mt-2 text-sm text-[#11425D]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
