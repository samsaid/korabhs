const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Schedule a no-obligation call with our care team. We'll listen to your needs, answer questions, and identify the right services for you.",
  },
  {
    number: "02",
    title: "Personalized Care Plan",
    description:
      "A licensed clinician creates a custom treatment plan tailored to your goals, schedule, and preferences — all designed around your life.",
  },
  {
    number: "03",
    title: "Care Comes to You",
    description:
      "Your provider visits your home or connects via secure telehealth. No commuting, no waiting rooms — just focused, private care.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "We monitor progress, adjust your care plan as needed, and coordinate with other providers to ensure continuity across your health journey.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#F6F2E8] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-[#002233] shadow-sm">
            How It Works
          </div>
          <h2 className="max-w-xl text-[clamp(1.8rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-slate-900 leading-[1.15]">
            Getting started is simpler than you think.
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-slate-600">
            We&apos;ve designed every step to be low-friction, transparent, and
            centered entirely around you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-white bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="mb-6 text-[3rem] font-bold leading-none tracking-[-0.04em] text-slate-300">
                {step.number}
              </div>

              {/* Accent dot */}
              <div className="mb-4 h-2 w-2 rounded-full bg-[#DDFF55]" />

              <h3 className="mb-2 text-[15px] font-semibold text-slate-800">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
