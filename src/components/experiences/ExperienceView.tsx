import { ExperienceComponent, IExperience, IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext, useMemo } from "react";
import { createSetAction } from "reducer/commonAction";
import Formation from "./components/Formation";
import { experiencesViewContext } from "./ExperiencesViewContextProvider";
import { experienceBarHeight, parseDate, Rect } from "./Timeline";
import './ExperienceView.scss';
import SgIwc from "./components/SgIwc";
import Rok from "./components/Rok";
import SgEBiz from "./components/SgEBiz";
import Cacib from "./components/Cacib";
import SgRates from "./components/SgRates";
import SmartTrade from "./components/SmartTrade";

const getExperienceComponent = (experienceComponent: ExperienceComponent | undefined) => {
    switch (experienceComponent) {
        
        case ExperienceComponent.sgIwc:
            return <SgIwc />;
        case ExperienceComponent.rok:
            return <Rok />;
        case ExperienceComponent.sgEBiz:
            return <SgEBiz />;
        case ExperienceComponent.cacib:
            return <Cacib />;
        case ExperienceComponent.sgRates:
            return <SgRates />;
        case ExperienceComponent.smartTrade:
            return <SmartTrade />;

            
        case ExperienceComponent.formation:
            return <Formation />;
        default:
            return <></>
    }
}

export default function ExperienceView({
}: {
}) {
    const { state } = useContext(experiencesViewContext);
    const experienceComponent = useMemo(() => getExperienceComponent(state.selectedExperience?.component), [state.selectedExperience]);

    return (
        <div className='experience-wrapper'>
            {experienceComponent}
        </div>
    );
}
