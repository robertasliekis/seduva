import React, { Component } from "react";
import { connect } from "react-redux";
import { playBackgroundAudio } from "../actions";

import audioBackground from "../audio/audio_background.mp3";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.audioBackgroundRef = React.createRef();
  }

  btnPlayBackgroundAudio = () => {
    let initialState = this.props.backgroundAudioPlaying;
    if (initialState) {
      this.audioBackgroundRef.current.pause();
    } else {
      this.audioBackgroundRef.current.play();
      this.audioBackgroundRef.current.volume = 0.5;
    }
    this.props.playBackgroundAudio(!initialState);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.backgroundAudioPlaying !== prevProps.backgroundAudioPlaying) {
      if (!this.props.backgroundAudioPlaying) {
        this.audioBackgroundRef.current.pause();
      }
    }
  }
  render() {
    return (
      <div className="header">
        <div className="btn btn-audio" onClick={this.btnPlayBackgroundAudio}>
          {this.props.backgroundAudioPlaying ? <div className="icon icon-audio-pause"></div> : <div className="icon icon-audio-play"></div>}
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
    backgroundAudioPlaying: state.playBackgroundAudio.backgroundAudioPlaying
  };
};

const mapDispatchToProps = {
  playBackgroundAudio
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
