import React, { Component } from "react";
import { connect } from "react-redux";

import { mouseEnterMap, setScrollPosition } from "../actions";

import image1Url from "../images/simkunaite/simkunaite1.jpg";
import image2Url from "../images/simkunaite/simkunaite2.jpg";
import image3Url from "../images/simkunaite/simkunaite3.jpg";
import image4Url from "../images/simkunaite/simkunaite4.jpg";

const imageArray = [image1Url, image2Url, image3Url, image4Url];

export class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconHistoryHovered: false,
      iconLegendsHovered: false,
      iconPresentHovered: false,
      containerVideoOpen: false,
      containerAudioOpen: false,
      containerGalleryOpen: false,
      containerVROpen: false,
      galleryImageIndex: 1,
      confirmVROpen: false,
      mapZoomLevel: 1,
      scrollPosition: 0,
      mouseEnterMap: true
    };
    //  this.videoRef = React.createRef();
  }
  mouseEnterHistoryHandler = () => {
    this.setState({
      iconHistoryHovered: true
    });
  };
  mouseLeaveHistoryHandler = () => {
    this.setState({
      iconHistoryHovered: false
    });
  };
  mouseEnterLegendsHandler = () => {
    this.setState({
      iconLegendsHovered: true
    });
  };
  mouseLeaveLegendsHandler = () => {
    this.setState({
      iconLegendsHovered: false
    });
  };
  mouseEnterPresentHandler = () => {
    this.setState({
      iconPresentHovered: true
    });
  };
  mouseLeavePresentHandler = () => {
    this.setState({
      iconPresentHovered: false
    });
  };

  mapZoomHandler = (event) => {
    console.log("wheel");
    console.log(this.state.mapZoomLevel);
    let initialState = this.state.mapZoomLevel;

    if (event.deltaY > 0 && this.state.mapZoomLevel <= 2) {
      this.setState({ mapZoomLevel: initialState + 0.1 });
    } else if (event.deltaY < 0 && this.state.mapZoomLevel > 1) {
      this.setState({ mapZoomLevel: initialState - 0.1 });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.mapEntered != prevProps.mapEntered) {
      if (!this.props.mapEntered) {
        window.scrollTo(0, this.state.scrollPosition);
      }
    }
  }

  mouseEnterMapHandler = () => {
    // this.setState({ mouseEnterMap: true });
    this.props.mouseEnterMap(true);
    this.setState({ scrollPosition: window.pageYOffset });
    this.props.setScrollPosition(window.pageYOffset);
  };

  mouseLeaveMapHandler = () => {
    //this.setState({ mouseEnterMap: false });
    this.props.mouseEnterMap(false);
    this.props.setScrollPosition(0);
  };

  resetZoomHandler = () => {
    this.setState({ mapZoomLevel: 1 });
  };

  btnGalleryOpenClicked = () => {
    let initialState = this.state.containerGalleryOpen;
    this.setState({ containerGalleryOpen: !initialState });
  };

  btnVideoOpenClicked = () => {
    let initialState = this.state.containerVideoOpen;
    this.setState({ containerVideoOpen: !initialState });
  };

  btnAudioOpenClicked = () => {
    let initialState = this.state.containerAudioOpen;
    this.setState({ containerAudioOpen: !initialState });
  };
  btnVROpenClicked = () => {
    let initialState = this.state.containerVROpen;
    this.setState({ containerVROpen: !initialState, confirmVROpen: false });
  };

  nextImageClicked = () => {
    if (this.state.galleryImageIndex === 6) {
      this.setState({ galleryImageIndex: 1 });
    } else {
      this.setState({ galleryImageIndex: this.state.galleryImageIndex + 1 });
    }
  };
  previousImageClicked = () => {
    if (this.state.galleryImageIndex === 1) {
      this.setState({ galleryImageIndex: 6 });
    } else {
      this.setState({ galleryImageIndex: this.state.galleryImageIndex - 1 });
    }
  };

  btnVRConfirmClicked = () => {
    this.setState({ confirmVROpen: true });
  };

  componentDidMount() {
    // window.scrollTo(1, 500);
  }

  render() {
    const logoHistoryClass = this.state.iconHistoryHovered ? "logo-scale-animation" : "";
    const logoLegendsClass = this.state.iconLegendsHovered ? "logo-scale-animation" : "";
    const logoPresentClass = this.state.iconPresentHovered ? "logo-scale-animation" : "";

    const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
      <div className="interactive-map">
        <div className="categories">
          <div className="text-container">
            <h1>Pasirinkite kategoriją - aprašymą</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nulla nemo nostrum voluptates repellat soluta est quasi
              deleniti? Vero, excepturi?
            </p>
          </div>
          <div className="buttons-container">
            <div className="btn" onMouseEnter={this.mouseEnterHistoryHandler} onMouseLeave={this.mouseLeaveHistoryHandler}>
              <div className="circle"></div>
              <p>Šeduvos istorija</p>
            </div>
            <div className="btn" onMouseEnter={this.mouseEnterLegendsHandler} onMouseLeave={this.mouseLeaveLegendsHandler}>
              <div className="circle"></div>
              <p>Šeduvos legendos</p>
            </div>
            <div className="btn" onMouseEnter={this.mouseEnterPresentHandler} onMouseLeave={this.mouseLeavePresentHandler}>
              <div className="circle"></div>
              <p>Šeduva dabar</p>
            </div>
          </div>
        </div>
        <div className="map-zone-container">
          <div className="map-zone-overflow-wrapper">
            <div className="btn btn-reset-map-zoom" onClick={this.resetZoomHandler}>
              RESET ZOOM
            </div>
            <div
              className="map-zone-frame"
              onWheel={(event) => this.mapZoomHandler(event)}
              onMouseEnter={this.mouseEnterMapHandler}
              onMouseLeave={this.mouseLeaveMapHandler}
              style={{ transform: `scale(${this.state.mapZoomLevel})` }}
            >
              <div className="map-image"></div>
              <div className="overlay-buttons">
                <div className="btn btn-history" onClick={this.btnGalleryOpenClicked}>
                  <div className={"logo " + logoHistoryClass}>Galerija</div>
                  <div className="circle"></div>
                </div>
                <div className="btn btn-history" onClick={this.btnAudioOpenClicked}>
                  <div className={"logo " + logoHistoryClass}>Babos audio</div>
                  <div className="circle"></div>
                </div>
                <div className="btn btn-legends" onClick={this.btnVideoOpenClicked}>
                  <div className={"logo " + logoLegendsClass}>Video</div>

                  <div className="circle"></div>
                </div>
                <div className="btn btn-legends">
                  <div className={"logo " + logoLegendsClass}></div>

                  <div className="circle"></div>
                </div>
                <div className="btn btn-legends">
                  <div className={"logo " + logoLegendsClass}></div>

                  <div className="circle"></div>
                </div>
                <div className="btn btn-present" onClick={this.btnVROpenClicked}>
                  <div className={"logo " + logoPresentClass}>VR</div>

                  <div className="circle"></div>
                </div>
                <div className="btn btn-present">
                  <div className={"logo " + logoPresentClass}></div>

                  <div className="circle"></div>
                </div>
                <div className="btn btn-present">
                  <div className={"logo " + logoPresentClass}></div>

                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-window-container window-video" style={{ display: this.state.containerVideoOpen ? "flex" : "none" }}>
          <div className="window-content">
            <div className="content-top">
              <h1>Babos video</h1>
              <div className="btn btn-close" onClick={this.btnVideoOpenClicked}>
                CLOSE
              </div>
            </div>
            <div className="content-bottom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi
                veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi
                fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam
                unde fugiat beatae sunt ipsam voluptatem vel saepe quo.
              </p>
              <div className="video-screen">VIDEO SCREEN</div>
            </div>
          </div>
        </div>
        <div className="modal-window-container window-audio" style={{ display: this.state.containerAudioOpen ? "flex" : "none" }}>
          <div className="window-content">
            <div className="content-top">
              <h1>Babos audio</h1>
              <div className="btn btn-close" onClick={this.btnAudioOpenClicked}>
                CLOSE
              </div>
            </div>
            <div className="content-bottom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi
                veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi
                fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam
                unde fugiat beatae sunt ipsam voluptatem vel saepe quo.
              </p>
              <div className="video-screen">AUDIO SCREEN</div>
            </div>
          </div>
        </div>
        <div className="modal-window-container window-gallery" style={{ display: this.state.containerGalleryOpen ? "flex" : "none" }}>
          <div className="window-content">
            <div className="content-top">
              <h1>Babos galerija</h1>

              <div className="btn btn-close" onClick={this.btnGalleryOpenClicked}>
                Close
              </div>
            </div>
            <div className="content-bottom">
              <div className="btn btn-previous" onClick={this.previousImageClicked}>
                PREVIUOS
              </div>
              <div className={`image-container plant-image-container`}>
                <div className="image-carousel-overflow">
                  <div className="image-carousel plant-image-carousel" style={{ left: `${this.state.galleryImageIndex * -100}%` }}>
                    {imageNumbers.map((imageNumber) => {
                      return <div key={"image" + imageNumber} className="image"></div>;
                    })}
                  </div>
                </div>
              </div>
              <div className="btn btn-next" onClick={this.nextImageClicked}>
                NEXT
              </div>
            </div>
          </div>
        </div>
        <div className="modal-window-container window-virtual-reality" style={{ display: this.state.containerVROpen ? "flex" : "none" }}>
          <div className="window-content">
            <div className="content-top">
              <div className="btn btn-close" onClick={this.btnVROpenClicked}>
                Close
              </div>
            </div>
            <div className="content-bottom">
              <div className="vr-video-container"></div>
              <div className="btn-container" style={{ display: this.state.confirmVROpen ? "none" : "flex" }}>
                <div className="btn btn-confirm-vr" onClick={this.btnVRConfirmClicked}>
                  Jūs įeinate į 360° VRT
                </div>
              </div>
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
  mouseEnterMap,
  setScrollPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveMap);
