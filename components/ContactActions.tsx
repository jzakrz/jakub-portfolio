"use client";

import { useState } from "react";

type ContactActionsProps = {
  email: string;
  linkedin: string;
};

export default function ContactActions({ email, linkedin }: ContactActionsProps) {
  const [copyLabel, setCopyLabel] = useState("Copy email");

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyLabel("Email copied");
      window.setTimeout(() => setCopyLabel("Copy email"), 2000);
    } catch {
      setCopyLabel("Copy failed");
      window.setTimeout(() => setCopyLabel("Copy email"), 2000);
    }
  }

  const itemClassName =
    "flex w-full items-center justify-between rounded-2xl border border-black/15 px-5 py-4 text-sm text-black transition-colors duration-200 hover:border-black/35 sm:text-base";

  return (
    <div className="mt-8 flex max-w-xl flex-col gap-3">
      <a href={`mailto:${email}`} className={itemClassName}>
        <span>Email</span>
        <span className="font-medium">{email}</span>
      </a>

      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className={itemClassName}
      >
        <span>LinkedIn</span>
        <span className="font-medium">Open profile</span>
      </a>

      <button
        type="button"
        onClick={handleCopyEmail}
        className={itemClassName + " cursor-pointer bg-transparent text-left"}
      >
        <span>{copyLabel}</span>
        <span className="font-medium">One click</span>
      </button>
    </div>
  );
}
