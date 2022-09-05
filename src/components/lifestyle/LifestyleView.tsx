import './LifestyleView.scss';
import rainbow from './components/rainbow.jpg';
import volleyball from './components/volleyball.jpg';
import fashion from './components/fashion.jpg';
import dance from './components/dance.jpeg';
import music from './components/music.jpg';

export default function LifestyleView () {
    return (
        <div className='lifestyle-view-wrapper'>
            <div className='lifestyle-view-item left'>
                <div className='lifestyle-view-item-content'>
                    <img src={rainbow} alt="Rainbow"   />
                    {/*<div style={{backgroundImage: `url(${rainbow})`, width: 400, height: 600}}   >
                    </div>*/}
                    <div className='lifestyle-text left'>
                        <div className='lifestyle-image-header'>
                            {'Rainbow <3'}
                        </div> 
                        <p className='lifestyle-image-description'>
                            Proud member of the <span className='lifestyle-test-highlight'>{'LGBTQIA+ & Allies'}</span> community. I participate in diversity visibility actions at Société Générale. I value respect and tolerance very much. My pronouns are she/her.
                        </p>
                    </div>
                </div>
            </div>
            <div className='lifestyle-view-item right'>
                <div className='lifestyle-view-item-content right'>
                    <div className='lifestyle-text right'>
                        <div className='lifestyle-image-header'>
                            {'Body & Soul'}
                        </div> 
                        <p className='lifestyle-image-description'>
                            Sports plays a big role in my life. Volleyball shares great team spirit values. I have been playing for 5 years and now play competitively with several teams. I like to practice to improve my techniques and I really enjoy teaching new players.
                        </p>
                    </div>
                    <img src={volleyball} alt="VolleyBall"   />
                </div>
            </div>
            <div className='lifestyle-view-item left'>
                <div className='lifestyle-view-item-content left'>
                    <img src={fashion} alt="Fashion"   />
                    <div className='lifestyle-text left'>
                        <div className='lifestyle-image-header'>
                            Slow Fashion
                        </div> 
                        <p className='lifestyle-image-description'>
                            Just like code quality, I value much more quality over quantity. I fancy italian style very much. Elisabetta Franchi is one of my favorite designers, on the 'not too unreasonable' price range. For environmnental reasons, I try hard not to give in to compulsive shopping... Versace's website was a great inspiration to build this website.
                        </p>
                    </div>
                </div>
            </div>
            <div className='lifestyle-view-item right'>
                <div className='lifestyle-view-item-content right'>
                    <div className='lifestyle-text right'>
                        <div className='lifestyle-image-header'>
                            Can you hip hop ?
                        </div> 
                        <p className='lifestyle-image-description'>
                            For a very long time, dancing was an activity totally absent from my life. Starting hip-hop dance classes last year turned out to be a great lesson in humility. I usually try to go party once a week ! Yay !
                        </p>
                    </div>
                    <img src={dance} alt="Dance"   />
                </div>
            </div>
            <div className='lifestyle-view-item left'>
                <div className='lifestyle-view-item-content left'>
                    <img src={music} alt="Music"   />
                    <div className='lifestyle-text left'>
                        <div className='lifestyle-image-header'>
                            Music
                        </div> 
                        <p className='lifestyle-image-description'>
                            Singer and guitar player. I used to play in metal cover bands then switched to pop/rock/folk and was introduced to jazz at conservatory. In 2015 I stopped my professional career to dedicate quite some time to music. This project is now on hold.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}