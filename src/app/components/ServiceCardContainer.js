import ServiceCard from "./ServiceCard";
import estate from "../../../public/estate.png";
import yacht from "../../../public/yacht-2.jpg";
import privateJetTwo from "../../../public/private-jet-two.jpg";


export default function ServiceCardContainer() {
    return (
            <div className="flex flex-col gap-y-10 items-center md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-10 md:items-stretch">
                <ServiceCard 
                    image={privateJetTwo} 
                    heading="Jets" 
                    subheading="Private Placement" 
                    cardWidth="w-[350px]"
                    cardHeight="h-auto"
                    headerSize="text-medium"
                    headerThickness="font-bold" 
                    headerColor="text-customGold"
                    subheaderSize="text-2xl" 
                    subheaderThickness="font-bold" 
                    subheaderColor="text-gray-400" 
                    headerLeftMargin="ml-2"
                    subheaderLeftMargin="ml-2"
                />
                <ServiceCard  
                    image={yacht} 
                    heading="Yachts" 
                    subheading="Bespoke Advisory"
                    cardWidth="w-[350px]"
                    cardHeight="h-auto"
                    headerSize="text-medium"
                    headerThickness="font-bold" 
                    headerColor="text-customGold"
                    subheaderSize="text-2xl" 
                    subheaderThickness="font-bold" 
                    subheaderColor="text-gray-400" 
                    headerLeftMargin="ml-2"
                    subheaderLeftMargin="ml-2"
                />
                <ServiceCard  
                    image={estate} 
                    heading="Estates" 
                    subheading="Ultra Private"
                    cardWidth="w-[350px]"
                    cardHeight="h-auto"
                    headerSize="text-medium"
                    headerThickness="font-bold" 
                    headerColor="text-customGold"
                    subheaderSize="text-2xl" 
                    subheaderThickness="font-bold" 
                    subheaderColor="text-gray-400" 
                    headerLeftMargin="ml-2"
                    subheaderLeftMargin="ml-2"
                />
        </div>
    );
}
