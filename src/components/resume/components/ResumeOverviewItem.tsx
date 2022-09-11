import { FlexRowLayout } from "components/common/layoutComponents";
import './ResumeOverviewItem.scss';

export const ResumeOverviewRichItem = (
    {timeLabel, mainLabel, secondaryItems, description}: 
    {timeLabel: string, mainLabel: string, secondaryItems?: string[], description?: string}) => {

    const secondaryItemsSection = (secondaryItems || []).map((item, index) => (
        <div key={index}>{item}</div>
    ));

    return (
        <div className="resume-overview-item">
            <div className="resume-overview-item-time">
                {timeLabel}
            </div>
            <div className="resume-overview-item-vertical-line" />
            <div className="resume-overview-item-content">
                <FlexRowLayout>
                    <div className="resume-overview-item-main">
                        {mainLabel}
                    </div>
                    <div className="resume-overview-item-secondary">
                        {secondaryItemsSection ? secondaryItemsSection : <div></div>}
                    </div>
                </FlexRowLayout>
                <div className="resume-overview-item-rich-description">
                    {description}
                </div>
            </div>
        </div>
    );
}