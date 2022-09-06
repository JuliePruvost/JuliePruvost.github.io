import { ExperienceItem, High, HighSpecial } from "./ExperienceHelper";

export default function Cacib() {
    return (
        <>
            <ExperienceItem itemTitle="Period" className="period long" hidden>
                October 2010 to May 2013
            </ExperienceItem>
            <ExperienceItem itemTitle="Position">
                .NET DEVELOPER
            </ExperienceItem>
            <ExperienceItem itemTitle="Company">
                <High>Crédit Agricole Corporate and Investment Banking</High>
            </ExperienceItem>
            <ExperienceItem itemTitle="Functional Description">
                {'Development of trading automatons for ETFs (equity products) market making.'} 
            </ExperienceItem>
            <ExperienceItem itemTitle="Team">
                6 members with <High>senior</High> skill level {'(4 on core, 2 on market making).'}
            </ExperienceItem>
            <ExperienceItem itemTitle="Key Projects / Roles" className="long">
                <ul>
                    <li>Development of high frequency order sending automatons, with <HighSpecial>real time</HighSpecial>, <HighSpecial>low latency</HighSpecial>, <HighSpecial>multi threaded</HighSpecial> environment.</li>
                    <li>Extensions of the Monolith Windows Form application with views to control automatic Hedge</li>
                </ul>
            </ExperienceItem>
            <ExperienceItem itemTitle="Techno" className="long">
                <High>.NET 3.5</High>, WinForms, Syncfusion, Oracle, Subversion
            </ExperienceItem>
        </>
    );
}