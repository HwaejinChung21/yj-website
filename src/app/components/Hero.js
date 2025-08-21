import Image from "next/image";
import plane from "../../../public/plane.jpeg"; // Adjust the path as necessary

export default function Hero() {
    return (
        <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-lg">
            <Image 
                src={plane}
                alt="Plane Image"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Global Aircraft & Asset Advisory for Principals</h1>
            </div>
        </div>
    );
}

