import "./App.css";
import React from "react";
import Header from "./components/Header";
import WebsiteInfo from "./components/WebsiteInfo";
import InteractiveMap from "./components/InteractiveMap";

import { connect } from "react-redux";

//import { changePageNumber, mouseEnterPlant, mouseEnterMovie } from "../actions";

// "homepage": "http://https://robertasliekis.github.io/seduva/",

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div
          className="overflow-wrapper"
          // style={{
          //   overflow: this.props.mapEntered ? "hidden" : "visible",
          //   height: this.props.mapEntered ? "100vh" : "100%",
          //   paddingRight: this.props.mapEntered ? "17px" : "0px"
          // }}
        >
          <div
            className="website-wrapper"
            // style={{ marginTop: `-${this.props.scrollPosition}px` }}
          >
            <Header />
            <WebsiteInfo />
            <InteractiveMap />
            {/* <ModelViewer /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapEntered: state.mouseEnterMap.mapEntered,
    scrollPosition: state.setScrollPosition.scrollPosition
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
