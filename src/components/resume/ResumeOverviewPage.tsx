import { resumeOverviewEducationData, resumeOverviewExperienceData } from "data/resumeOverview";
import { ResumeOverviewRichItem } from "./components/ResumeOverviewItem";

const Header = () => {
    return (
        <div className="resume-overview-header">
            <div className="name">Julie Pruvost</div>
            <div className="position">
                <div className="title">Tech / Dev Lead</div>
                <div className="experience">13 years Experience</div>
            </div>
        </div>
    );
};

const resumeOverviewExperienceItems = resumeOverviewExperienceData.map((data, index) => 
    <ResumeOverviewRichItem key={index}
        timeLabel={data.period} 
        mainLabel={data.company} 
        secondaryItems={data.techno} 
        description={data.description} 
    />
);

const resumeOverviewEducationItems = resumeOverviewEducationData.map((data, index) => 
    <ResumeOverviewRichItem key={index}
        timeLabel={data.period} 
        mainLabel={data.main}
        secondaryItems={data.techno} 
        description={data.description} 
    />
);


const ResumeOverviewSectionTitle = ({label}: {label:string}) => {
    return <div className="resume-section-title">{label}</div>;
}

const ExperiencesOverview = () => {
    return (
        <div className="resume-overview-section">
            <ResumeOverviewSectionTitle label="Experiences" />
            {resumeOverviewExperienceItems}
        </div>
    );
}

const EducationOverview = () => {
    return (
        <div className="resume-overview-section">
            <ResumeOverviewSectionTitle label="Education" />
            {resumeOverviewEducationItems}
        </div>
    );
}


export default function ResumeOverviewPage() {
    return (
        <div className="resume-overview">
            <Header />
            <ExperiencesOverview />
            <EducationOverview />            
        </div>
    );
}
