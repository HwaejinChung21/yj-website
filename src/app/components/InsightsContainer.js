import InsightsCard from "./InsightsCard";
import InsightsText from "./InsightsText"; 

export default function InsightsContainer() {
    return (
        <div className="flex flex-col gap-8"> 
            <InsightsText />
            <InsightsCard />
        </div>
    );
}