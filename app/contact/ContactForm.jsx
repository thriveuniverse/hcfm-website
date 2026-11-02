"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      organisation: form.organisation.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json();
        setErrorMessage(body.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Could not send — please try again or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-hline bg-ink2 p-8 text-center">
        <p className="text-lg font-medium mb-2">Message sent.</p>
        <p className="text-paperdim">We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-mono text-xs uppercase tracking-[0.06em] text-paperdim mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-ink2 border border-hline px-4 py-3 text-paper placeholder-paperdim/60 focus:outline-none focus:border-bronze transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs uppercase tracking-[0.06em] text-paperdim mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-ink2 border border-hline px-4 py-3 text-paper placeholder-paperdim/60 focus:outline-none focus:border-bronze transition-colors"
            placeholder="you@practice.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="block font-mono text-xs uppercase tracking-[0.06em] text-paperdim mb-2">
          Organisation <span className="normal-case text-paperdim/70">(optional)</span>
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          className="w-full bg-ink2 border border-hline px-4 py-3 text-paper placeholder-paperdim/60 focus:outline-none focus:border-bronze transition-colors"
          placeholder="Practice, firm or institution"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-[0.06em] text-paperdim mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-ink2 border border-hline px-4 py-3 text-paper placeholder-paperdim/60 focus:outline-none focus:border-bronze transition-colors resize-none"
          placeholder="The claim, project or decision you'd like HCFM to look at"
        />
      </div>

      {status === "error" && <p className="text-rust text-sm">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-mono text-xs uppercase tracking-[0.06em] px-6 py-3.5 bg-bronze text-ink font-medium hover:bg-bronzelight disabled:opacity-50 transition-colors w-fit"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
