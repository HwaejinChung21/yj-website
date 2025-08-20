import DescriptionCard from "./DescriptionCard"

export default function DescriptionContainer() {
    const cardData = [
        {
            id: 1,
            heading: 'Private Mandates Only',
            subtext: 'Cumulative Industry No Marketplace Listings - Just Precision Matching',
        },

        {
            id: 2,
            heading: '$250M+',
            subtext: 'Assets Under Inventory'
        },
        
        {
            id: 3,
            heading: 'Global Access',
            subtext: 'Buyeres & Sellers Across UAE, UK, Asia'
        }
    ]
    return (
        <div className="flex flex-col items-center justify-between gap-10 gap-y-10 md:flex-row md:justify-between md:gap-x-6 md:gap-y-10  ">
            {cardData.map((card) => (
                <div key={card.id} className="w-1/3">
                    <DescriptionCard 
                        key={card.id}
                        heading={card.heading}
                        subtext={card.subtext}
                    />
                </div>
            ))}
        </div>
    );
}