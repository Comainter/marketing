import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/features/hero/components/hero-section";
import { IssueQualificationSection } from "@/features/issue-qualification/components/issue-qualification-section";
import { ProblemSection } from "@/features/problem/components/problem-section";
import { WorkflowSection } from "@/features/workflow/components/workflow-section";
import { MaintainerIntelligenceSection } from "@/features/maintainer-intelligence/components/maintainer-intelligence-section";
import { ComparisonSection } from "@/features/comparison/components/comparison-section";
import { TrustSection } from "@/features/trust/components/trust-section";
import { FinalCtaSection } from "@/features/final-cta/components/final-cta-section";
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IssueQualificationSection />
      <ProblemSection />
      {/* <WorkflowSection /> */}
      <MaintainerIntelligenceSection />
      <ComparisonSection />
      <TrustSection />
      <FinalCtaSection />
      <Footer/>
    </main>
  );
}
/*  */
