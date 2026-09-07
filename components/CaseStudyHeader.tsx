import Link from "next/link";

type CaseStudyHeaderProps = {
  label: string;
};

export default function CaseStudyHeader({ label }: CaseStudyHeaderProps) {
  return (
    <header className="hackathon-case__header">
      <Link href="/projects">← Works</Link>
      <p>{label}</p>
      <p>Jakub Zakrzewski</p>
    </header>
  );
}
