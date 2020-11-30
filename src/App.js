import "./App.css";
import React from "react";
import Header from "./components/Header";
import WebsiteInfo from "./components/WebsiteInfo";
import InteractiveMap from "./components/InteractiveMap";
import ModelViewerThree from "./components/ModelViewerThree";

// "homepage": "http://https://robertasliekis.github.io/seduva/",

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="overflow-wrapper">
          <div className="website-wrapper">
            <Header />
            <WebsiteInfo />
            <InteractiveMap />
            {/* <ModelViewerThree /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
