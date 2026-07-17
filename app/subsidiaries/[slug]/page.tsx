import type { Metadata } from "next";
import SubsidiaryDetail from "@/components/SubsidiaryDetail";
import { subsidiaries } from "@/data/subsidiaries";

export function generateStaticParams() {
  return subsidiaries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = subsidiaries.find((s) => s.slug === slug);
  if (!subsidiary) return { title: "Senotrams Group" };
  return {
    title: `${subsidiary.name} | Senotrams Group`,
    description: subsidiary.description,
  };
}

export default async function SubsidiaryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SubsidiaryDetail slug={slug} />;
}
