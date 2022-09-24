

export default function BevelEffectFilter() {
    return (
        <filter id="bevel-effect-filter" height="220%" >
            <feFlood className="bevel-color" floodColor="black"/>
            <feComposite operator="out" in2="SourceGraphic"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite operator="atop" in2="SourceGraphic"/>
        </filter>
    );
}