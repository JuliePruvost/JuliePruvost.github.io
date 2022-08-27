import { IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext } from "react";
import { timelineContext } from "./TimelineContextProvider";
import { experienceBarHeight, experienceBarAreaHeight, parseDate, Rect } from "./TimelineView";

export default function ExperienceBarSvg({
    resume,
    experienceIndex,
    getXFromDate,
    dataArea,
}: {
    resume: IResume;
    experienceIndex: number;
    getXFromDate: (date: moment.Moment) => number;
    dataArea: Rect;
}) {
    const {state} = useContext(timelineContext);

    const experience = resume.experiences[experienceIndex];
    const startDate = parseDate(experience.startDate);
    const endDate = parseDate(experience.endDate);
    const x = getXFromDate(startDate);
    const width = getXFromDate(endDate) - x;

    return (
        <rect
            className={state.selectedExperience === experience ? "experience-bar selected" : "experience-bar"}
            x={x}
            y={dataArea.y + experienceIndex * (experienceBarAreaHeight) + experienceBarAreaHeight}
            width={width}
            height={experienceBarHeight}
            rx={8}
            ry={8}
        />
    );
}
