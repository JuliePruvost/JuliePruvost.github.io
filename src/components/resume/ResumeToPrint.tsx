import { AsFlexFullStretchRowLayout } from "components/common/layoutComponents";
import Rok from "components/experiences/components/Rok";
import SgIwc from "components/experiences/components/SgIwc";
import { forwardRef } from "react";
import ResumeOverviewPage from "./ResumeOverviewPage";

const ResumeToPrintContent = () => {
    return (
        <div className='resume-wrapper print-container'>
            <ResumeOverviewPage />
            <div className="page-break" />
            <div className="resume-footer">
                For more detailed information, please visit <span>https://juliepruvost.github.io</span>
            </div>

            <AsFlexFullStretchRowLayout>
                <div className="resume-vertical-line" />
                <div className="resume-experience-container">
                    <SgIwc isForPrint={true} />
                </div>
            </AsFlexFullStretchRowLayout>

            {/*<div className="resume-experience-separator" />*/}

            <AsFlexFullStretchRowLayout>
                <div className="resume-vertical-line" />
                <div className="resume-experience-container">
                    <Rok isForPrint={true} />
                </div>
            </AsFlexFullStretchRowLayout>
        </div>
    );
}

const ResumeToPrint = forwardRef<HTMLDivElement>((props, ref) =>  {
    /*const marginTop = '100px';
    const marginBottom = '100px';
    const marginLeft = '100px';
    const marginRight = '100px';
    const getPageMargins = () => {
        return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
    };*/

    return (
        <div ref={ref}>
            {/*<style className="resume-page" /> */}
            <ResumeToPrintContent />
        </div>
    )
});

export default ResumeToPrint;