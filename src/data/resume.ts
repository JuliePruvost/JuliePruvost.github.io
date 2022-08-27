
export interface IExperience {
    startDate: string;
    endDate: string;
    location: string;
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
            "location": "Ecole Centrale Nantes"
        },
        {
            "startDate": "01/06/2006",
            "endDate": "01/12/2006",
            "location": "SmartTrade"
        },
        {
            "startDate": "01/12/2006",
            "endDate": "01/12/2009",
            "location": "Société Générale CIB"
        },
        {
            "startDate": "01/10/2010",
            "endDate": "01/05/2013",
            "location": "Crédit Agricole CIB"
        },
        {
            "startDate": "01/05/2013",
            "endDate": "01/05/2014",
            "location": "Société Générale CIB"
        },
        {
            "startDate": "01/08/2014",
            "endDate": "01/09/2015",
            "location": "Rok Solution"
        },
        {
            "startDate": "01/10/2017",
            "endDate": "01/10/2022",
            "location": "Société Générale CIB"
        }
    ]
};

export default myResume;