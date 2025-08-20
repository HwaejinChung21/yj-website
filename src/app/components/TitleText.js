export default function TitleText({ 
    heading,
    subheading,
    headingSize,
    subheadingSize,
    headingColor,
    subheadingColor,
    headingThickness,
    subheadingThickness
}) {
    return (
        <div className="flex flex-col text-left w-1/2 gap-2 ml-2">
            <h1 className={`${headingThickness} ${headingSize} ${headingColor}`}>
                {heading}
            </h1>
            <h1 className={`${subheadingThickness} ${subheadingSize} ${subheadingColor}`}>
                {subheading}
            </h1>
        </div>
    );
}