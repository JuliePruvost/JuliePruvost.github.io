import ContactForm from "./ContactForm";
import './ContactView.scss';

export default function ContactView () {
    return (
        <div className='jp-contact-form'>
            <h1 className='page-title'>Contact me</h1>
            <ContactForm  />
        </div>
    )
}