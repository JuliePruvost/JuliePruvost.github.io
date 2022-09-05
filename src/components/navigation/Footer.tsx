import './Footer.scss';
import {ReactComponent as LinedIn} from './components/LinkedIn.svg';
import {ReactComponent as GitHubIn} from './components/GitHub.svg';

const linkedInLink = (
    <a 
        href="https://www.linkedin.com/in/julie-pruvost"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin (link opens in a new tab)"
    >
        <div className="footer-social-icon icon-linkedin"><LinedIn /></div>
        <span className="visually-hidden">LinkedIn</span>
    </a>
);

const githubLink = (
    <a 
        href="https://github.com/JuliePruvost"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin (link opens in a new tab)"
    >
        <div className="footer-social-icon icon-github"><GitHubIn /></div>
        <span className="visually-hidden">GitHub</span>
    </a>
);

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-information">
                    <ul>
                        <li>
                            Designed by Julie Pruvost
                        </li>
                    </ul>
                </div>
                <div className="footer-social-content">
                    {linkedInLink}
                    {githubLink}
                </div>
            </div>
        </div>
    );
}