"use client";

import { useState } from "react";
import { Button } from "./Button";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
    // Connect this later to Klaviyo, Mailchimp, ConvertKit, Shopify Email,
    // or a backend API route that stores subscribers securely.
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="waitlist-email">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="min-h-12 flex-1 rounded-full border border-white/14 bg-white/8 px-5 text-white outline-none transition placeholder:text-white/42 focus:border-[#d8b45b]/70 focus:bg-white/10"
      />
      <Button type="submit" className="sm:min-w-40">
        Join Waitlist
      </Button>
      {submitted ? (
        <p className="text-center text-sm text-[#93f5cc] sm:absolute sm:mt-16">
          You are on the early updates list.
        </p>
      ) : null}
    </form>
  );
}
