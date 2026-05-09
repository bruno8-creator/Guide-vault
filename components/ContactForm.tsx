"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel grid gap-4 rounded-lg p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/72">
          Name
          <input
            required
            className="min-h-12 rounded-lg border border-white/12 bg-white/8 px-4 text-white outline-none transition focus:border-[#d8b45b]/70"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          Email
          <input
            required
            type="email"
            className="min-h-12 rounded-lg border border-white/12 bg-white/8 px-4 text-white outline-none transition focus:border-[#d8b45b]/70"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-white/72">
        Message
        <textarea
          required
          rows={6}
          className="resize-none rounded-lg border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-[#d8b45b]/70"
        />
      </label>
      <Button type="submit" className="w-full sm:w-fit">
        Submit
      </Button>
      {sent ? <p className="text-sm text-[#93f5cc]">Message ready for future form handling.</p> : null}
    </form>
  );
}
