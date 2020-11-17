import React, { Component } from "react";
import { connect } from "react-redux";

import { mouseEnterMap, setScrollPosition } from "../actions";

// import image1Url from "../images/simkunaite/simkunaite1.jpg";
// import image2Url from "../images/simkunaite/simkunaite2.jpg";
// import image3Url from "../images/simkunaite/simkunaite3.jpg";
// import image4Url from "../images/simkunaite/simkunaite4.jpg";

// const imageArray = [image1Url, image2Url, image3Url, image4Url];

import videoAbout from "../video/video.mp4";
import audioAbout from "../audio/about.mp3";

export class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTypeHovered: "",
      containerType: "",
      galleryImageIndex: 0,
      confirmVROpen: false,
      mapZoomLevel: 1,
      scrollPosition: 0,
      mouseEnterMap: true,
      mediaPlayState: false
    };
    this.videoAboutRef = React.createRef();
    this.audioAboutRef = React.createRef();
  }
  mouseEnterIconHandler = (type) => {
    this.setState({
      iconTypeHovered: type
    });
  };
  mouseLeaveIconHandler = () => {
    this.setState({
      iconTypeHovered: ""
    });
  };

  mapZoomHandler = (event) => {
    let initialState = this.state.mapZoomLevel;
    if (event.deltaY > 0 && this.state.mapZoomLevel <= 2) {
      this.setState({ mapZoomLevel: initialState + 0.1 });
    } else if (event.deltaY < 0 && this.state.mapZoomLevel > 1) {
      this.setState({ mapZoomLevel: initialState - 0.1 });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.mapEntered !== prevProps.mapEntered) {
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

  openContainerClicked = (type) => {
    if (this.state.containerType === "") {
      this.setState({ containerType: type });
    } else if (this.state.containerType !== "") {
      this.setState({ containerType: "" });
    }
    this.setState({ mediaPlayState: false });
    this.videoAboutRef.current.pause();
    this.videoAboutRef.current.currentTime = 0;
    this.audioAboutRef.current.pause();
    this.audioAboutRef.current.currentTime = 0;
  };

  buttonPlayClickedHandler = (ref) => {
    let currentMediaState = this.state.mediaPlayState;
    this.setState({ mediaPlayState: !currentMediaState });
    if (currentMediaState) {
      ref.current.pause();
    } else ref.current.play();
  };

  nextImageClicked = () => {
    if (this.state.galleryImageIndex !== 4) {
      this.setState({ galleryImageIndex: this.state.galleryImageIndex + 1 });
    }
  };
  previousImageClicked = () => {
    if (this.state.galleryImageIndex !== 0) {
      this.setState({ galleryImageIndex: this.state.galleryImageIndex - 1 });
    }
  };

  btnVRConfirmClicked = () => {
    this.setState({ confirmVROpen: true });
  };

  componentDidMount() {}

  render() {
    const logoHistoryClass = this.state.iconTypeHovered === "history" ? "logo-scale-animation" : "";
    const logoLegendsClass = this.state.iconTypeHovered === "legends" ? "logo-scale-animation" : "";
    const logoPresentClass = this.state.iconTypeHovered === "present" ? "logo-scale-animation" : "";

    const imageNumbers = [1, 2, 3, 4, 5];

    const buttonNames = [
      ["Šeduvos istorija", "history"],
      ["Šeduvos legendos", "legends"],
      ["Šeduva dabar", "present"]
    ];

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
            {buttonNames.map((button) => {
              return (
                <div
                  className="btn"
                  onMouseEnter={() => {
                    this.mouseEnterIconHandler(button[1]);
                  }}
                  onMouseLeave={this.mouseLeaveIconHandler}
                >
                  <div className="circle"></div>
                  <p>{button[0]}</p>
                </div>
              );
            })}
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
                <div
                  className="btn btn-history"
                  onClick={() => {
                    this.openContainerClicked("gallery");
                  }}
                >
                  <div className={"logo " + logoHistoryClass}>Galerija</div>
                  <div className="circle"></div>
                </div>
                <div
                  className="btn btn-history"
                  onClick={() => {
                    this.openContainerClicked("audio");
                  }}
                >
                  <div className={"logo " + logoHistoryClass}>Babos audio</div>
                  <div className="circle"></div>
                </div>
                <div
                  className="btn btn-legends"
                  onClick={() => {
                    this.openContainerClicked("video");
                  }}
                >
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
                <div
                  className="btn btn-present"
                  onClick={() => {
                    this.openContainerClicked("vr");
                  }}
                >
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
        {/* Video container */}
        <div className="modal-window-container window-video" style={{ display: this.state.containerType === "video" ? "flex" : "none" }}>
          <div className="window-content">
            <div className="content-top">
              <div className="media-screen">
                <div className="video-container">
                  <video ref={this.videoAboutRef}>
                    <source src={videoAbout} type="video/mp4" />
                  </video>
                </div>
                <div
                  className="btn btn-play"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.videoAboutRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "none" : "flex" }}
                >
                  PLAY
                </div>
                <div
                  className="btn btn-play btn-pause"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.videoAboutRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "flex" : "none" }}
                >
                  PAUSE
                </div>
              </div>

              <div
                className="btn btn-close"
                onClick={() => {
                  this.openContainerClicked("video");
                }}
              >
                X
              </div>
            </div>
            <div className="content-bottom">
              <h1>Babos video</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi
                veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi
                fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam
                unde fugiat beatae sunt ipsam voluptatem vel saepe quo.
              </p>
            </div>
          </div>
        </div>
        {/* Audio container */}
        <div className="modal-window-container window-audio" style={{ display: this.state.containerType === "audio" ? "flex" : "none" }}>
          <div className="window-content">
            <div className="content-top">
              <div className="media-screen">
                <div className="video-container">
                  <audio ref={this.audioAboutRef}>
                    <source src={audioAbout} type="audio/mp3" />
                  </audio>
                </div>
                <div
                  className="btn btn-play"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.audioAboutRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "none" : "flex" }}
                >
                  PLAY
                </div>
                <div
                  className="btn btn-play btn-pause"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.audioAboutRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "flex" : "none" }}
                >
                  PAUSE
                </div>
              </div>

              <div className="btn btn-close" onClick={this.openContainerClicked}>
                X
              </div>
            </div>
            <div className="content-bottom">
              <h1>Babos audio</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi
                veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi
                fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam
                unde fugiat beatae sunt ipsam voluptatem vel saepe quo.
              </p>
            </div>
          </div>
        </div>
        {/* Gallery container */}
        <div
          className="modal-window-container window-gallery"
          style={{ display: this.state.containerType === "gallery" ? "flex" : "none" }}
        >
          <div className="window-content">
            <div className="content-top">
              <div className="media-screen">
                <div className="buttons">
                  <div
                    className="btn btn-gallery btn-previous"
                    onClick={this.previousImageClicked}
                    style={{
                      opacity: this.state.galleryImageIndex === 0 ? 0.5 : 1,
                      cursor: this.state.galleryImageIndex === 0 ? "default" : "pointer"
                    }}
                  >
                    PREVIUOS
                  </div>
                  <div
                    className="btn btn-gallery btn-next"
                    onClick={this.nextImageClicked}
                    style={{
                      opacity: this.state.galleryImageIndex === 4 ? 0.5 : 1,
                      cursor: this.state.galleryImageIndex === 4 ? "default" : "pointer"
                    }}
                  >
                    NEXT
                  </div>
                </div>
                <div className={`image-container`}>
                  <div className="image-carousel-overflow">
                    <div className="image-carousel " style={{ left: `${this.state.galleryImageIndex * -100}%` }}>
                      {imageNumbers.map((imageNumber) => {
                        return <div key={"image" + imageNumber} className="image"></div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn btn-close" onClick={this.openContainerClicked}>
                Close
              </div>
            </div>
            <div className="content-bottom">
              <div className={`image-container`}>
                {imageNumbers.map((imageNumber, index) => {
                  return (
                    <div
                      key={"image" + imageNumber}
                      className="image"
                      style={{ opacity: index === this.state.galleryImageIndex ? 1 : 0.5 }}
                    ></div>
                  );
                })}
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt quae reprehenderit laudantium esse enim adipisci
                molestias nemo perferendis? Hic iure corporis dignissimos? Temporibus dolor numquam possimus, tempore ea placeat? Iste amet
                fuga mollitia blanditiis praesentium eveniet laudantium, culpa molestias quod laborum eligendi sit, aperiam maxime earum sed
                aliquam tenetur?
              </p>
            </div>
          </div>
        </div>
        <div
          className="modal-window-container window-virtual-reality"
          style={{ display: this.state.containerType === "vr" ? "flex" : "none" }}
        >
          <div className="window-content">
            <div className="content-top">
              <div className="btn btn-close" onClick={this.openContainerClicked}>
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
