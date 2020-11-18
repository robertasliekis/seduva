import React, { Component } from "react";
import { connect } from "react-redux";

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
      <div
        className="website-info"
        style={
          {
            // height: this.props.mapEntered ? "40rem" : "16rem"
          }
        }
      >
        <div className="website-info-top">
          <h1>Šeduva: kelionė laiku</h1>
          <div className="map-image"></div>
        </div>
        <div className="text-boxes-container">
          <div className="text-box">
            <h1>Apie projektą:</h1>
            <p className="text" style={{ height: this.state.readMoreLtClicked ? "12rem" : "7.5rem" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem
              adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque,
              amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem
              adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque,
              amet?
            </p>
            <div className="btn btn-read-more" onClick={this.readMoreLtClicked}>
              Skaityti daugiau
            </div>
          </div>
          <div className="text-box">
            <h1>About project:</h1>
            <p className="text " style={{ height: this.state.readMoreEnClicked ? "12rem" : "7.5rem" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem
              adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque,
              amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem
              adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque,
              amet?
            </p>
            <div className="btn btn-read-more" onClick={this.readMoreEnClicked}>
              Read more
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteInfo);
