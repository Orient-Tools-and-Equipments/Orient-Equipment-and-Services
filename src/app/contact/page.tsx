import PageHero from "@/components/PageHero";
import ContentCard from "@/components/ContentCard";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-transparent">
      <PageHero title="Contact Us" subtitle="Get in touch" />
      <div className="pb-32 px-8">
        <ContentCard 
          description="Ready to upgrade your industrial operations? Reach out to our dedicated support and sales teams. Whether you need immediate spare parts, large-scale manufacturing orders, or expert calibration services, Orient is here to help."
          features={["24/7 Global Support", "info@orientequipment.com", "+1 (555) 019-2837"]}
        />
      </div>
    </main>
  );
}
