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
import moonImage from './components/moons.jpeg';

export const parseDate = (date: string) => moment(date, "DD/MM/YYYY");

const getXFromDateFunction =
    (minDate: Date, maxDate: Date, dataArea: Rect) => (date: moment.Moment) => 
        dataArea.x + (date.diff(moment(minDate)) * dataArea.width) /
        moment(maxDate).diff(moment(minDate));

export const experienceBarY = 32;
export const experienceBarHeight = 4;
export const experienceBarAreaHeight = 0;
const endXMargin = 16;
const startXMargin = 32;
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
    dataHeight,
}: {
    width: number;
    dataHeight: number;
}) {
    const resume = myResume;
    const experiences = resume.experiences;
    
    const moonHeight = 306 * width / 1268;
    const startYMargin = moonHeight + 32;

    const svgArea: Rect = {
        x: 0,
        y: 0,
        width: width,
        height: moonHeight + dataHeight
    };

    const dataArea: Rect = {
        x: startXMargin,
        y: startYMargin,
        width: width - startXMargin - endXMargin,
        height: dataHeight
    }
    
    const getXFromDate = getXFromDateFunction(minDate, maxDate, dataArea);
    /*
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
    */
    const experienceFlatBarsSvg = experiences.map((exp, index) => (
        <ExperienceFlatBarSvg key={index} className="experience-bar" resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    const experienceBarsGlow = experiences.map((exp, index) => (
        <ExperienceBarSvg key={index} className="experience-bar-glow" resume={resume} experienceIndex={index} getXFromDate={getXFromDate} dataArea={dataArea}/>
    ));

    const experienceAreasSvg = experiences.map((exp, index) => (
        <ExperienceAreaSvg key={index} resume={resume} experienceIndex={index} getXFromDate={getXFromDate} svgArea={svgArea}/>
    ));

    return (
        <div>
            <svg
                height={moonHeight + dataHeight}
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
                <image href={moonImage} width={width}  />

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
