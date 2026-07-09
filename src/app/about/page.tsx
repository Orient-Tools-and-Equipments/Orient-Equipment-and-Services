import PageHero from "@/components/PageHero";
import ContentCard from "@/components/ContentCard";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-transparent">
      <PageHero title="About Us" subtitle="Our Heritage" />
      <div className="pb-32 px-8">
        <ContentCard 
          description="Orient Tools and Equipments was founded on the principle of bridging rigorous engineering with seamless usability. For years, we have been the vanguard of industrial distribution, supplying cutting-edge tools and heavy-duty machinery to leading manufacturers worldwide."
          features={["ISO 9001 Certified", "Global Supply Chain", "Dedicated R&D Department"]}
        />
      </div>
    </main>
  );
}
