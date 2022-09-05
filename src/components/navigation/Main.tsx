import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes";
import './Main.scss'
import Footer from "./Footer";

export default function Main() {
    return (
        <BrowserRouter>
            <div className="main-body">
                <Header />
                <div className="main-container">
                    <Routes />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}