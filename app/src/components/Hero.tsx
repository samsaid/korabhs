import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20">
      {/* Gradient overlay — fades white over the dot pattern on the left */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0.15) 100%)",
        }}
      />

      {/* Wave transition into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ display: "block" }}
        >
          <path
            d="M0,100 C180,160 360,40 540,90 C720,140 900,60 1080,95 C1260,130 1380,70 1440,80 L1440,160 L0,160 Z"
            fill="#F6F2E8"
          />
          <path
            d="M0,130 C200,90 400,150 600,120 C800,90 1000,145 1200,115 C1320,100 1400,125 1440,118 L1440,160 L0,160 Z"
            fill="#F6F2E8"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-12 lg:gap-20 min-h-[calc(100vh-8rem)]">
        {/* ── Left: Text ── */}
        <div className="flex flex-1 flex-col items-start justify-center py-12">
          {/* Location badge */}
          <div className="mb-7 inline-flex items-center gap-1.5 rounded-full bg-[#C0D6EA] px-4 py-1.5 text-xs font-medium text-[#002233]">
            <MapPin size={11} className="text-[#11425D]" />
            Phoenix, Arizona
          </div>

          {/* Heading */}
          <h1 className="max-w-[560px] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[#002233]">
            Behavioral health care that
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #DDFF55 0%, #11425D 55%, #002233 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              meets you where you are.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-[460px] text-[17px] leading-[1.75] text-slate-500">
            Kora offers residental treatment for adults, with personalized assessments, outpatient and intensive outpatient services, and medication-assisted treatment — all delivered with dignity and support.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-12 rounded-full bg-[#11425D] px-7 text-[14px] font-semibold text-white shadow-none hover:bg-[#002233] transition-colors"
            >
              <a href="#contact">
                Start your Recovery
                <ArrowRight size={15} className="ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-12 rounded-full border border-[#11425D]/30 px-7 text-[14px] text-[#11425D] hover:bg-[#C0D6EA]/30 hover:border-[#11425D]/50"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
            {["Licensed & Insured", "AHCCCS Accepted"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 size={15} className="shrink-0 text-[#11425D]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="relative hidden lg:block flex-1 py-4">
          <div className="relative h-[680px] w-full overflow-hidden rounded-3xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-image.png"
              alt="Compassionate behavioral health care at home"
              className="h-full w-full object-cover"
            />
            {/* Subtle teal tint overlay for palette cohesion */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,34,51,0.25) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Accent badge floating on image */}
          <div className="absolute bottom-20 -left-5 flex items-center gap-3 rounded-2xl bg-[#DDFF55] px-5 py-3.5 shadow-lg">
            <div className="h-2 w-2 rounded-full bg-[#11425D]" />
            <span className="text-[13px] font-semibold text-[#002233]">AHCCCS Accepted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
