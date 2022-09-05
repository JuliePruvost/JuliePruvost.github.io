import { ExperienceItem, High } from "./ExperienceHelper";

export default function SgRates() {
    return (
        <>
            <ExperienceItem itemTitle="Period" className="period long" hidden>
                December 2006 to December 2009
            </ExperienceItem>
            <ExperienceItem itemTitle="Position">
                .NET JUNIOR DEVELOPER
            </ExperienceItem>
            <ExperienceItem itemTitle="Company">
                <High>Société Générale Corporate and Investment Banking</High>
            </ExperienceItem>
            <ExperienceItem itemTitle="Functional Description" className="web-only">
                Development of a service platform on Interest Rates financial products.
            </ExperienceItem>
            <ExperienceItem itemTitle="Team" className="web-only">
                4 members with <High>junior</High> skill level
            </ExperienceItem>
            <ExperienceItem itemTitle="Key Projects / Roles">
                <ul>
                    <li>Migration of C++ applications to <High>.Net.</High></li>
                    <li>Integration of new negotiation workflows {'(RFQ - D2C)'}.</li>
                    <li>Focus on <High>unit tests</High> and functional tests.</li>
                </ul>
            </ExperienceItem>
        </>
    );
}