import { ExperienceItem, High, HighSpecial, LabeledIcon, netIcon, reactIcon, typeScriptIcon, LabeledIconSmall, reduxIcon, semanticIcon, agGridIcon, jestIcon, graphQLIcon, sqlServerIcon, mongoDbIcon, rabbitMqIcon, redisIcon, elasticSearchIcon, grafanaIcon, githubIcon, teamcityIcon, octopusIcon } from "./ExperienceHelper";

export default function SgIwc({isForPrint}: {isForPrint?: boolean}) {
    return (
        <>
            <ExperienceItem itemTitle="Period" className="period long" hidden={!isForPrint}>
                October 2017 to Today
            </ExperienceItem>
            <ExperienceItem itemTitle="Position">
                TECH LEAD
            </ExperienceItem>
            <ExperienceItem itemTitle="Company">
                <High>Société Générale Corporate and Investment Banking</High>
            </ExperienceItem>
            <ExperienceItem itemTitle="Functional Description">
                Development of a platform to help with the configuration and calculation of proprietary indices (financial products) of Société Générale.
            </ExperienceItem>
            <ExperienceItem itemTitle="Team">
                Between 2 to 5 members with various skill level. Mostly FullStack profiles. <High>International</High> : one member in Bucarest for ~2 years.
            </ExperienceItem>
            <ExperienceItem itemTitle="Key Projects / Roles" className="long">
                <ul>
                    <li>Revamping of the old AngularJS website to <HighSpecial>React</HighSpecial> (~50 internal users). Creation of 2 smaller websites.</li>
                    <li>Slicing of the existing monolithic (.NET) api to <High>micro services</High> (.NET Core) with <High>load balancing</High>, <High>monitoring</High> with elk and grafana.</li>
                    <li>Development of a computing grid running python scripts.</li>
                    <li>Mentoring of newcomers, code quality manager.</li>
                </ul>
            </ExperienceItem>
            <ExperienceItem itemTitle="Results / Benefits" className="long">
                <ul>
                    <li>Great improvement on grid performance (x5 faster) on nightly python script batch.</li>
                    <li>Time to Market reduced {'(>2 weeks to 1)'} for new group of users to join the platform.</li>
                    <li>Production issues have largely decreased, and alerts now often notify us of issues before the users are impacted.</li>
                    <li>Thanks to my involvement in production issues, my good communication with adjacent teams, and the quality of my work, I moved <High>from Consultant to Employee</High> at Société Générale.</li>
                    <li>This first experience in the web/javascript world made me realize how passionate I am about designing good user-friendly interfaces. I will orient my career towards more <HighSpecial>web-focused</HighSpecial> technologies.</li>
                </ul>
            </ExperienceItem>
            <ExperienceItem itemTitle="Core Techno" className="list">
                <LabeledIcon icon={netIcon} label='.NET Core'/>
                <LabeledIcon icon={reactIcon} label='React'/>
                <LabeledIcon icon={typeScriptIcon} label='TypeScript'/>
            </ExperienceItem>
            <ExperienceItem itemTitle="Web Techno" className="list">
                <LabeledIconSmall icon={reduxIcon} label='Redux'/>
                <LabeledIconSmall icon={semanticIcon} label='Semantic UI'/>
                <LabeledIconSmall icon={agGridIcon} label='AG Grid'/>
                <LabeledIconSmall icon={jestIcon} label='Jest'/>
                <LabeledIconSmall icon={graphQLIcon} label='GraphQL'/>
            </ExperienceItem>
            <ExperienceItem itemTitle="Data / Environment Techno" className="list long">
                <LabeledIconSmall icon={sqlServerIcon} label='Sql Server'/> 
                <LabeledIconSmall icon={mongoDbIcon} label='Mongo DB'/>
                <LabeledIconSmall icon={rabbitMqIcon} label='Rabbit Mq'/>
                <LabeledIconSmall icon={redisIcon} label='Redis'/>
                <LabeledIconSmall icon={elasticSearchIcon} label='Elk'/>
                <LabeledIconSmall icon={grafanaIcon} label='Grafana'/>
                <LabeledIconSmall icon={githubIcon} label='GitHub'/>
                <LabeledIconSmall icon={teamcityIcon} label='TeamCity'/>
                <LabeledIconSmall icon={octopusIcon} label='Octopus'/>
            </ExperienceItem>
        </>
    );
}