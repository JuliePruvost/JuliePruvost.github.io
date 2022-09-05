import { IResume } from "data/resume";
import moment from "moment";
import { experienceBarHeight, experienceBarAreaHeight, parseDate, Rect } from "../../Timeline";

export default function XAxisSvg({
    dataArea,
    getXFromDate
}: {
    dataArea: Rect;
    getXFromDate: (date: moment.Moment) => number;
}) {

    const dates = [
        new Date(2002, 1), 
        new Date(2006, 1),
        new Date(2010, 1),
        new Date(2014, 1),
        new Date(2018, 1),
        new Date(2022, 1)
    ];

    const dateIndicators = dates.map(date => {
        const x = getXFromDate(moment(date));
        return (
            <>
                <text 
                    className={"axis-text"}
                    x={x} 
                    y={dataArea.y - 15}
                    text-anchor="middle"
                >
                    {date.getFullYear()}
                </text>
                <line
                    className={"axis"}
                    x1={x}
                    y1={dataArea.y}
                    x2={x}
                    y2={dataArea.y - 5}
                />
            </>
        );
    });

    return (
        <>
            {dateIndicators}
            <line
                className={"axis"}
                x1={dataArea.x}
                y1={dataArea.y}
                x2={dataArea.x + dataArea.width}
                y2={dataArea.y}
            />
        </>
    );
}
