import { ExperiencesViewContextProvider } from "./ExperiencesViewContextProvider";
import ExperienceView from "./ExperienceView";
import TimelineView from "./TimelineView";

export default function ExperiencesView({
}: {
}) {
    
    return (
        <ExperiencesViewContextProvider>
            <TimelineView />
            <ExperienceView />
        </ExperiencesViewContextProvider>

    );
}
