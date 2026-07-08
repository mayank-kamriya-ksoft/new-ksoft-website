"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      project: String(fd.get("project") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: { ok?: boolean; error?: string } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("sent");
      setMessage("Thanks — we'll reply within one business day.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to send.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" type="text" placeholder="Jane Doe" required />
        <Field label="Company" name="company" type="text" placeholder="Acme Inc." />
      </div>
      <Field label="Email" name="email" type="email" placeholder="jane@acme.com" required />
      <Field label="Budget" name="budget" type="text" placeholder="$25k – $100k" />
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-forest mb-2">
          Project
        </label>
        <textarea
          name="project"
          rows={6}
          required
          placeholder="Tell us what you're building."
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send inquiry →"}
      </button>
      {message && (
        <p
          role="status"
          className={`text-sm ${
            status === "sent" ? "text-forest" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-forest mb-2">
        {label}
      </label>
      <input
        {...rest}
        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}
