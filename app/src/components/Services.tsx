import { Brain, Users, Heart, Phone, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description:
      "One-on-one sessions tailored to your unique needs — anxiety, depression, trauma, life transitions, and more.",
    tags: ["CBT", "DBT", "EMDR"],
  },
  {
    icon: Users,
    title: "Family Counseling",
    description:
      "Strengthen relationships and improve communication. We work with the whole family system toward lasting change.",
    tags: ["Conflict Resolution", "Parenting"],
  },
  {
    icon: Heart,
    title: "Substance Use Support",
    description:
      "Non-judgmental, evidence-based care for individuals navigating substance use and co-occurring disorders.",
    tags: ["Recovery", "Co-occurring"],
  },
  {
    icon: Phone,
    title: "Crisis Intervention",
    description:
      "Immediate, compassionate support when you need it most. Same-week appointments and telehealth available.",
    tags: ["Same-Week", "Telehealth"],
  },
  {
    icon: Sparkles,
    title: "Medication Management",
    description:
      "Collaborative psychiatric evaluation and ongoing medication management with licensed prescribers.",
    tags: ["Psychiatry", "Evaluation"],
  },
  {
    icon: Shield,
    title: "Case Management",
    description:
      "Coordinating care across providers, housing, and community resources so nothing falls through the cracks.",
    tags: ["Coordination", "Community"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C0D6EA] px-3.5 py-1.5 text-xs font-medium text-[#002233]">
            Services
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-slate-900 leading-[1.15]">
            Comprehensive care,
            <br />
            delivered at home.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-slate-500">
            We offer a full spectrum of behavioral health services, designed to
            meet you exactly where you are — physically and emotionally.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-px bg-slate-200 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white p-8 transition-colors hover:bg-[#F6F2E8]"
              >
                {/* Hover accent line */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#DDFF55] opacity-0 transition-opacity group-hover:opacity-100 rounded-l-sm" />

                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#11425D]/10 ring-1 ring-[#11425D]/25 transition-all group-hover:bg-[#11425D]/20">
                  <Icon size={20} className="text-[#11425D]" />
                </div>

                <h3 className="mb-2 text-[15px] font-semibold text-slate-800">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-slate-500">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#C0D6EA] bg-[#C0D6EA]/40 px-2.5 py-0.5 text-[11px] text-[#002233]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
