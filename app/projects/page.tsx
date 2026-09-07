import type { Metadata } from "next";
import WorksLedger from "@/components/WorksLedger";

export const metadata: Metadata = {
  title: "Projects — Jakub Zakrzewski",
  description: "Selected product design case studies by Jakub Zakrzewski.",
};

export default function ProjectsPage() {
  return <WorksLedger />;
}
