import { CheckCircle2 } from "lucide-react";

const principles = [
  "Evidence-based treatment protocols",
  "Culturally responsive and inclusive care",
  "Full continuity of care — no handoffs",
  "Telehealth and in-home visits available",
  "Serving all of Maricopa County",
  "Currently accepting AHCCCS insurance",
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#F6F2E8] px-6 py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C0D6EA] px-3.5 py-1.5 text-xs font-medium text-[#002233]">
              Our Mission
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Behavioral health
              <br />
              should be accessible
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #DDFF55, #11425D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                to everyone.
              </span>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.8] text-slate-500">
              Kora was founded with a single belief: that geography, transportation,
              stigma, and cost shouldn&apos;t stand between a person and the mental
              health care they need.
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-slate-500">
              Our team of licensed clinicians comes to you — in your home, your
              community, or virtually — providing the same quality of care you&apos;d
              expect in any premier facility.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] text-slate-600">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#11425D]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual cards */}
          <div className="flex flex-col gap-4">
            {/* Main quote card */}
            <div className="rounded-2xl border border-[#C5C0C9]/50 bg-white p-8 shadow-sm">
              <div className="mb-2 text-xs font-medium uppercase tracking-widest text-[#11425D]">
                Our Approach
              </div>
              <p className="text-[15px] leading-[1.8] text-slate-600">
                &ldquo;We believe healing happens best within familiar surroundings.
                By bringing care into people&apos;s homes, we remove barriers, build
                trust faster, and achieve outcomes that traditional office-based
                care often can&apos;t reach.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#11425D]/20 ring-2 ring-[#11425D]/30 flex items-center justify-center text-[#002233] font-bold text-sm">
                  K
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">Kora Clinical Team</div>
                  <div className="text-xs text-slate-400">Phoenix, AZ</div>
                </div>
              </div>
            </div>

            {/* Two stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#DDFF55]/60 bg-[#DDFF55]/25 p-6">
                <div className="text-3xl font-bold tracking-tight text-slate-800">100%</div>
                <div className="mt-1 text-[13px] text-[#002233]">Home-based delivery</div>
              </div>
              <div className="rounded-2xl border border-[#C0D6EA]/60 bg-[#C0D6EA]/30 p-6">
                <div className="text-3xl font-bold tracking-tight text-slate-800">24/7</div>
                <div className="mt-1 text-[13px] text-[#002233]">Crisis line access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
