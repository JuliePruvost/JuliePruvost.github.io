import { IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext } from "react";
import { createSetAction } from "reducer/commonAction";
import { experiencesViewContext } from "../../ExperiencesViewContextProvider";
import { experienceBarHeight, parseDate, Rect } from "../../Timeline";

export default function ExperienceAreaSvg({
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
    const {state, dispatch} = useContext(experiencesViewContext);

    const experience = resume.experiences[experienceIndex];
    const previousExperience = experienceIndex ? resume.experiences[experienceIndex-1] : null;
    const startDate = parseDate(experience.startDate);
    const endDate = parseDate(experience.endDate);

    // we don't want holes in area so we take last experience endDate
    const xArea = getXFromDate(previousExperience ? parseDate(previousExperience.endDate) : startDate);
    const areaWidth = getXFromDate(endDate) - xArea;
    
    const onClick = useCallback(() => {
        dispatch(createSetAction({selectedExperience: experience}));
    }, [dispatch, experience]);

    const onMouseOver = useCallback(() => {
        dispatch(createSetAction({hoveredExperience: experience}));
    }, [dispatch, experience]);

    const onMouseOut = useCallback(() => {
        dispatch(createSetAction({hoveredExperience: undefined}));
    }, [dispatch]);

    return (
        <rect
            className="experience-area"
            x={xArea}
            y={dataArea.y}
            width={areaWidth}
            height={dataArea.height}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        />
    );
}
