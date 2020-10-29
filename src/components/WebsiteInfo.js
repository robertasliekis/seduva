import React, { Component } from "react";

export class WebsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMoreLtClicked: false,
      readMoreEnClicked: false
    };
    //  this.videoRef = React.createRef();
  }

  readMoreLtClicked = () => {
    const initialState = this.state.readMoreLtClicked;
    this.setState({ readMoreLtClicked: !initialState });
  };

  readMoreEnClicked = () => {
    const initialState = this.state.readMoreEnClicked;
    this.setState({ readMoreEnClicked: !initialState });
  };
  render() {
    return (
      <div className="website-info">
        <h1>ŠEDUVA: KELIONĖ LAIKU</h1>
        <div className="text-boxes-container">
          <div className="text-box">
            <p className="text" style={{ height: this.state.readMoreLtClicked ? "15rem" : "6rem" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem
              adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque,
              amet?
            </p>
            <button className="btn btn-read-more" onClick={this.readMoreLtClicked}>
              SKAITYTI DAUGIAU
            </button>
          </div>
          <div className="text-box">
            <p className="text " style={{ height: this.state.readMoreEnClicked ? "15rem" : "6rem" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem
              adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque,
              amet?
            </p>
            <button className="btn btn-read-more" onClick={this.readMoreEnClicked}>
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteInfo;
