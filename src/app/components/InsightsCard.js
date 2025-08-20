import ServiceCard from "./ServiceCard";
import placeholder from "../../../public/placeholder-square.png";

export default function InsightsCard() {
    const cardData = [
        {
            id: 1,
            image: placeholder,
            heading: "Aviation Forecast 2025",
            subheading: "June 2025",
        },
        {
            id: 2,
            image: placeholder,
            heading: "Superyacht Trend Report",
            subheading: "May 2025"
        },
        {
            id: 3,
            image: placeholder,
            heading: "New Homefronts: Trophy Villas",
            subheading: "April 2025"
        },
        {
            id: 4,
            image: placeholder,
            heading: "Assset Bundles: Redefined",
            subheading: "March 2025"
        }
    ]
    return (
        <div className="flex flex-col gap-y-10 items-center md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-10 md:items-stretch">
            {cardData.map((card) => (
                <div key={card.id}>
                    <ServiceCard 
                        image={card.image}
                        heading={card.heading}
                        subheading={card.subheading}
                        cardWidth="w-[275px]"
                        cardHeight="h-auto"
                        headerSize="text-medium"
                        headerThickness="font-normal" 
                        headerColor="text-gray-400"
                        subheaderSize="text-lg" 
                        subheaderThickness="font-normal" 
                        subheaderColor="text-customBlack"
                        headerLeftMargin="ml-2"
                        subheaderLeftMargin="ml-3"
                    />
                </div>
            ))}
        </div>
    );
}