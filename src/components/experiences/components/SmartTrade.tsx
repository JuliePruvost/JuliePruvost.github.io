import { ExperienceItem, High } from "./ExperienceHelper";

export default function SmartTrade() {
    return (
        <>
            <ExperienceItem itemTitle="Period" className="period long" hidden>
                June 2006 to December 2006
            </ExperienceItem>
            <ExperienceItem itemTitle="Position">
                JUNIOR DEVELOPER
            </ExperienceItem>
            <ExperienceItem itemTitle="Company">
                <High>SmartTrade</High>
            </ExperienceItem>
            <ExperienceItem itemTitle="Key Projects / Roles" className="long">
                <ul>
                    <li>Additional feature on the SmartTrade server <High>JAVA</High></li>
                    <li>Creation of views on the web client in <High>Google Web Toolkit</High></li>
                    <li>Additional features on WinForms <High>.NET</High> trading client</li>
                </ul>
            </ExperienceItem>
        </>
    );
}