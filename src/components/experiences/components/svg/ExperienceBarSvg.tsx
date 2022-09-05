import { IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext } from "react";
import { experiencesViewContext } from "../../ExperiencesViewContextProvider";
import { experienceBarHeight, experienceBarAreaHeight, parseDate, Rect, experienceBarY } from "../../Timeline";

export default function ExperienceBarSvg({
    resume,
    experienceIndex,
    getXFromDate,
    dataArea,
    className
}: {
    resume: IResume;
    experienceIndex: number;
    getXFromDate: (date: moment.Moment) => number;
    dataArea: Rect;
    className: string;
}) {
    const {state} = useContext(experiencesViewContext);

    const experience = resume.experiences[experienceIndex];
    const startDate = parseDate(experience.startDate);
    const endDate = parseDate(experience.endDate);
    const x = getXFromDate(startDate);
    const width = getXFromDate(endDate) - x;

    return (
        
        <rect
            className={state.selectedExperience === experience ? `${className} selected` : className}
            x={x}
            y={experienceBarY + dataArea.y + experienceIndex * (experienceBarAreaHeight) + experienceBarAreaHeight}
            width={width}
            height={8}
            rx={8}
            ry={8}
        />
    );
}
