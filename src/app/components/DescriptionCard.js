export default function DescriptionCard({ heading, subtext }) {
    return (
        <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-7xl text-center font-extrabold">{heading}</h1>
            <p className="text-lg text-gray-400 font-medium w-2/3">{subtext}</p>
        </div>
    )
}