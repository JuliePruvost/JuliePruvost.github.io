import SgIwc from "components/experiences/components/SgIwc";
import { forwardRef } from "react";

const ResumeToPrintContent = () => {
    return (
        <div className='resume-wrapper print-container'>
            <div className="page-break" />
            <SgIwc isForPrint={true} />
            <div className="page-break" />
            <div className="page-break" />
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