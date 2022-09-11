import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ResumeToPrint from "./ResumeToPrint";
import "./ResumeView.scss";

export default function ResumeView() {
    const componentRef = useRef<any>(null);

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <ResumeToPrint ref={componentRef} />
        </div>
    );
}
