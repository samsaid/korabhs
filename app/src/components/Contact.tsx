"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F8FFF9] px-6 py-28 border-t border-slate-100 overflow-hidden"
    >

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E0FEE6] px-3.5 py-1.5 text-xs font-medium text-[#166534]">
              Get in Touch
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Start your journey
              <br />
              toward healing.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-slate-500">
              Ready to take the first step? Reach out for a free, confidential
              consultation. We typically respond within 24 hours.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="tel:+16025550100"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-[#BDBBFF]/50 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BDBBFF]/20 ring-1 ring-[#BDBBFF]/40">
                  <Phone size={16} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="text-[13px] text-slate-400">Call us</div>
                  <div className="text-[14px] font-medium text-slate-800 group-hover:text-[#6366F1] transition-colors">
                    (602) 555-0100
                  </div>
                </div>
              </a>

              <a
                href="mailto:hello@korabhs.com"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-[#BDBBFF]/50 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BDBBFF]/20 ring-1 ring-[#BDBBFF]/40">
                  <Mail size={16} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="text-[13px] text-slate-400">Email us</div>
                  <div className="text-[14px] font-medium text-slate-800 group-hover:text-[#6366F1] transition-colors">
                    hello@korabhs.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E0FEE6] ring-1 ring-[#C6F6D5]">
                  <MapPin size={16} className="text-[#15803D]" />
                </div>
                <div>
                  <div className="text-[13px] text-slate-400">Service area</div>
                  <div className="text-[14px] font-medium text-slate-800">
                    Phoenix & Maricopa County, AZ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E0FEE6] ring-2 ring-[#C6F6D5]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="#15803D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Message received!
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  We&apos;ll be in touch within 24 hours. Thank you for reaching
                  out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="mb-2">
                  <h3 className="text-[17px] font-semibold text-slate-800">
                    Free Consultation Request
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-400">
                    Confidential and no obligation.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-medium text-slate-500">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:border-[#BDBBFF] focus:ring-2 focus:ring-[#BDBBFF]/30 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-medium text-slate-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(602) 000-0000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:border-[#BDBBFF] focus:ring-2 focus:ring-[#BDBBFF]/30 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-slate-500">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:border-[#BDBBFF] focus:ring-2 focus:ring-[#BDBBFF]/30 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-slate-500">
                    How can we help? (optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    placeholder="Tell us a bit about what you're looking for..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:border-[#BDBBFF] focus:ring-2 focus:ring-[#BDBBFF]/30 focus:bg-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-2 h-12 w-full rounded-full bg-[#BDBBFF] text-[14px] font-semibold text-[#1E1B4B] hover:bg-[#A5A3FF] transition-colors"
                >
                  Request Free Consultation
                  <ArrowRight size={15} className="ml-2" />
                </Button>

                <p className="text-center text-[11px] text-slate-400">
                  Your information is 100% confidential and HIPAA protected.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
