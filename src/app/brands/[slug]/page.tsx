import { notFound } from "next/navigation";
import { brandsData } from "@/data/content";
import PageHero from "@/components/PageHero";
import ContentCard from "@/components/ContentCard";

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const brand = brandsData.find((b) => b.slug === resolvedParams.slug);

  if (!brand) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-transparent">
      <PageHero title={brand.title} subtitle={brand.subtitle} />
      <div className="pb-32 px-8">
        <ContentCard 
          description={brand.description}
          features={brand.features}
        />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return brandsData.map((brand) => ({
    slug: brand.slug,
  }));
}
