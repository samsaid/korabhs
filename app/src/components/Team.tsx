const team = [
  {
    initials: "AS",
    name: "Ayan Said, MSRN",
    role: "Clinical Director",
    bio: "Over 12 years of experience in community mental health and trauma-informed care. Specializes in CBT and family systems therapy.",
    color: "bg-[#F6F2E8] text-[#002233] ring-[#C5C0C9]",
  },
  {
    initials: "AA",
    name: "Andre Abrams, LCSW-BHP",
    role: "Licensed Therapist",
    bio: "Passionate about accessible mental health care. Specializes in anxiety, depression, and substance use recovery using DBT and motivational interviewing.",
    color: "bg-[#C0D6EA]/30 text-[#002233] ring-[#C0D6EA]/60",
  },
  {
    initials: "TP",
    name: "Tanya Patel, PMHNP-BC",
    role: "Psychiatric Nurse Practitioner",
    bio: "Board-certified psychiatric prescriber with a focus on medication management and co-occurring disorders. Brings a collaborative, whole-person approach to every visit.",
    color: "bg-[#F6F2E8] text-[#002233] ring-[#C5C0C9]",
  },
  {
    initials: "SS",
    name: "Samira Said",
    role: "Care Coordinator test",
    bio: "Dedicated to removing barriers between clients and the care they need. Handles insurance, scheduling, and community resource navigation.",
    color: "bg-[#C0D6EA]/30 text-[#002233] ring-[#C0D6EA]/60",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#C0D6EA]/40 px-3.5 py-1 text-xs font-medium text-[#002233]">
            Meet the Team
          </div>
          <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.03em] text-slate-900 leading-[1.15]">
            The people behind your care.
          </h2>
          <p className="mt-3 max-w-md text-[14px] leading-[1.7] text-slate-500">
            Our clinicians are licensed, compassionate, and committed to showing
            up for you — in your home and in your corner.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-bold ring-2 ${member.color}`}
              >
                {member.initials}
              </div>

              <div className="text-[13px] font-semibold text-slate-800 leading-snug">
                {member.name}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-[#11425D]">
                {member.role}
              </div>
              <p className="mt-2 text-[12px] leading-[1.7] text-slate-500">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
