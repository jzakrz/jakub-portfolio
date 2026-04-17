import Link from "next/link";

type ContactActionsProps = {
  email: string;
  linkedin: string;
};

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm1.92-.84 6.77 5.35a.5.5 0 0 0 .62 0l6.77-5.35a1.24 1.24 0 0 0-.83-.31H5.75c-.3 0-.58.11-.83.31Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M6.94 8.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Zm1.28 1.56H5.66V19h2.56v-8.94Zm4.08 0H9.75V19h2.55v-4.7c0-1.24.24-2.44 1.78-2.44 1.52 0 1.54 1.42 1.54 2.52V19h2.56v-5.15c0-2.53-.54-4.48-3.5-4.48-1.42 0-2.36.78-2.75 1.52h-.03V10.06Z" />
    </svg>
  );
}

export default function ContactActions({ email, linkedin }: ContactActionsProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <a
        href={`mailto:${email}`}
        className="inline-flex min-h-[64px] items-center justify-center gap-3 rounded-full bg-black px-8 text-center text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:scale-[1.03] sm:min-h-[72px] sm:px-10 sm:text-base"
      >
        <span>Email me</span>
        <MailIcon />
      </a>

      <Link
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[64px] items-center justify-center gap-3 rounded-full border border-black/20 bg-white px-8 text-center text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:bg-black hover:text-white sm:min-h-[72px] sm:px-10 sm:text-base"
      >
        <span>Let&apos;s connect</span>
        <LinkedInIcon />
      </Link>
    </div>
  );
}
