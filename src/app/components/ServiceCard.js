import Image from "next/image";

export default function ServiceCard({ 
    image, 
    heading, 
    subheading, 
    cardWidth, 
    cardHeight, 
    headerSize,
    headerThickness, 
    headerColor, 
    subheaderSize, 
    subheaderThickness, 
    subheaderColor,
    headerLeftMargin,
    subheaderLeftMargin
}) {
    return (
        <div className={`flex flex-col ${cardWidth} ${cardHeight}`}>
            <div className={`relative ${cardWidth} aspect-[1/1]`}>
                <Image
                    src={image}
                    alt={heading}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <div>
                <h3 className={`mt-4 ${headerLeftMargin} ${headerSize} ${headerThickness} ${headerColor}`}>{heading}</h3>
                <p className={`${subheaderLeftMargin} ${subheaderSize} ${subheaderThickness} ${subheaderColor}`}>{subheading}</p>
            </div>
        </div>
    );
}

