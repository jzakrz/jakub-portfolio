"use client";

import { useState } from "react";

type ContactActionsProps = {
  email: string;
  linkedin: string;
};

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M6.94 8.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Zm1.28 1.56H5.66V19h2.56v-8.94Zm4.08 0H9.75V19h2.55v-4.7c0-1.24.24-2.44 1.78-2.44 1.52 0 1.54 1.42 1.54 2.52V19h2.56v-5.15c0-2.53-.54-4.48-3.5-4.48-1.42 0-2.36.78-2.75 1.52h-.03V10.06Z" />
    </svg>
  );
}

export default function ContactActions({ email, linkedin }: ContactActionsProps) {
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle");

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("success");
      window.setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 2000);
    }
  }

  const actionButtonClassName =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black transition-colors duration-200 hover:border-black/35 hover:bg-black/5";

  return (
    <div className="mt-8 flex max-w-xl flex-col gap-3">
      <div className="flex items-center justify-between rounded-2xl border border-black/15 px-5 py-4">
        <span className="truncate text-sm font-medium text-black sm:text-base">{email}</span>

        <div className="ml-4 flex items-center gap-2">
          <a
            href={`mailto:${email}`}
            className={actionButtonClassName}
            aria-label="Email me"
            title="Email me"
          >
            <MailIcon />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className={actionButtonClassName + " cursor-pointer bg-transparent"}
            aria-label="Copy email"
            title="Copy email"
          >
            <CopyIcon />
          </button>
        </div>
      </div>

      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between rounded-2xl border border-black/15 px-5 py-4 text-sm text-black transition-colors duration-200 hover:border-black/35 sm:text-base"
      >
        <span className="font-medium">LinkedIn</span>
        <LinkedInIcon />
      </a>

      <p className="pl-1 text-xs text-black/55" aria-live="polite">
        {copyState === "success" && "Email copied"}
        {copyState === "error" && "Could not copy email"}
        {copyState === "idle" && " "}
      </p>
    </div>
  );
}
