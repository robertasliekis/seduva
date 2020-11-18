import React, { Component } from "react";
import { connect } from "react-redux";

import audioBackground from "../audio/sounds.mp3";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playBackgroundAudio: false
    };
    this.audioBackgroundRef = React.createRef();
  }

  btnPlayBackgroundAudio = () => {
    let initialState = this.state.playBackgroundAudio;
    if (initialState) {
      this.audioBackgroundRef.current.pause();
    } else {
      this.audioBackgroundRef.current.play();
    }
    this.setState({ playBackgroundAudio: !initialState });
  };
  render() {
    return (
      <div className="header">
        <div
          className="btn btn-audio"
          onClick={this.btnPlayBackgroundAudio}
          // style={{ marginRight: this.props.mapEntered ? "17px" : "0px" }}
        >
          AUDIO
        </div>
        <audio loop ref={this.audioBackgroundRef}>
          <source src={audioBackground}></source>
        </audio>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapEntered: state.mouseEnterMap.mapEntered
  };
};

const mapDispatchToProps = {
  // changePageNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
