const links = {
  Services: [
    "Individual Therapy",
    "Family Counseling",
    "Substance Use Support",
    "Crisis Intervention",
    "Medication Management",
    "Case Management",
  ],
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Legal: ["Privacy Policy", "HIPAA Notice", "Terms of Service", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-100 bg-[#F6F2E8] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#11425D]/10 ring-1 ring-[#11425D]/30">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"
                    fill="#11425D"
                  />
                </svg>
              </div>
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-slate-800">
                Kora<span className="text-[#11425D]">.</span>
              </span>
            </a>
            <p className="text-[13px] leading-[1.7] text-slate-500 max-w-[220px]">
              Home-based behavioral health services in Phoenix, Arizona.
            </p>
            <div className="mt-5 text-[12px] text-slate-400">
              <div>Phoenix & Maricopa County, AZ</div>
              <div className="mt-1">
                <a href="tel:+16025550100" className="hover:text-[#11425D] transition-colors">
                  (602) 555-0100
                </a>
              </div>
              <div className="mt-1">
                <a href="mailto:hello@korabhs.com" className="hover:text-[#11425D] transition-colors">
                  hello@korabhs.com
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-widest text-slate-400">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-[12px] text-slate-400">
            © {new Date().getFullYear()} Kora Behavioral Health Services, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#DDFF55]" />
            <span className="text-[12px] text-slate-400">Licensed in Arizona</span>
          </div>
        </div>

        {/* Crisis disclaimer */}
        <div className="mt-6 rounded-xl border border-[#C0D6EA] bg-[#C0D6EA]/25 p-4">
          <p className="text-center text-[11px] leading-[1.7] text-[#002233]">
            If you are experiencing a mental health emergency, please call{" "}
            <a href="tel:988" className="font-semibold underline underline-offset-2 hover:text-[#11425D]">
              988 (Suicide & Crisis Lifeline)
            </a>{" "}
            or{" "}
            <a href="tel:911" className="font-semibold underline underline-offset-2 hover:text-[#11425D]">
              911
            </a>
            . Kora is not an emergency service.
          </p>
        </div>
      </div>
    </footer>
  );
}
