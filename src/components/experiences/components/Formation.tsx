import { ExperienceItem, High, HighSpecial } from "./ExperienceHelper";

export default function Formation() {
    return (
        <>
            <ExperienceItem itemTitle="Period" className="period long" hidden>
                September 2002 to October 2005
            </ExperienceItem>
            <ExperienceItem itemTitle="Higher Education School">
                <HighSpecial>ECOLE CENTRALE NANTES</HighSpecial>
            </ExperienceItem>
            <ExperienceItem itemTitle="Education">
                Multi-fields scientific education with 1 year focus on IT skills.
            </ExperienceItem>
            <ExperienceItem itemTitle="Key Steps" className="long">
                <ul>
                    <li>Member of the <HighSpecial>Robot</HighSpecial> school association {'E=M6 challenge'}</li>
                    <li>6 month Internship in <High>Netherlands</High>, on the development of a 3D UI {'(Unix - C++ - Qt)'} on a material resistance software.</li>
                </ul>
            </ExperienceItem>
        </>
    );
}