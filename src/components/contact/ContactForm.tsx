"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const field =
  "w-full border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-pebble focus:border-ink";
const label = "mb-2 block text-[14px] font-medium text-ink";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // UI only — no submission wired yet (backend TBD).
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-line bg-surface-2 p-10">
        <h3 className="text-[22px] font-medium text-ink">Thanks, we&apos;ll be in touch.</h3>
        <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-body">
          Your request has been captured on this page. Form delivery isn&apos;t connected yet, so
          in the meantime, email{" "}
          <a href="mailto:hello@axiomblack.com" className="text-ink underline">hello@axiomblack.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="fn">First name*</label>
          <input id="fn" name="firstName" required className={field} placeholder="Jane" />
        </div>
        <div>
          <label className={label} htmlFor="ln">Last name*</label>
          <input id="ln" name="lastName" required className={field} placeholder="Doe" />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="email">Work email*</label>
        <input id="email" name="email" type="email" required className={field} placeholder="jane@agency.gov" />
      </div>
      <div>
        <label className={label} htmlFor="org">Organization*</label>
        <input id="org" name="organization" required className={field} placeholder="City of Newark" />
      </div>
      <div>
        <label className={label} htmlFor="role">Role</label>
        <input id="role" name="role" className={field} placeholder="Public Works Director" />
      </div>
      <div>
        <label className={label} htmlFor="msg">What would you like to talk about?</label>
        <textarea id="msg" name="message" rows={4} className={`${field} resize-none`} placeholder="A quick sentence about your system or project." />
      </div>
      <button type="submit" className="ab-btn group">
        <span>Book a demo</span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-[7px] border border-white/40 transition-transform group-hover:translate-x-[2px]">
          <Icon icon={ArrowRight01Icon} size={15} className="text-white" strokeWidth={2} />
        </span>
      </button>
    </form>
  );
}
