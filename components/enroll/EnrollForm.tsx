"use client";

import { useState } from "react";
import { FiAlertCircle, FiArrowRight, FiBook, FiCheck, FiEdit3, FiLoader, FiUser } from "react-icons/fi";
import { SERVICES } from "@/lib/data";

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

const inputClass =
  "w-full rounded-lg border border-primary/20 bg-surface-container-lowest px-4 py-3 text-[15px] text-on-surface outline-none transition-all duration-200 placeholder:text-outline focus:border-2 focus:border-primary";

const labelClass = "block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-2";

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  program: string;
  experienceLevel: string;
  statement: string;
  company: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  linkedin: "",
  program: "",
  experienceLevel: "Beginner",
  statement: "",
  company: "",
};

export function EnrollForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof FormState>(field: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-8 text-center shadow-[var(--shadow-card)] md:p-10">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-tertiary-fixed/30">
          <FiCheck className="text-primary" size={22} />
        </div>
        <div className="mt-5 font-display text-[24px] font-bold tracking-[-0.01em] text-primary">
          Application received.
        </div>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-on-surface-variant">
          Thank you for applying. A confirmation is on its way to your inbox. We review
          applications every Monday and Thursday, expect a screening call within three working
          days.
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

      <input
        type="text"
        value={form.company}
        onChange={update("company")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <h3 className="mb-6 flex items-center gap-2 border-b border-surface-variant pb-3 font-display text-[19px] font-semibold text-primary">
          <FiUser className="text-primary-container" size={19} />
          Candidate Profile
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={labelClass}>First Name</label>
            <input
              required
              value={form.firstName}
              onChange={update("firstName")}
              placeholder="e.g., Ada"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input
              required
              value={form.lastName}
              onChange={update("lastName")}
              placeholder="e.g., Lovelace"
              className={inputClass}
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Your Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="name@domain.com"
              className={inputClass}
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>LinkedIn Profile URL (Optional)</label>
            <input
              type="url"
              value={form.linkedin}
              onChange={update("linkedin")}
              placeholder="https://linkedin.com/in/..."
              className={inputClass}
            />
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
            <select
              required
              value={form.program}
              onChange={update("program")}
              className={`${inputClass} appearance-none bg-white`}
            >
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
                  onClick={() => setForm((f) => ({ ...f, experienceLevel: level }))}
                  className={`rounded-lg border p-3 text-center font-body text-[14.5px] font-medium transition-colors ${
                    form.experienceLevel === level
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
            Help us understand your goals and why this rigorous format fits your learning style.
          </p>
          <textarea
            required
            rows={4}
            value={form.statement}
            onChange={update("statement")}
            placeholder="I am applying to this cohort because..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-error-container px-4 py-3 text-[13.5px] text-on-error-container">
          <FiAlertCircle className="mt-0.5 flex-shrink-0" size={15} />
          {errorMsg}
        </div>
      )}

      <div className="mt-8 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-[15.5px] font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <FiLoader className="animate-spin" size={17} /> Submitting...
            </>
          ) : (
            <>
              Submit Application
              <FiArrowRight size={17} />
            </>
          )}
        </button>
        <p className="mt-4 text-center font-mono text-[11px] text-on-surface-variant">
          By submitting, you agree to our{" "}
          <a href="/terms" className="underline hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}