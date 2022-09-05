import { IResume } from "data/resume";
import moment from "moment";
import { experienceBarHeight, experienceBarAreaHeight, parseDate, Rect } from "../../Timeline";

export default function ExperienceLineSvg({
    resume,
    experienceIndex,
    dataArea,
}: {
    resume: IResume;
    experienceIndex: number;
    getXFromDate: (date: moment.Moment) => number;
    dataArea: Rect;
}) {
    const y = dataArea.y + experienceIndex * (experienceBarAreaHeight) + experienceBarAreaHeight + experienceBarHeight/2;

    return (
        <line
            className={"experience-line"}
            x1={dataArea.x}
            y1={y}
            x2={dataArea.width}
            y2={y}
        />
    );
}
