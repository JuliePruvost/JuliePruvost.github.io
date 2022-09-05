import { IResume } from "data/resume";
import moment from "moment";
import { useCallback, useContext } from "react";
import { experiencesViewContext } from "../../ExperiencesViewContextProvider";
import { experienceBarHeight, experienceBarAreaHeight, parseDate, Rect, experienceBarY } from "../../Timeline";

export default function ExperienceFlatBarSvg({
    resume,
    experienceIndex,
    getXFromDate,
    dataArea,
    className
}: {
    resume: IResume;
    experienceIndex: number;
    getXFromDate: (date: moment.Moment) => number;
    dataArea: Rect;
    className: string;
}) {
    const {state} = useContext(experiencesViewContext);

    const experience = resume.experiences[experienceIndex];
    const startDate = parseDate(experience.startDate);
    const endDate = parseDate(experience.endDate);
    const x = getXFromDate(startDate) + 1;
    const width = getXFromDate(endDate) - x - 2;
    const y = experienceBarY + dataArea.y + experienceIndex * (experienceBarAreaHeight) + experienceBarAreaHeight;

    const tiretHalfHeight = 4;

    const isSelected = state.selectedExperience === experience;
    const isHovered = state.hoveredExperience === experience;

    const barClassNames = [className];
    const underlineClassNames = ['experience-bar-underline'];
    if (isSelected) {
        barClassNames.push('selected');
        underlineClassNames.push('selected');
    } 
    if (isHovered) {
        barClassNames.push('hovered');
        underlineClassNames.push('hovered');
    }
    
    return (
        <>
            <g className={barClassNames.join(" ")}>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={experienceBarHeight}
                />
                <rect
                    x={x}
                    width={1}
                    y={y - tiretHalfHeight}
                    height={experienceBarHeight + 2 * tiretHalfHeight}
                />
                <rect
                    x={x + width - 1}
                    width={1}
                    y={y - tiretHalfHeight}
                    height={experienceBarHeight + 2 * tiretHalfHeight}
                />
            </g>

            <rect className={underlineClassNames.join(" ")}
                x={x}
                y={y + 32}
                width={width}
                height={1}
            />
        </>
    );
}
