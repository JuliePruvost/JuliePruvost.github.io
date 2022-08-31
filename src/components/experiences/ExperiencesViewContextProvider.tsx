import { createTypedActionContext, createTypedActionContextProvider } from "context/typedActionContext";
import myResume, { IExperience } from "data/resume";

export interface IExperiencesViewContext {
    selectedExperience?: IExperience;
    hoveredExperience?: IExperience;
}

export const experiencesViewContextInitialState: IExperiencesViewContext = {
    selectedExperience: myResume.experiences[myResume.experiences.length-1]
}

export const experiencesViewContext = createTypedActionContext(experiencesViewContextInitialState);
export const ExperiencesViewContextProvider = createTypedActionContextProvider(experiencesViewContextInitialState, experiencesViewContext);