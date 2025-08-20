import ServiceCard from "./ServiceCard";
import customerSupport from "../../../public/customer-support.jpg";
import piechart from "../../../public/pie-chart.jpg";
import kyc from "../../../public/kyc-aml.jpg";

export default function ServiceStrategyContainer() {
    const cardData = [
        {
            id: 1,
            image: customerSupport,
            heading: "End-to-end support.",
            subheading: "Acquisition, selling, registration, escrow, LOI/APA—seamless asset transitions from start to finish.",
        },
        {
            id: 2,
            image: piechart,
            heading: "Fractional & porfolio guidance.",
            subheading: "Navigate "
        },
        {
            id: 3,
            image: kyc,
            heading: "Flag, tax & KYC/AML.",
            subheading: "Expert "
        },
    ]
    return (
        <div className="flex flex-col gap-y-10 items-center md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-10 md:items-stretch">
            {cardData.map((card) => (
                <ServiceCard
                    key={card.id}
                    image={card.image}
                    heading={card.heading}
                    subheading={card.subheading}
                    cardWidth="w-[350px]"
                    cardHeight="h-auto"
                    headerSize="text-xl"
                    headerThickness="font-bold" 
                    headerColor="text-gray-400"
                    subheaderSize="text-medium" 
                    subheaderThickness="font-normal" 
                    subheaderColor="text-customBlack"
                    headerLeftMargin="ml-2"
                    subheaderLeftMargin="ml-2"
                />
            ))}
        </div>
    );
}