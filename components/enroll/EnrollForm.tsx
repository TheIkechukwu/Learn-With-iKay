"use client";

import { useState } from "react";
import { FiUser, FiBook, FiEdit3, FiArrowRight } from "react-icons/fi";
import { SERVICES } from "@/lib/data";

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

const inputClass =
  "w-full rounded-lg border border-primary/20 bg-surface-container-lowest px-4 py-3 text-[15px] text-on-surface outline-none transition-all duration-200 placeholder:text-outline focus:border-2 focus:border-primary";

const labelClass = "block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-2";

export function EnrollForm() {
  const [submitted, setSubmitted] = useState(false);
  const [experience, setExperience] = useState("Beginner");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-[var(--shadow-card)] md:p-10">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />
        <div className="font-display text-[24px] font-bold tracking-[-0.01em] text-primary">
          Application received.
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
          Thank you for applying. We review applications every Monday and
          Thursday, expect a screening call within three working days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-[var(--shadow-card)] md:p-8"
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />

      <div>
        <h3 className="mb-6 flex items-center gap-2 border-b border-surface-variant pb-3 font-display text-[19px] font-semibold text-primary">
          <FiUser className="text-primary-container" size={19} />
          Candidate Profile
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={labelClass}>First Name</label>
            <input required placeholder="e.g., Ada" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input required placeholder="e.g., Lovelace" className={inputClass} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Professional Email</label>
            <input required type="email" placeholder="name@domain.com" className={inputClass} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>LinkedIn Profile URL (Optional)</label>
            <input type="url" placeholder="https://linkedin.com/in/..." className={inputClass} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-6 flex items-center gap-2 border-b border-surface-variant pb-3 font-display text-[19px] font-semibold text-primary">
          <FiBook className="text-primary-container" size={19} />
          Program Selection
        </h3>
        <div className="grid gap-6">
          <div>
            <label className={labelClass}>Desired Track</label>
            <select required className={`${inputClass} appearance-none bg-white`} defaultValue="">
              <option value="" disabled>
                Select a program...
              </option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Current Experience Level</label>
            <div className="grid grid-cols-3 gap-3">
              {experienceLevels.map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setExperience(level)}
                  className={`rounded-lg border p-3 text-center font-body text-[14.5px] font-medium transition-colors ${
                    experience === level
                      ? "border-primary-container bg-primary-container text-white"
                      : "border-outline-variant/50 bg-surface-container-low text-on-surface"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-6 flex items-center gap-2 border-b border-surface-variant pb-3 font-display text-[19px] font-semibold text-primary">
          <FiEdit3 className="text-primary-container" size={19} />
          Statement of Intent
        </h3>
        <div>
          <label className={labelClass}>Why Learn With iKay? (Max 250 words)</label>
          <p className="mb-2 text-sm text-on-surface-variant">
            Help us understand your goals and why this rigorous format fits
            your learning style.
          </p>
          <textarea
            required
            rows={4}
            placeholder="I am applying to this cohort because..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <div className="mt-8 pt-2">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-[15.5px] font-bold text-on-primary transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        >
          Submit Application
          <FiArrowRight size={17} />
        </button>
        <p className="mt-4 text-center font-mono text-[11px] text-on-surface-variant">
          By submitting, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </form>
  );
}
