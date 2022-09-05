import myResume from "data/resume";
import moment from "moment";
import ExperienceBarBlurEffectSvg from "./components/svg/ExperienceBarBlurEffectSvg";
import ExperienceAreaSvg from "./components/svg/ExperienceAreaSvg";
import ExperienceBarSvg from "./components/svg/ExperienceBarSvg";
import ExperienceLineSvg from "./components/svg/ExperienceLineSvg";
import XAxisSvg from "./components/svg/XAxisSvg";
import "./Timeline.scss";
import BevelEffectFilter from "./components/svg/BevelEffectFilter";
import ExperienceFlatBarSvg from "./components/svg/ExperienceFlatBarSvg";

export const parseDate = (date: string) => moment(date, "DD/MM/YYYY");

const getXFromDateFunction =
    (minDate: Date, maxDate: Date, dataArea: Rect) => (date: moment.Moment) => 
        dataArea.x + (date.diff(moment(minDate)) * dataArea.width) /
        moment(maxDate).diff(moment(minDate));

export const experienceBarY = 32;
export const experienceBarHeight = 4;
export const experienceBarAreaHeight = 0;
const startXMargin = 32;
const endXMargin = 16;
const startYMargin = 26;
const endYMargin = 16;
const minDate = new Date(2002, 1, 1);
const maxDate = new Date(2022, 12, 1);


export type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default function Timeline({
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

    const experienceBarsMaskSvg = experiences.map((exp, index) => (
        <ExperienceBarSvg className="experience-bar-mask" resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    const experienceBarsSvg = experiences.map((exp, index) => (
        <g className="experience-bars-with-bevel" key={index} >
            <ExperienceBarSvg className="experience-bar" resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
        </g>
    ));

    const experienceFlatBarsSvg = experiences.map((exp, index) => (
        <ExperienceFlatBarSvg className="experience-bar" resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    const experienceBarsGlow = experiences.map((exp, index) => (
        <ExperienceBarSvg className="experience-bar-glow" resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    const experienceAreasSvg = experiences.map((exp, index) => (
        <ExperienceAreaSvg resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    return (
        <div>
            <svg
                height={height}
                width={width}
            >
                <rect
                    className="timeline-data-area"
                    x={dataArea.x}
                    y={dataArea.y}
                    width={dataArea.width}
                    height={dataArea.height}
                />
                <defs>
                    <ExperienceBarBlurEffectSvg />
                    <BevelEffectFilter />
                </defs>
                <XAxisSvg dataArea={dataArea} getXFromDate={getXFromDate} />

                {experienceBarsGlow}
                {experienceFlatBarsSvg}
                
                {/*<mask id="bar-mask">
                    {experienceBarsMaskSvg}
                </mask>
    <image href={mooncloud} width={width} mask="url(#bar-mask)" className="moon-cloud" /> */ }

                {/*experienceLinesSvg*/}
                {experienceAreasSvg}
            </svg>
        </div>
    );
}
