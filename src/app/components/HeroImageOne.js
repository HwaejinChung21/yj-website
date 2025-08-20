import Image from "next/image";
import plane from "../../../public/plane.jpeg"; // Adjust the path as necessary

export default function HeroImageOne() {
    return (
        <div>
            <Image 
                src={plane}
                alt="Plane Image"
                className="w-full h-175 object-cover rounded-3xl shadow-lg"
            />
        </div>
    );
}

