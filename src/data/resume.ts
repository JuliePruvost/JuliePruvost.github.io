export enum ExperienceComponent {
    formation,
    smartTrade,
    sgRates,
    cacib,
    sgEBiz,
    rok,
    sgIwc
}

export interface IExperience {
    startDate: string;
    endDate: string;
    component: ExperienceComponent;
}

export interface IResume {
    experiences: IExperience[]
}

const myResume: IResume =
{
    "experiences": [
        {
            "startDate": "01/09/2002",
            "endDate": "01/10/2005",
            "component": ExperienceComponent.formation
        },
        {
            "startDate": "01/06/2006",
            "endDate": "01/12/2006",
            "component": ExperienceComponent.smartTrade
        },
        {
            "startDate": "01/12/2006",
            "endDate": "01/12/2009",
            "component": ExperienceComponent.sgRates
        },
        {
            "startDate": "01/10/2010",
            "endDate": "01/05/2013",
            "component": ExperienceComponent.cacib
        },
        {
            "startDate": "01/05/2013",
            "endDate": "01/05/2014",
            "component": ExperienceComponent.sgEBiz
        },
        {
            "startDate": "01/08/2014",
            "endDate": "01/09/2015",
            "component": ExperienceComponent.rok
        },
        {
            "startDate": "01/10/2017",
            "endDate": "01/10/2022",
            "component": ExperienceComponent.sgIwc
        }
    ]
};

export default myResume;