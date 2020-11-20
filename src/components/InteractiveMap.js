import React, { Component } from "react";
import { connect } from "react-redux";

import { mouseEnterMap, setScrollPosition } from "../actions";

// import image1Url from "../images/simkunaite/simkunaite1.jpg";
// import image2Url from "../images/simkunaite/simkunaite2.jpg";
// import image3Url from "../images/simkunaite/simkunaite3.jpg";
// import image4Url from "../images/simkunaite/simkunaite4.jpg";

// const imageArray = [image1Url, image2Url, image3Url, image4Url];

import videoAbout1 from "../video/video1.mp4";
import videoAbout2 from "../video/video1.mp4";
import videoAbout3 from "../video/video1.mp4";
import videoAbout4 from "../video/video1.mp4";
import videoAbout5 from "../video/video1.mp4";
import videoAbout6 from "../video/video1.mp4";
import videoAbout7 from "../video/video1.mp4";
import audioAbout from "../audio/baba-about.mp3";

const videoAboutArray = [videoAbout1, videoAbout2, videoAbout3, videoAbout4, videoAbout5, videoAbout6, videoAbout7];

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
  ["present", "virtual-reality"],
  ["present", "virtual-reality"],
  ["present", "virtual-reality"],
  ["present", "virtual-reality"],
  ["present", "virtual-reality"],
  ["present", "virtual-reality"],
  ["present", "virtual-reality"],
  ["present", "virtual-reality"]
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
  "./images/seduvos istorija - icon 1-2-01.png",
  "./images/seduvos istorija - icon 2-2-01.png",
  "./images/seduvos legendos 1-2-01.png",
  "./images/seduvos legendos 2-2-01.png",
  "./images/seduvos legendos 3-2-01.png",
  "./images/seduvos legendos 4-2-01.png",
  "./images/seduvos legendos 5-2-01.png",
  "./images/seduvos legendos 6-2-01.png",
  "./images/seduvos legendos 7-2-01.png",
  "./images/seduva dabar 1-2-01.png",
  "./images/seduva dabar 2-2-01.png",
  "./images/seduva dabar 3-2-01.png",
  "./images/seduva dabar 4-2-01.png",
  "./images/seduva dabar 5-2-01.png",
  "./images/seduva dabar 6-2-01.png",
  "./images/seduva dabar 7-2-01.png",
  "./images/seduva dabar 8-2-01.png"
];

const iconClickedUrl = [
  "./images/seduvos istorija - icon 1-3-01.png",
  "./images/seduvos istorija - icon 2-3-01.png",
  "./images/seduvos legendos 1-3-01.png",
  "./images/seduvos legendos 2-3-01.png",
  "./images/seduvos legendos 3-3-01.png",
  "./images/seduvos legendos 4-3-01.png",
  "./images/seduvos legendos 5-3-01.png",
  "./images/seduvos legendos 6-3-01.png",
  "./images/seduvos legendos 7-3-01.png",
  "./images/seduva dabar 1-3-01.png",
  "./images/seduva dabar 2-3-01.png",
  "./images/seduva dabar 3-3-01.png",
  "./images/seduva dabar 4-3-01.png",
  "./images/seduva dabar 5-3-01.png",
  "./images/seduva dabar 6-3-01.png",
  "./images/seduva dabar 7-3-01.png",
  "./images/seduva dabar 8-3-01.png"
];

const modalWindowText = [
  [
    "Šeduvos baba",
    "Etnografė, Lietuvos šviesuolė Emilija Brajinskienė, dar vadinama Šeduvos Baba, gimė 1930 m. Ji yra surinkusi visą lietuvių liaudies kūrybos lobyną, kuriame yra dainuojamoji tautosaka (dainos, raudos) ir sakytinė tautosaka (pasakos, sakmės, padavimai, nutikimai, mįslės, minklės, patarlės, priežodžiai, burtai, oracijos ir kt.). Emilija yra puiki pasakotoja,turinti fenomenalią atmintį ir kalbanti šeduvių tarme."
  ],
  [
    "Daugyvenės kultūros istorijos muziejus",
    `1884 m. statytame Bencelio Blocho name, esančiame Vėriškių gatvėje, kadaise veikė odų perdirbimo įmonė. 1958 metais čia buvo įkurtas Šeduvos kraštotyros muziejus, pradžioje veikęs visuomeniniais pagrindais. 1959–1998 m. Šeduvos kraštotyros muziejaus vedėju buvo kraštotyrininkas, muziejininkas Vytautas Šenauskas (1929–2007).
    Atgimimo metais Šeduvos muziejus tapo Daugyvenės kultūros istorijos muziejaus - draustinio Šeduvos kraštotyros skyriumi. Jam ir toliau vadovavo Vytautas Šenauskas. Muziejaus ekspozicijoje buvo rodomi archeologiniai radiniai, liaudies meno meistrų darbai, nuotraukos, archyviniai dokumentai, pinigų, medalių ir ordinų kolekcijos, kiti vertingi eksponatai. Vertingi kunigaikščių Giedraičių paveikslai, bei 1994 m. dailininko Boleslovo Plungės padovanoti tapybos darbai - paveikslų kolekcija. 
    Šiuo metu visi muziejaus eksponatai saugomi Daugyvenės kultūros istorijos muziejaus - draustinio saugyklose.`
  ],
  [
    "1. Legenda „Malūnas“. Kodėl malūno sparnai sukasi be vėjo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "2. Legenda „Velnias ne Boba“.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "3. Šeduvos ir Niauduvos vardų kilmė.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "4. Legenda „Švento Petro rakteliai“. Kodėl raktažolė dar vadinama Šv. Petro rakteliais?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "5. Legenda „Kirkibala“ apie velnio monus.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "6. Legenda „Vakoniškio laumės“.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "7. Legenda „Šniūrgalis“ apie užkeiktą lobį.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "Šeduvos malūnas",
    `Šeduvos malūno pradžia – 1905-ieji metai. Tada jis buvo pradėtas statyti. Tarsi kažkokio užkeikimo persekiojimas, malūnas, dar nebaigtas statyti, užsidegė, buvo smarkiai apgriautas. Tačiau malūnas niekada nebuvo užmirštas – tarybiniais (1967 aisiais) metais jis tapo pasilinksminimų vieta – žmonės į jį plaukdavo kaip į atlaidus. Keletą metų malūnas buvo apleistas, paliktas likimo valiai.
    Tačiau 2000-aisiais metais tarsi iš naujo atgimė. Malūnas vėl gyvas ir puikuojasi, modamas sparnais atvykstantiems į Šeduvą!
`
  ],
  [
    "Šeduvos Šv. Kryžiaus Atradimo bažnyčia",
    `Tai – seniausias Šeduvos kultūros paveldo objektas ir vienas iš vertingiausių Lietuvos sakralinės architektūros kūrinių. Bažnyčia pastatyta XVII a. vid. Renesansinė, turi baroko bruožų, kryžminio plano, su pusapskrite apside, žemomis zakristijomis, dvibokštė. Vidus – halinis, 3 navų, yra 5 altoriai. Skliautai cilindriniai. Šventoriaus tvora – akmenų mūro.`
  ],
  [
    "Užvažiuojamieji namai – karčema. Aikštė",
    `Nuo 18 a. antros pusės prie Šeduvos Laisvės aikštės šliejosi dideli, įdomūs savo architektūra ir planavimu pirklių ir šiaip pakeleivių nakvynės namai su arklidėmis (Užvažiuojamieji namai). XVIII a. aikštės pakrašty stovinčiame pastate buvo galima pailsėti, pernakvoti ir pakeisti arklius. Pastate buvo įrengtos stadalos, skirtos keliautojų arkliams ir transporto priemonėms, kitam gale – patalpos keliautojams.
    Per I-ąjį pasaulinį karą, 1915 m. pastatas sudegė. Buvo atstatyta tik gyvenamoji dalis ir gerokai pakeistas planas. Nakvynės namai neteko senosios architektūrinės išvaizdos.
    Laisvės aikštėje 2007 m. pastatytas Šiaulių Prisikėlimo apygardos partizanams skirtas paminklas - SAKALAS. Paminklo autoriai: skulptorius Romanas Kazlauskas, architektai Arūnas Eduardas Paslaitis ir Viktorija Paslaitytė.`
  ],
  ["Stulpas paukstis", "tekstas"],
  [
    "Retromobiliai",
    `Mobili istorinės, taip pat istorinės karinės technikos muziejaus „Retromobile“ ekspozicija, kuri bet kuriuo momentu gali pajudėti iš vietos. Šeduvos muziejaus ekspozicija - neįkainojama: kiekviena priemonė yra visiški originali iki pat variklio ir važiuoklės. Pats įspūdingiausias - aštuonių cilindrų galingasis amerikietiškasis „Kadilakas“, pagamintas dar 1929 metais. Tai - tikra legenda. Lankytojams siūloma pamatyti ne tik amerikietišką, bet ir vokišką, čekoslovakišką ir, žinoma, sovietinę techniką. Kiekvienas gali ne tik pasižvalgyti, bet ir išgirsti išsamų gido pasakojimą.
    Kontaktai: el.p. info@retromobile.lt  tel. 868227122, 861737078, 868527479.`
  ],
  [
    "Žydų kapinės",
    `Kapinėse, esančiose Žvejų gatvės gale iki antrojo pasaulinio karo buvo laidojami mieste gyvenę žydai. Pirmasis laidojimas žymimas 1820 m. data.
    2013 – 2018 m. Šeduvos žydų memorialinis fondas atliko kapinių restauracijos darbus, įvairius tyrinėjimo darbus, surado ir sužymėjo mirusiųjų palaidojimo vietas.
    Šalia Šeduvos Žydų kapinių 2018 m. pradėtos analogų pasaulyje neturinčio projekto – moderniausiomis technologijomis paremto litvakų miestelių istorijos, kultūros bei atminimo muziejaus „Dingęs Štetlas“ („The Lost Shtetl“) statybos. Projekto fundatorius Šveicarijoje gyvenantis verslininkas Ivan Glasenberg gimęs Pietų Afrikoje, kurio seneliai kilę iš Šeduvos. Čia bus atkurtas kažkada vienos didžiausių Europoje žydų diasporos miestelių gyvenimas.`
  ],
  ["Pastatas", "Tekstas"],
  ["Stotis", "Tekstas"]
];
export class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryTypeHovered: "",
      categoryTypeClicked: "",
      categoryRef: "",
      containerType: "",
      containerIndex: 0,
      galleryImageIndex: 0,
      confirmVROpen: false,
      mapZoomLevel: 1,
      scrollPosition: 0,
      mouseEnterMap: true,
      mediaPlayState: false,
      mediaRef: undefined,
      videoIndex: 0
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

  openContainerClicked = (type, index) => {
    if (this.state.containerType === "") {
      this.setState({ containerType: type, containerIndex: index });
      if (type === "audio") {
        this.setState({ mediaRef: this.audioAboutRef });
      } else if (type === "video") {
        this.setState({ mediaRef: this.videoAboutRef, videoIndex: index - 2 });
      }
    } else if (this.state.containerType !== "") {
      this.setState({ containerType: "", containerIndex: 0 });
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
    this.setState({ confirmVROpen: true, containerType: "" });
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
                        this.openContainerClicked(icon[1], index);
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

        {/* Modal window containers */}
        <div
          className={`modal-window-container window-${this.state.containerType}`}
          style={{ display: this.state.containerType !== "" ? "flex" : "none" }}
        >
          <div className="window-content" style={{ display: this.state.containerType !== "virtual-reality" ? "flex" : "none" }}>
            <div className="content-top">
              {/* Audio and video screens */}
              <div
                className="media-screen"
                style={{ display: this.state.containerType === "audio" || this.state.containerType === "video" ? "flex" : "none" }}
              >
                <div className="video-container">
                  <video ref={this.videoAboutRef}>
                    <source src={videoAboutArray[this.state.videoIndex]} type="video/mp4" />
                  </video>
                  <audio ref={this.audioAboutRef}>
                    <source src={audioAbout} type="audio/mp3" />
                  </audio>
                </div>
                <div
                  className="btn btn-play"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.state.mediaRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "none" : "flex" }}
                ></div>
                <div
                  className="btn btn-play btn-pause"
                  onClick={() => {
                    this.buttonPlayClickedHandler(this.state.mediaRef);
                  }}
                  style={{ display: this.state.mediaPlayState ? "flex" : "none" }}
                ></div>
              </div>
              {/* Gallery media screen start*/}
              <div className="media-screen" style={{ display: this.state.containerType === "gallery" ? "flex" : "none" }}>
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
              {/* Gallery media screen end*/}
              <div
                className="btn btn-close"
                onClick={() => {
                  this.openContainerClicked(this.state.containerType);
                }}
              ></div>
            </div>
            <div className="content-bottom">
              <div className="content-bottom-wrapper">
                <div className="image-container" style={{ display: this.state.containerType === "gallery" ? "flex" : "none" }}>
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
                <h1>{modalWindowText[this.state.containerIndex][0]}</h1>
                <p>{modalWindowText[this.state.containerIndex][1]}</p>
              </div>
            </div>
          </div>
          <div className="window-content" style={{ display: this.state.containerType === "virtual-reality" ? "flex" : "none" }}>
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
