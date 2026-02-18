import { useEffect } from "react";
import Layout from "./components/LayOut/Layout";
import HeroSection from "./sections/hero/HeroSection";
import ContentPackagesSection from "./sections/content-packages/ContentPackagesSection";
import ClipsSection from "./sections/clips/ClipsSection";
import StudioPackagesSection from "./sections/studio-packages/StudioPackagesSection";
import TeamSection from "./sections/team/TeamSection";

const WA_NUMBER = "972503823335";
const WA_TEXT = encodeURIComponent("היי, ראיתי את האתר ורוצה לשמוע פרטים");
const WHATSAPP_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <Layout whatsappHref={WHATSAPP_HREF}>
      <div id="top" />
      <HeroSection whatsappHref={WHATSAPP_HREF} />
      <ContentPackagesSection whatsappHref={WHATSAPP_HREF} />
      <ClipsSection whatsappHref={WHATSAPP_HREF} />
      <StudioPackagesSection whatsappHref={WHATSAPP_HREF} />
      <TeamSection whatsappHref={WHATSAPP_HREF} />
    </Layout>
  );
}
