import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TimelineView from "components/resume/TimelineView";

function App() {
    console.log("hello");

    return (
        <div className="App">
            
            <TimelineView width={800} height={400} />
        </div>
    );
}

export default App;
