import mooncloud from '../mooncloud.jpeg';

export  default function ExperienceBarBackgroundSvg({
    width,
    height,
}: {
    width: number;
    height: number;
}) {
    return (
        <pattern id="moon-cloud" patternContentUnits="userSpaceOnUse" width={width} height={height}>
            <image href={mooncloud} x="0" y="0" width={width} height={height} preserveAspectRatio="xMidYMid slice" />
        </pattern>
    )
}

