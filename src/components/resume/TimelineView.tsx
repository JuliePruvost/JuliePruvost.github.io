import myResume from "data/resume";
import moment from "moment";
import ExperienceSvg from "./ExperienceSvg";
import ExperienceView from "./ExperienceView";
import { TimelineContextProvider } from "./TimelineContextProvider";
import "./TimelineView.scss";

export const parseDate = (date: string) => moment(date, "DD/MM/YYYY");

const getXFromDateFunction =
    (minDate: Date, maxDate: Date, dataArea: Rect) => (date: moment.Moment) => 
        dataArea.x + (date.diff(moment(minDate)) * dataArea.width) /
        moment(maxDate).diff(moment(minDate));

export const experienceBarHeight = 20;
export const experienceBarHeightSpaceBetween = 10;
const startXMargin = 10;
const endXMargin = 10;
const startYMargin = 10;
const endYMargin = 10;
const minDate = new Date(2002, 1, 1);
const maxDate = new Date(2022, 12, 1);


export type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default function TimelineView({
    width,
    height,
}: {
    width: number;
    height: number;
}) {
    const resume = myResume;
    const experiences = resume.experiences;
    
    const dataArea: Rect = {
        x: startXMargin,
        y: startYMargin,
        width: width - startXMargin - endXMargin,
        height: height - startYMargin - endYMargin
    }
    
    const getXFromDate = getXFromDateFunction(minDate, maxDate, dataArea);

    const experiencesSvg = experiences.map((exp, index) => (
        <ExperienceSvg resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    return (
        <TimelineContextProvider>
            <div>
                <svg
                    className="timeline-view"
                    height={height}
                    width={width}
                    strokeWidth={2}
                >
                    <rect
                        className="timeline-data-area"
                        x={dataArea.x}
                        y={dataArea.y}
                        width={dataArea.width}
                        height={dataArea.height}
                    />

                    {experiencesSvg}
                </svg>
                <ExperienceView />
            </div>
        </TimelineContextProvider>
    );
}
