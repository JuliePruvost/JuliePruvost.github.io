import { ExperienceItem, High } from "./ExperienceHelper";

export default function SgEBiz() {
    return (
        <>
            <ExperienceItem itemTitle="Period" className="period long" hidden>
                May 2013 to May 2014
            </ExperienceItem>
            <ExperienceItem itemTitle="Position">
                SENIOR .NET FULLSTACK DEVELOPER
            </ExperienceItem>
            <ExperienceItem itemTitle="Company">
                <High>Société Générale Corporate and Investment Banking</High>
            </ExperienceItem>
            <ExperienceItem itemTitle="Functional Description">
                Development of a platform for E-Business on structured products equity.
            </ExperienceItem>
            <ExperienceItem itemTitle="Team">
                3 members with junior-mid skill level.
            </ExperienceItem>
            <ExperienceItem itemTitle="Key Projects / Roles">
                <ul>
                    <li>Migration of the existing Java platform to .Net windows services.</li>
                    <li>Development of a UI client in <High>WPF</High></li>
                </ul>
            </ExperienceItem>
            <ExperienceItem itemTitle="Techno">
                <High>.Net 4.5</High>, Entity Framework, WPF, WCF, ActiveMQ, Infragistics, SqlServer, Jenkins, Subversion
            </ExperienceItem>
        </>
    );
}