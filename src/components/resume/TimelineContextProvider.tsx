import { createTypedActionContext, createTypedActionContextProvider } from "context/typedActionContext";
import myResume, { IExperience } from "data/resume";

export interface ITimelineContext {
    selectedExperience?: IExperience
}

export const timelineContextInitialState: ITimelineContext = {
    selectedExperience: myResume.experiences[myResume.experiences.length-1]
}

export const timelineContext = createTypedActionContext(timelineContextInitialState);
export const TimelineContextProvider = createTypedActionContextProvider(timelineContextInitialState, timelineContext);