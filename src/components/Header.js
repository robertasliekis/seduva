import React, { Component } from "react";

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
        <div className="btn btn-audio" onClick={this.btnPlayBackgroundAudio}>
          AUDIO
        </div>
        <audio loop ref={this.audioBackgroundRef}>
          <source src={audioBackground}></source>
        </audio>
      </div>
    );
  }
}

export default Header;
