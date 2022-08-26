import { IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext } from "react";
import { createSetAction } from "reducer/commonAction";
import { timelineContext } from "./TimelineContextProvider";
import { experienceBarHeight, experienceBarHeightSpaceBetween, parseDate, Rect } from "./TimelineView";

export default function ExperienceSvg({
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
    const {state, dispatch} = useContext(timelineContext);

    const experience = resume.experiences[experienceIndex];
    const previousExperience = experienceIndex ? resume.experiences[experienceIndex-1] : null;
    const startDate = parseDate(experience.startDate);
    const endDate = parseDate(experience.endDate);
    const x = getXFromDate(startDate);
    const width = getXFromDate(endDate) - x;

    // we don't want holes in area so we take last experience endDate
    const xArea = getXFromDate(previousExperience ? parseDate(previousExperience.endDate) : startDate);
    const areaWidth = getXFromDate(endDate) - xArea;
    
    const onClick = useCallback(() => {
        dispatch(createSetAction({selectedExperience: experience}))
    }, [dispatch, experience])

    return (
        <>
            <rect
                className={state.selectedExperience === experience ? "experience-bar selected" : "experience-bar"}
                stroke="black"
                x={x}
                y={dataArea.y + experienceIndex * (experienceBarHeight + experienceBarHeightSpaceBetween)}
                width={width}
                height={experienceBarHeight}
            />
            <rect
                className="experience-area"
                stroke="black"
                x={xArea}
                y={dataArea.y}
                width={areaWidth}
                height={dataArea.height}
                onClick={onClick}
            />
        </>
    );
}
