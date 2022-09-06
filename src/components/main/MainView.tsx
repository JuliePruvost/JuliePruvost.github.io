import mainImage from './main.jpeg';
import './MainView.scss';

function High({children} : {children: React.ReactNode}) {
    return (
        <span className="main-image-description-highlighted">{children}</span>
    )
}

function HighSpecial({children} : {children: React.ReactNode}) {
    return (
        <span className="main-image-description-highlighted special">{children}</span>
    )
}

export default function MainView({
}: {
}) {
    
    return (
        <div className='main-view-wrapper'>
            <div className='main-view-item'>
                <div className='main-view-item-content'>
                    <img src={mainImage} alt="hi"  />
                    {/*<div style={{backgroundImage: `url(${rainbow})`, width: 400, height: 600}}   >
                    </div>*/}
                    <div className='main-text'>
                        <div className='main-image-header'>
                            Hi
                        </div>
                        <p className='main-image-description'>
                            I am Julie Pruvost
                        </p>
                        <p className='main-image-description'>
                            Senior Developer with 13 years of experience with great expertise in Microsoft <High>.NET</High>.
                        </p>
                        <p className='main-image-description'>
                            Currently working at Société Générale, as <HighSpecial>Tech Lead</HighSpecial>.
                        </p>
                        <p className='main-image-description'>
                            <HighSpecial>Web technologies</HighSpecial> have recently caught my attention, and I will bend my career path as a consequence.
                        </p>
                        <p className='main-image-description'>
                            This website was designed to show an overview of my professional experiences and a bit more.
                        </p>                        
                    </div>
                </div>
            </div>
        </div>
    );        
}
