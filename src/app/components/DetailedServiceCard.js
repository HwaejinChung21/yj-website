import Image from "next/image";

export default function DetailedServiceCard({ image, heading, subheading }) {
    return (
        <div className="flex flex-col w-6/8">
            <div>
                <Image 
                    src={image} 
                    alt={heading} 
                    className="rounded-3xl shadow-xl"
                />
            </div>
            <div className="text-left ml-2">
                <h3 className="mt-4 text-xl text-customGold font-bold">{heading}</h3>
                <p className="text-gray-500 w-1/3">{subheading}</p>
            </div>
        
        </div>
    );
}