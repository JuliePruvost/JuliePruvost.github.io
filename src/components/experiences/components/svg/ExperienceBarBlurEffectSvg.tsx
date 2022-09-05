

export  default function ExperienceBarBlurEffectSvg() {
    return (
        
        <filter id="moon-glow" filterUnits="userSpaceOnUse"
                x="-50%" y="-50%" width="200%" height="200%">
            { /* blur the text at different levels */ }
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur10"/>
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur40"/>
            { /* merge all the blurs except for the first one */ }
            <feMerge result="blur-merged">
                <feMergeNode in="blur10"/>
                <feMergeNode in="blur40"/>
            </feMerge>
     
            <feMerge>
                <feMergeNode in="blur-merged"/>      
            </feMerge>
        </filter>
    )
}