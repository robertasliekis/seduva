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

const imageNumbers = [1, 2, 3, 4, 5];

const categoriesNames = [
  ["Šeduvos istorija", "history"],
  ["Šeduvos legendos", "legends"],
  ["Šeduva dabar", "present"]
];

const iconNames = [
  ["history", "gallery"],
  ["history", "audio"],
  ["legends", "video"],
  ["legends", "video"],
  ["legends", "video"],
  ["legends", "video"],
  ["legends", "video"],
  ["legends", "video"],
  ["legends", "video"],
  ["present", "vr"],
  ["present", "vr"],
  ["present", "vr"],
  ["present", "vr"],
  ["present", "vr"],
  ["present", "vr"],
  ["present", "vr"],
  ["present", "vr"]
];

const iconInnactiveUrl = [
  "./images/seduvos istorija - icon 1-1-01.png",
  "./images/seduvos istorija - icon 2-1-01.png",
  "./images/seduvos legendos 1-1-01.png",
  "./images/seduvos legendos 2-1-01.png",
  "./images/seduvos legendos 3-1-01.png",
  "./images/seduvos legendos 4-1-01.png",
  "./images/seduvos legendos 5-1-01.png",
  "./images/seduvos legendos 6-1-01.png",
  "./images/seduvos legendos 7-1-01.png",
  "./images/seduva dabar 1-1-01.png",
  "./images/seduva dabar 2-1-01.png",
  "./images/seduva dabar 3-1-01.png",
  "./images/seduva dabar 4-1-01.png",
  "./images/seduva dabar 5-1-01.png",
  "./images/seduva dabar 6-1-01.png",
  "./images/seduva dabar 7-1-01.png",
  "./images/seduva dabar 8-1-01.png"
];

const iconHoveredUrl = [
  "/images/seduvos istorija - icon 1-2-01.png",
  "/images/seduvos istorija - icon 2-2-01.png",
  "/images/seduvos legendos 1-2-01.png",
  "/images/seduvos legendos 2-2-01.png",
  "/images/seduvos legendos 3-2-01.png",
  "/images/seduvos legendos 4-2-01.png",
  "/images/seduvos legendos 5-2-01.png",
  "/images/seduvos legendos 6-2-01.png",
  "/images/seduvos legendos 7-2-01.png",
  "/images/seduva dabar 1-2-01.png",
  "/images/seduva dabar 2-2-01.png",
  "/images/seduva dabar 3-2-01.png",
  "/images/seduva dabar 4-2-01.png",
  "/images/seduva dabar 5-2-01.png",
  "/images/seduva dabar 6-2-01.png",
  "/images/seduva dabar 7-2-01.png",
  "/images/seduva dabar 8-2-01.png"
];

const iconClickedUrl = [
  "/images/seduvos istorija - icon 1-3-01.png",
  "/images/seduvos istorija - icon 2-3-01.png",
  "/images/seduvos legendos 1-3-01.png",
  "/images/seduvos legendos 2-3-01.png",
  "/images/seduvos legendos 3-3-01.png",
  "/images/seduvos legendos 4-3-01.png",
  "/images/seduvos legendos 5-3-01.png",
  "/images/seduvos legendos 6-3-01.png",
  "/images/seduvos legendos 7-3-01.png",
  "/images/seduva dabar 1-3-01.png",
  "/images/seduva dabar 2-3-01.png",
  "/images/seduva dabar 3-3-01.png",
  "/images/seduva dabar 4-3-01.png",
  "/images/seduva dabar 5-3-01.png",
  "/images/seduva dabar 6-3-01.png",
  "/images/seduva dabar 7-3-01.png",
  "/images/seduva dabar 8-3-01.png"
];

export class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryTypeHovered: "",
      categoryTypeClicked: "",
      categoryRef: "",
      containerType: "",
      galleryImageIndex: 0,
      confirmVROpen: false,
      mapZoomLevel: 1,
      scrollPosition: 0,
      mouseEnterMap: true,
      mediaPlayState: false
    };
    this.categoriesRefs = {};
    this.logoInnactiveRefs = {};
    this.logoHoveredRefs = {};
    this.logoClickedRefs = {};
    this.videoAboutRef = React.createRef();
    this.audioAboutRef = React.createRef();
  }
  mouseEnterCategory = (type) => {
    this.setState({
      categoryTypeHovered: type
      //categoryTypeClicked: ""
    });
  };
  mouseLeaveCategory = () => {
    this.setState({
      categoryTypeHovered: ""
      // categoryTypeClicked: ""
    });
  };

  mouseClickCategory = (type, ref) => {
    this.setState({
      categoryTypeClicked: type,
      categoryRef: ref
    });
  };

  mouseEnterMapIcon = (ref) => {
    console.log(ref);
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
    if (this.state.categoryTypeHovered !== prevState.categoryTypeHovered) {
      if (this.state.categoryTypeClicked !== "") {
        for (let i = 0; i < 3; i++) {
          // this.categoriesRefs[i].classList.remove(`btn-border-${categoriesNames[i][1]}`);
        }
      }

      for (let i = 0; i < iconNames.length; i++) {
        this.logoHoveredRefs[i].style.opacity = 0;
        if (this.state.categoryTypeHovered !== "") {
          if (this.logoHoveredRefs[i].classList.contains(`logo-${this.state.categoryTypeHovered}`)) {
            this.logoHoveredRefs[i].style.opacity = 1;
          }
        } else this.logoHoveredRefs[i].style.opacity = 0;
      }
    }
    if (this.state.categoryTypeClicked !== prevState.categoryTypeClicked) {
      for (let i = 0; i < iconNames.length; i++) {
        this.logoClickedRefs[i].style.opacity = 0;
        //  if (this.state.categoryTypeClicked !== "") {
        for (let i = 0; i < 3; i++) {
          this.categoriesRefs[i].classList.remove(`btn-border-${categoriesNames[i][1]}`);
        }
        this.state.categoryRef.classList.add(`btn-border-${this.state.categoryTypeClicked}`);
        if (this.logoClickedRefs[i].classList.contains(`logo-${this.state.categoryTypeClicked}`)) {
          this.logoInnactiveRefs[i].style.opacity = 0;
          this.logoHoveredRefs[i].style.opacity = 0;
          this.logoClickedRefs[i].style.opacity = 1;
          this.logoClickedRefs[i].style.pointerEvents = "auto";
          this.logoClickedRefs[i].classList.add("logo-animation");
        } else {
          this.logoInnactiveRefs[i].style.opacity = 1;
          this.logoClickedRefs[i].style.opacity = 0;
          this.logoClickedRefs[i].style.pointerEvents = "none";
          // this.state.categoryRef.classList.remove(`btn-border-history`);
          // this.state.categoryRef.classList.remove(`btn-border-legends`);
          //  this.state.categoryRef.classList.remove(`btn-border-present`);
        }
      }
    }
  }

  mouseEnterMapHandler = () => {
    this.props.mouseEnterMap(true);
    this.setState({ scrollPosition: window.pageYOffset });
    this.props.setScrollPosition(window.pageYOffset);
  };

  mouseLeaveMapHandler = () => {
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
    return (
      <div className="interactive-map-section">
        <div className="map-container">
          <div className="map-images-container">
            <div className="main-map-image"></div>
            <div className="map-icons-container">
              {iconNames.map((icon, index) => {
                return (
                  <div className={`btn btn-${icon[0]}`} key={`${icon[0]}${index}`}>
                    <div
                      ref={(ref) => {
                        this.logoInnactiveRefs[index] = ref;
                      }}
                      className={`logo logo-${icon[0]} logo-innactive`}
                      style={{ backgroundImage: `url("${iconInnactiveUrl[index]}")` }}
                    ></div>
                    <div
                      ref={(ref) => {
                        this.logoHoveredRefs[index] = ref;
                      }}
                      className={`logo logo-${icon[0]} logo-hovered`}
                      style={{ backgroundImage: `url("${iconHoveredUrl[index]}")` }}
                    ></div>
                    <div
                      onClick={() => {
                        this.openContainerClicked(icon[1]);
                      }}
                      ref={(ref) => {
                        this.logoClickedRefs[index] = ref;
                      }}
                      className={`logo logo-${icon[0]} logo-clicked`}
                      style={{ backgroundImage: `url("${iconClickedUrl[index]}")` }}
                    ></div>
                  </div>
                );
              })}

              {/* icons end-------------------------- */}
            </div>
          </div>
          <div className="categories">
            <div className="text-container">
              <h1>Rinkis kategoriją:</h1>
            </div>
            <div className="buttons-container">
              {categoriesNames.map((category, index) => {
                return (
                  <div
                    className={`btn btn-${category[1]}`}
                    key={`key${index}`}
                    ref={(ref) => {
                      this.categoriesRefs[index] = ref;
                    }}
                    onMouseEnter={() => {
                      this.mouseEnterCategory(category[1]);
                    }}
                    onMouseLeave={this.mouseLeaveCategory}
                    onClick={() => {
                      this.mouseClickCategory(category[1], this.categoriesRefs[index]);
                    }}
                  >
                    <div className="circle"></div>
                    <p>{category[0]}</p>
                  </div>
                );
              })}
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
                ></div>
                <div
                  className="btn btn-play btn-pause"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.videoAboutRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "flex" : "none" }}
                ></div>
              </div>

              <div
                className="btn btn-close"
                onClick={() => {
                  this.openContainerClicked("video");
                }}
              ></div>
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
                ></div>
                <div
                  className="btn btn-play btn-pause"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.audioAboutRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "flex" : "none" }}
                ></div>
              </div>

              <div className="btn btn-close" onClick={this.openContainerClicked}></div>
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
                      opacity: this.state.galleryImageIndex === 0 ? 0.6 : 1,
                      cursor: this.state.galleryImageIndex === 0 ? "default" : "pointer"
                    }}
                  ></div>
                  <div
                    className="btn btn-gallery btn-next"
                    onClick={this.nextImageClicked}
                    style={{
                      opacity: this.state.galleryImageIndex === 4 ? 0.6 : 1,
                      cursor: this.state.galleryImageIndex === 4 ? "default" : "pointer"
                    }}
                  ></div>
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
              <div className="btn btn-close" onClick={this.openContainerClicked}></div>
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
            <div className="btn btn-close" onClick={this.openContainerClicked}></div>
            <p>Jūs įeinate į 360° VRT</p>
            <div className="btn btn-confirm-vr" onClick={this.btnVRConfirmClicked}>
              Ok
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
