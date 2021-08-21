import ReactDOM from "react-dom";
import React from "react";
import Insert from "./insert";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Insert />
            </React.Fragment>
        );
    }
}

var element = document.getElementById("root");
ReactDOM.render(<App />, element);