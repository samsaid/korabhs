import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#DDFF55] p-12 text-center">
          <div className="relative">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#002233]/60">
              Phoenix, AZ
            </p>
            <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-[#002233] leading-[1.2]">
              You don&apos;t have to navigate this alone.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-[1.7] text-[#002233]/70">
              Our team is ready to connect you with the care you deserve — in
              the place you feel safest.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-[#11425D] px-8 text-[14px] font-semibold text-white shadow-none hover:bg-[#002233] transition-colors"
              >
                <a href="#contact">
                  Book a Free Consultation
                  <ArrowRight size={15} className="ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-12 rounded-full border border-[#002233]/20 bg-white/40 px-8 text-[14px] text-[#002233] hover:bg-white/60 backdrop-blur-sm"
              >
                <a href="tel:+16025550100">Call (602) 555-0100</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
