import DetailedServiceCard from "./DetailedServiceCard";
import estate from "../../../public/luxury-estate.png";
import yacht from "../../../public/superyacht.png";
import jet from "../../../public/jet-interior.png";

export default function DetailedServiceContainer() {

    const carData = [
        {
            id: 1,
            image: jet,
            heading: 'Private Jets & JetMatch AI',
            subheading: "No public inventory. Placement and sourcing for G700, Global 7500 and more. Our JetMatch AI tool matches principal requirements, while 'Request Access' ensures full descretion.",
        },

        {
            id: 2,
            image: yacht,
            heading: 'Superyachts | By Request Only', 
            subheading: "Sirena, Benetti, Sanlorenzo and more. Teaser imagery only—details available after inquiry. Specialist deals and curated builds, never open listings.",
        },
        
        {
            id: 3,
            image: estate,
            heading: 'Trophy Homes & Villas',
            subheading: 'Our real esate offering is never public. Featuring trophy villas, branded residencse, and off-market opportunities. Bundles available for principle buyers.',
        }
    ]
  return (
    <div className="flex flex-col items-center gap-20">
        {carData.map((card) => (
            <DetailedServiceCard 
                key={card.id}
                image={card.image}
                heading={card.heading}
                subheading={card.subheading}
            />
        ))}
    </div>
  );
}