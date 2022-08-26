import { IExperience, IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext } from "react";
import { createSetAction } from "reducer/commonAction";
import { timelineContext } from "./TimelineContextProvider";
import { experienceBarHeight, experienceBarHeightSpaceBetween, parseDate, Rect } from "./TimelineView";

export default function ExperienceView({
}: {
}) {
    const { state } = useContext(timelineContext);
    const experience = state.selectedExperience;

    if (!experience) {
        return <></>;
    }

    return (
        <>
            <h1>{experience.location}</h1>
        </>
    );
}
