import { notFound } from "next/navigation";
import { servicesData } from "@/data/content";
import PageHero from "@/components/PageHero";
import ContentCard from "@/components/ContentCard";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-transparent">
      <PageHero title={service.title} subtitle={service.subtitle} />
      <div className="pb-32 px-8">
        <ContentCard 
          description={service.description}
          features={service.features}
        />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
