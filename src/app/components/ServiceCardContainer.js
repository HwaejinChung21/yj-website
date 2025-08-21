import NewServiceCard from "./NewServiceCard";
import estate from "../../../public/estate.png";
import yacht from "../../../public/yacht-2.jpg";
import privateJetTwo from "../../../public/private-jet-two.jpg";

export default function ServiceCardContainer() {
    return (
        <div className="flex flex-col items-center gap-y-10 md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-10">
            <NewServiceCard 
                image={privateJetTwo} 
                heading="Jets" 
                subheading="Private Placement"
            />
            <NewServiceCard  
                image={yacht} 
                heading="Yachts" 
                subheading="Bespoke Advisory"
            />
            <NewServiceCard  
                image={estate} 
                heading="Estates" 
                subheading="Ultra Private"
            />
        </div>
    );
}
