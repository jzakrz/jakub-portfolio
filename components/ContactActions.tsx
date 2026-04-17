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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12.5 9.2 17 19 7" />
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

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 4h6v6" />
      <path d="m10 14 10-10" />
      <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export default function ContactActions({ email, linkedin }: ContactActionsProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2200);
    } catch {
      setIsCopied(false);
    }
  }

  const secondaryButtonClassName =
    "relative inline-flex h-[44px] items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm font-medium text-black transition-colors duration-300 hover:bg-black/5";

  return (
    <div className="mt-8 flex max-w-2xl flex-col gap-3">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-black/15 px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <MailIcon />
          <span className="truncate text-sm font-medium text-black sm:text-base">{email}</span>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <a
            href={`mailto:${email}`}
            className={secondaryButtonClassName}
            aria-label="Email me"
            title="Email me"
          >
            <MailIcon />
            <span>Email me</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className={secondaryButtonClassName + " min-w-[120px] cursor-pointer bg-transparent"}
            aria-live="polite"
            aria-label={isCopied ? "Link copied" : "Copy"}
            title={isCopied ? "Link copied" : "Copy"}
          >
            <span
              className={
                "inline-flex items-center gap-2 transition-all duration-300 " +
                (isCopied
                  ? "-translate-y-5 opacity-0"
                  : "translate-y-0 opacity-100")
              }
            >
              <CopyIcon />
              <span>Copy</span>
            </span>
            <span
              className={
                "pointer-events-none absolute inline-flex items-center gap-2 transition-all duration-300 " +
                (isCopied
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0")
              }
            >
              <CheckIcon />
              <span>Link copied</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-black/15 px-5 py-4 text-sm text-black sm:text-base">
        <span className="flex items-center gap-3 font-medium">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </span>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className={secondaryButtonClassName}
          aria-label="Open LinkedIn"
          title="Open LinkedIn"
        >
          <ExternalLinkIcon />
          <span>Open</span>
        </a>
      </div>
    </div>
  );
}
