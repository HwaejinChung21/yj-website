import Image from "next/image";
import MainHero from "./components/MainHero";
import HeroImageOne from "./components/HeroImageOne";
import DescriptionContainer from "./components/DescriptionContainer";
import ServiceCardContainer from "./components/ServiceCardContainer";
import SellingText from "./components/SellingText";
import DetailedServiceContainer from './components/DetailedServiceContainer';
import ServiceStrategyContainer from "./components/ServiceStrategyContainer";
import InsightsContainer from "./components/InsightsContainer";
import ContactUs from "./components/ContactUs";


export default function Home() {
  return (
    <main className="flex flex-col mt-40 mb-20 space-y-40">
      <MainHero />
      <HeroImageOne />
      <DescriptionContainer />
      <ServiceCardContainer />
      <SellingText />
      <DetailedServiceContainer />
      <ServiceStrategyContainer />
      <InsightsContainer />
      <ContactUs />
    </main>
  );
}
