"use client";

import { useState } from "react";
import { FiAlertCircle, FiCheck, FiLoader } from "react-icons/fi";

const inputClass =
  "mt-2.25 w-full rounded-lg border border-primary/20 bg-surface-container-lowest px-4 py-3.5 text-[15px] outline-none transition-all duration-200 focus:border-2 focus:border-primary";

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof FormState>(field: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
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
      <div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-6 py-12 text-center shadow-[var(--shadow-card)] md:px-10">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-tertiary-fixed/30">
          <FiCheck className="text-primary" size={22} />
        </div>
        <div className="mt-5 font-display text-[22px] font-bold text-primary">Message sent.</div>
        <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-on-surface-variant">
          Thanks for reaching out. A confirmation is on its way to your inbox, and we usually reply
          within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-6 pb-8 pt-7 shadow-[var(--shadow-card)] md:px-10 md:pb-11 md:pt-10"
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />
      <div className="font-display text-[24px] font-bold tracking-[-0.01em] text-primary">
        Send us a message
      </div>
      <div className="mt-2 text-[15px] text-on-surface-variant">
        We&apos;ll route your message to the right team automatically.
      </div>

      <input
        type="text"
        value={form.company}
        onChange={update("company")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-7.5 grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <label>
          <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
            FULL NAME
          </div>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label>
          <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
            EMAIL
          </div>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="mt-4.5 block">
        <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
          SUBJECT
        </div>
        <input
          value={form.subject}
          onChange={update("subject")}
          placeholder="What is this about?"
          className={inputClass}
        />
      </label>

      <label className="mt-4.5 block">
        <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
          MESSAGE
        </div>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what you'd like to know."
          className={`${inputClass} resize-y leading-relaxed`}
        />
      </label>

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-error-container px-4 py-3 text-[13.5px] text-on-error-container">
          <FiAlertCircle className="mt-0.5 flex-shrink-0" size={15} />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 flex items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 font-display text-[15.5px] font-bold text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <FiLoader className="animate-spin" size={16} /> Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}