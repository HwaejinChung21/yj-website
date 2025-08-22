import Image from "next/image";

export default function ServiceCard({ 
    image, 
    heading, 
    subheading
}) {
    return (
        <div className="relative w-full sm:w-80 md:w-96 lg:w-[375px] aspect-[1/1] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            
            {/* Image */}
            <Image
                src={image}
                alt={heading}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
            
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {heading}
                </h3>
                <p className="mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                    {subheading}
                </p>
                <button className="mt-4 border-4 border-white text-customGold px-4 py-1 font-bold rounded-full hover:scale-110 hover:cursor-pointer transition-all duration-200">
                    CTA
                </button>
            </div>
        </div>
    );
}