import myResume from "data/resume";
import moment from "moment";
import ExperienceBarSvg from "./ExperienceBarSvg";
import ExperienceAreaSvg from "./ExperienceAreaSvg";
import ExperienceView from "./ExperienceView";
import { TimelineContextProvider } from "./TimelineContextProvider";
import "./TimelineView.scss";
import ExperienceLineSvg from "./ExperienceLineSvg";
import XAxisSvg from "./XAxisSvg";

export const parseDate = (date: string) => moment(date, "DD/MM/YYYY");

const getXFromDateFunction =
    (minDate: Date, maxDate: Date, dataArea: Rect) => (date: moment.Moment) => 
        dataArea.x + (date.diff(moment(minDate)) * dataArea.width) /
        moment(maxDate).diff(moment(minDate));

export const experienceBarHeight = 16;
export const experienceBarAreaHeight = 32;
const startXMargin = 32;
const endXMargin = 16;
const startYMargin = 32;
const endYMargin = 16;
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

    const experienceLinesSvg = experiences.map((exp, index) => (
        <ExperienceLineSvg resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    const experienceBarsSvg = experiences.map((exp, index) => (
        <ExperienceBarSvg resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    const experienceAreasSvg = experiences.map((exp, index) => (
        <ExperienceAreaSvg resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
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

                    <XAxisSvg dataArea={dataArea} getXFromDate={getXFromDate} />

                    {experienceLinesSvg}
                    {experienceBarsSvg}
                    {experienceAreasSvg}
                </svg>
                <ExperienceView />
            </div>
        </TimelineContextProvider>
    );
}
