import { IExperience, IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext } from "react";
import { createSetAction } from "reducer/commonAction";
import { experiencesViewContext } from "./ExperiencesViewContextProvider";
import { experienceBarHeight, parseDate, Rect } from "./Timeline";

export default function ExperienceView({
}: {
}) {
    const { state } = useContext(experiencesViewContext);
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
