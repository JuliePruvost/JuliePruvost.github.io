import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import TimelineView from "components/resume/TimelineView";
import ContactView from "components/contact/ContactView";

function App() {
    return (
        <div className="App">
            <ContactView />
            {/*<TimelineView width={800} height={400} />*/}
        </div>
    );
}

export default App;
