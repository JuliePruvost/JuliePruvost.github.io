import { ExperienceItem, High, HighSpecial, LabeledIcon, netIcon, LabeledIconSmall, sqlServerIcon, emptyIcon, xamarinIcon, visualStudioIcon, azureIcon } from "./ExperienceHelper";
import silverlightImage from './silverlight.png';

export default function Rok({isForPrint}: {isForPrint?: boolean}) {
    return (
        <>
            <ExperienceItem itemTitle="Position">
                SENIOR FULLSTACK DEVELOPER
            </ExperienceItem>
            <ExperienceItem itemTitle="Period" className="period" >
                August 2014 to September 2015
            </ExperienceItem>
            <ExperienceItem itemTitle="Company">
                <High>ROK Solution</High> (startup of ~15 employees on the digital transformation of companies)
            </ExperienceItem>
            <ExperienceItem itemTitle="Core Techno" className="list">
                <LabeledIcon icon={netIcon} label='.NET 4.5'/>
                <LabeledIcon icon={xamarinIcon} label='Xamarin'/>
                <LabeledIcon icon={<img src={silverlightImage} alt="Silverlight" width={48} />} label='Silverlight'/>
            </ExperienceItem>
            <ExperienceItem itemTitle="Functional Description">
                Development of a SaaS platform to help companies to model, execute and control their processes, organization and risks.
            </ExperienceItem>
            <ExperienceItem itemTitle="Team">
                4 members with <High>very high skill</High> level. FullStack profiles.
            </ExperienceItem>
            <ExperienceItem itemTitle="Key Projects / Roles" className="long">
                <ul>
                    <li>Development of the ROK <HighSpecial>mobile app</HighSpecial>, multi platform (ios, android, windows phone) with Xamarin</li>
                    <li>Relooking of the silverlight front-end, creation of the user dashboard view (collab with designer)</li>
                </ul>
            </ExperienceItem>
            <ExperienceItem itemTitle="Results / Benefits" className="long">
                <ul>
                    <li>The success of the launch of the rok mobile app was key for the company to organize a <High>digital event</High> and raise additional funds.</li>
                    <li>First experience in a startup company, with a focus on development. Freedom in terms of tools and solutions, flexibility to call on external skills.</li>
                </ul>
            </ExperienceItem>            
            <ExperienceItem itemTitle="Data / Environment Techno" className="list long">
                <LabeledIconSmall icon={sqlServerIcon} label='Sql Server'/> 
                <LabeledIconSmall icon={emptyIcon} label='WCF'/> 
                <LabeledIconSmall icon={azureIcon} label='Azure'/>
                <LabeledIconSmall icon={visualStudioIcon} label='Team Foundation Server'/>
            </ExperienceItem>
        </>
    );
}