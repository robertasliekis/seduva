import React, { Component } from "react";
import { connect } from "react-redux";
import ModelViewerThree from "./ModelViewerThree";

import { playBackgroundAudio, setModelLoaded } from "../actions";

import videoAbout1 from "../video/babos_video.mp4";
import videoAbout2 from "../video/video1.mp4";
import videoAbout3 from "../video/video1.mp4";
import videoAbout4 from "../video/video1.mp4";
import videoAbout5 from "../video/video1.mp4";
import videoAbout6 from "../video/video1.mp4";
import videoAbout7 from "../video/video1.mp4";
import videoAbout8 from "../video/video1.mp4";

import audioPanorama1 from "../audio/audio_malunas.mp3";
import audioPanorama2 from "../audio/audio_baznycia.mp3";
import audioPanorama3 from "../audio/audio_retromobiliai.mp3";
import audioPanorama4 from "../audio/audio_karcema.mp3";
import audioPanorama5 from "../audio/audio_kapines.mp3";

const videoAboutArray = [videoAbout1, videoAbout2, videoAbout3, videoAbout4, videoAbout5, videoAbout6, videoAbout7, videoAbout8];

const audioPanoramasArray = [audioPanorama1, audioPanorama2, audioPanorama3, audioPanorama4, audioPanorama5];

const categoriesNames = [
  ["Šeduvos istorija", "history"],
  ["Šeduvos legendos", "legends"],
  ["Šeduva dabar", "present"]
];

const iconNames = [
  ["history", "gallery", 1],
  ["history", "video", 0],
  ["legends", "video", 1],
  ["legends", "video", 2],
  ["legends", "video", 3],
  ["legends", "video", 4],
  ["legends", "video", 5],
  ["legends", "video", 6],
  ["legends", "video", 7],
  ["present", "audio", 0],
  ["present", "audio", 1],
  ["present", "audio", 2],
  ["present", "audio", 3],
  ["present", "audio", 4],
  ["passive", "", 1],
  ["passive", "", 2],
  ["passive", "", 3]
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
  "./images/seduva dabar 6-1-01.png",
  "./images/seduva dabar 5-1-01.png",
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
  "./images/seduva dabar 6-2-01.png",
  "./images/seduva dabar 5-2-01.png",
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
  "./images/seduva dabar 6-3-01.png",
  "./images/seduva dabar 5-3-01.png",
  "./images/seduva dabar 7-3-01.png",
  "./images/seduva dabar 8-3-01.png"
];

const modalWindowText = [
  [
    "Daugyvenės kultūros istorijos muziejus",
    `1884 m. statytame Bencelio Blocho name, esančiame Vėriškių gatvėje, kadaise veikė odų perdirbimo įmonė. 1958 metais čia buvo įkurtas Šeduvos kraštotyros muziejus, pradžioje veikęs visuomeniniais pagrindais. 1959–1998 m. Šeduvos kraštotyros muziejaus vedėju buvo kraštotyrininkas, muziejininkas Vytautas Šenauskas (1929–2007).
    Atgimimo metais Šeduvos muziejus tapo Daugyvenės kultūros istorijos muziejaus - draustinio Šeduvos kraštotyros skyriumi. Jam ir toliau vadovavo Vytautas Šenauskas. Muziejaus ekspozicijoje buvo rodomi archeologiniai radiniai, liaudies meno meistrų darbai, nuotraukos, archyviniai dokumentai, pinigų, medalių ir ordinų kolekcijos, kiti vertingi eksponatai. Vertingi kunigaikščių Giedraičių paveikslai, bei 1994 m. dailininko Boleslovo Plungės padovanoti tapybos darbai - paveikslų kolekcija. 
    Šiuo metu visi muziejaus eksponatai saugomi Daugyvenės kultūros istorijos muziejaus - draustinio saugyklose.`
  ],
  [
    "Šeduvos baba",
    "Etnografė, Lietuvos šviesuolė Emilija Brajinskienė, dar vadinama Šeduvos Baba, gimė 1930 m. Ji yra surinkusi visą lietuvių liaudies kūrybos lobyną, kuriame yra dainuojamoji tautosaka (dainos, raudos) ir sakytinė tautosaka (pasakos, sakmės, padavimai, nutikimai, mįslės, minklės, patarlės, priežodžiai, burtai, oracijos ir kt.). Emilija yra puiki pasakotoja,turinti fenomenalią atmintį ir kalbanti šeduvių tarme."
  ],
  [
    "Legenda „Malūnas“. Kodėl malūno sparnai sukasi be vėjo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "Legenda „Velnias ne Boba“.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "Šeduvos ir Niauduvos vardų kilmė.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "Legenda „Švento Petro rakteliai“. Kodėl raktažolė dar vadinama Šv. Petro rakteliais?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "Legenda „Kirkibala“ apie velnio monus.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "Legenda „Vakoniškio laumės“.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam autem totam atque in quaerat adipisci modi quibusdam alias possimus?"
  ],
  [
    "Legenda „Šniūrgalis“ apie užkeiktą lobį.",
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
    "Retromobiliai",
    `Mobili istorinės, taip pat istorinės karinės technikos muziejaus „Retromobile“ ekspozicija, kuri bet kuriuo momentu gali pajudėti iš vietos. Šeduvos muziejaus ekspozicija - neįkainojama: kiekviena priemonė yra visiški originali iki pat variklio ir važiuoklės. Pats įspūdingiausias - aštuonių cilindrų galingasis amerikietiškasis „Kadilakas“, pagamintas dar 1929 metais. Tai - tikra legenda. Lankytojams siūloma pamatyti ne tik amerikietišką, bet ir vokišką, čekoslovakišką ir, žinoma, sovietinę techniką. Kiekvienas gali ne tik pasižvalgyti, bet ir išgirsti išsamų gido pasakojimą.
    Kontaktai: el.p. info@retromobile.lt  tel. 868227122, 861737078, 868527479.`
  ],
  [
    "Užvažiuojamieji namai – karčema. Aikštė",
    `Nuo 18 a. antros pusės prie Šeduvos Laisvės aikštės šliejosi dideli, įdomūs savo architektūra ir planavimu pirklių ir šiaip pakeleivių nakvynės namai su arklidėmis (Užvažiuojamieji namai). XVIII a. aikštės pakrašty stovinčiame pastate buvo galima pailsėti, pernakvoti ir pakeisti arklius. Pastate buvo įrengtos stadalos, skirtos keliautojų arkliams ir transporto priemonėms, kitam gale – patalpos keliautojams.
    Per I-ąjį pasaulinį karą, 1915 m. pastatas sudegė. Buvo atstatyta tik gyvenamoji dalis ir gerokai pakeistas planas. Nakvynės namai neteko senosios architektūrinės išvaizdos.
    Laisvės aikštėje 2007 m. pastatytas Šiaulių Prisikėlimo apygardos partizanams skirtas paminklas - SAKALAS. Paminklo autoriai: skulptorius Romanas Kazlauskas, architektai Arūnas Eduardas Paslaitis ir Viktorija Paslaitytė.`
  ],
  [
    "Žydų kapinės",
    `Kapinėse, esančiose Žvejų gatvės gale iki antrojo pasaulinio karo buvo laidojami mieste gyvenę žydai. Pirmasis laidojimas žymimas 1820 m. data.
    2013 – 2018 m. Šeduvos žydų memorialinis fondas atliko kapinių restauracijos darbus, įvairius tyrinėjimo darbus, surado ir sužymėjo mirusiųjų palaidojimo vietas.
    Šalia Šeduvos Žydų kapinių 2018 m. pradėtos analogų pasaulyje neturinčio projekto – moderniausiomis technologijomis paremto litvakų miestelių istorijos, kultūros bei atminimo muziejaus „Dingęs Štetlas“ („The Lost Shtetl“) statybos. Projekto fundatorius Šveicarijoje gyvenantis verslininkas Ivan Glasenberg gimęs Pietų Afrikoje, kurio seneliai kilę iš Šeduvos. Čia bus atkurtas kažkada vienos didžiausių Europoje žydų diasporos miestelių gyvenimas.`
  ],
  ["Pastatas", "Tekstas"],
  ["Pastatas", "Tekstas"],
  ["Stotis", "Tekstas"]
];

const modelDescription = [
  "Telefono komutatorius. Skirtas ryšių kanalams sujungti. 29 linijų su 8 svirtiniais perjungikliais ir 29 lizdais. Pagamintas SSRS XX a. vidurys.",
  "Fotoaparatas. Fotoaparatas su dėklu. Pagamintas vokiečių firmos Vogtlander XX a. pirmoje pusėje.",
  "Įmovinis ietigalis su karklo lapo formos plunksna. V – VIII amžius po Kr. Rastas Šeduvos apylinkėse.",
  "Kardas su Rusijos imperijos caro Aleksandro III monograma. Rusijos imperijos 1881 metų modelio dragūnų karininko kardas. Rastas Šeduvoje.",
  "Siauraašmenis įmovinis kirvis. III – V amžius po Kr. Rastas Šeduvos apylinkėse.",
  "Lazda. Drožta iš obels medžio. 1936 metais ją išdrožė Šeduvoje gyvenęs liaudies meistras Jonas Lesčinskas.",
  "Lygintuvas-laidynė. XX a. pirma pusė. Rastas Šeduvoje.",
  "Puodelis. Sidabrinis. Pagamintas Maskvoje Ivano Svešnikovo fabrike 1881 metais. Rastas Šeduvoje Kėdainių gatvėje.",
  "Nepriklausomos Lietuvos kaimo seniūno ženklas. Skydelyje pavaizduota krivulė. XX a. pirma pusė.",
  "Šeduvos miesto rotušės spaudas. Naudotas carinės Rusijos okupacijos laikais. XX a. pr. Rastas Šeduvoje verčiant seną namą Laisvės aikštėje."
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
      contentIndex: 1,
      galleryImageIndex: 0,
      confirmVROpen: false,
      scrollPosition: 0,
      mouseEnterMap: true,
      mediaPlayState: false,
      mediaRef: undefined,
      videoIndex: 0,
      audioIndex: 0,
      modelSelected: 1,
      fullScreenClicked: false,
      clickCount: 0
    };
    this.categoriesRefs = {};
    this.logoButtonRefs = {};
    this.logoInnactiveRefs = {};
    this.logoHoveredRefs = {};
    this.logoClickedRefs = {};
    this.mediaScreenRef = React.createRef();
    this.videoAboutRef = React.createRef();
    this.audioAboutRef = React.createRef();
  }
  mouseEnterCategory = (type) => {
    this.setState({
      categoryTypeHovered: type
    });
  };
  mouseLeaveCategory = () => {
    this.setState({
      categoryTypeHovered: ""
    });
  };

  mouseClickCategory = (type, ref) => {
    this.setState({
      categoryTypeClicked: type,
      categoryRef: ref
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.categoryTypeHovered !== prevState.categoryTypeHovered) {
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
          this.logoButtonRefs[i].classList.add("btn-active");
        } else {
          this.logoInnactiveRefs[i].style.opacity = 1;
          this.logoClickedRefs[i].style.opacity = 0;
          this.logoClickedRefs[i].style.pointerEvents = "none";
        }
      }
    }

    if (this.state.containerType !== prevState.containerType && this.state.containerType === "audio" && this.props.modelLoaded === true) {
      this.audioAboutRef.current.play();
    }
  }

  openContainerClicked = (type, index, contentIndex) => {
    if (this.state.containerType === "") {
      this.setState({ containerType: type, containerIndex: index });
      if (type === "audio") {
        this.setState({ mediaRef: this.audioAboutRef, audioIndex: contentIndex, modelSelected: contentIndex });
      } else if (type === "video") {
        this.setState({ mediaRef: this.videoAboutRef, videoIndex: index });
      }
    } else if (this.state.containerType !== "") {
      this.setState({ containerType: "", containerIndex: 0 });
    }
    this.setState({ mediaPlayState: false });
    if (contentIndex !== undefined) {
      this.setState({ contentIndex: contentIndex });
    }
    if (type === undefined) {
      this.videoAboutRef.current.pause();
      this.videoAboutRef.current.currentTime = 0;
      this.audioAboutRef.current.pause();
      this.audioAboutRef.current.currentTime = 0;
    }
    this.setState({ fullScreenClicked: false, modelSelected: 1 });
    this.renderModelView();
  };

  renderModelView() {
    let currentClickCount = this.state.clickCount;
    this.setState({ clickCount: currentClickCount + 1 });
  }

  buttonPlayClickedHandler = (ref) => {
    let currentMediaState = this.state.mediaPlayState;
    this.setState({ mediaPlayState: !currentMediaState });
    this.props.playBackgroundAudio(false);
    if (currentMediaState) {
      ref.current.pause();
    } else ref.current.play();
  };

  nextModelClicked = () => {
    if (this.state.modelSelected !== 10) {
      this.setState({ modelSelected: this.state.modelSelected + 1 });
    }
    this.renderModelView();
  };
  previousModelClicked = () => {
    if (this.state.modelSelected !== 1) {
      this.setState({ modelSelected: this.state.modelSelected - 1 });
    }
    this.renderModelView();
  };

  btnVRConfirmClicked = () => {
    this.setState({ confirmVROpen: true, containerType: "" });
  };

  fullScreenClicked = () => {
    const currentState = this.state.fullScreenClicked;
    this.setState({ fullScreenClicked: !currentState });
    this.renderModelView();
  };

  render() {
    const fullScreenClass = this.state.fullScreenClicked ? "window-full-screen" : "";
    return (
      <div className="interactive-map-section">
        <div className="map-container">
          <div className="map-images-container">
            <div className="main-map-image"></div>
            {/* icons start-------------------------- */}
            <div className="map-icons-container">
              {iconNames.map((icon, index) => {
                return (
                  <div
                    ref={(ref) => {
                      this.logoButtonRefs[index] = ref;
                    }}
                    className={`btn btn-${icon[0]}`}
                    key={`${icon[0]}${index}`}
                  >
                    <div className="logo-wrapper">
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
                          this.openContainerClicked(icon[1], index, icon[2]);
                        }}
                        ref={(ref) => {
                          this.logoClickedRefs[index] = ref;
                        }}
                        className={`logo logo-${icon[0]} logo-clicked`}
                        style={{ backgroundImage: `url("${iconClickedUrl[index]}")` }}
                      ></div>
                    </div>
                    {index > 13 ? <div className="location-title">Pastatas</div> : null}
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
          <div
            className="window-content"
            style={{
              display: this.state.containerType !== "virtual-reality" && this.state.containerType !== "model-view" ? "flex" : "none"
            }}
          >
            <div className={`content-top ` + fullScreenClass}>
              {/* Audio and video screens */}
              <div
                className="media-screen"
                style={{ display: this.state.containerType === "audio" || this.state.containerType === "video" ? "flex" : "none" }}
              >
                <div className="video-container" style={{ display: this.state.containerType === "video" ? "flex" : "none" }}>
                  <video ref={this.videoAboutRef}>
                    <source src={videoAboutArray[this.state.videoIndex]} type="video/mp4" />
                  </video>

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

                <div
                  className="panorama-view-wrapper model-view-wrapper"
                  style={{ display: this.state.containerType === "audio" ? "flex" : "none" }}
                  key={`panorama${this.state.audioIndex}`}
                >
                  {/* <PanoramaViewer /> */}
                  <ModelViewerThree
                    containerType={this.state.containerType}
                    contentIndex={this.state.modelSelected}
                    clickCount={this.state.clickCount}
                    key={this.state.clickCount}
                  />
                  <audio ref={this.audioAboutRef}>
                    <source src={audioPanoramasArray[this.state.audioIndex]} type="audio/mp3" />
                  </audio>
                </div>

                <div className="btn-full-screen" onClick={this.fullScreenClicked}></div>
              </div>
              {/* Gallery media screen start*/}
              <div
                className={`media-screen`}
                ref={this.mediaScreenRef}
                style={{ display: this.state.containerType === "gallery" ? "flex" : "none" }}
              >
                <div className="buttons">
                  <div
                    className="btn btn-gallery btn-previous"
                    onClick={this.previousModelClicked}
                    style={{
                      opacity: this.state.modelSelected === 1 ? 0.6 : 1,
                      cursor: this.state.modelSelected === 1 ? "default" : "pointer",
                      pointerEvents: this.state.modelSelected === 1 ? "none" : "auto"
                    }}
                  ></div>
                  <div
                    className="btn btn-gallery btn-next"
                    onClick={this.nextModelClicked}
                    style={{
                      opacity: this.state.modelSelected === 10 ? 0.6 : 1,
                      cursor: this.state.modelSelected === 10 ? "default" : "pointer",
                      pointerEvents: this.state.modelSelected === 10 ? "none" : "auto"
                    }}
                  ></div>
                </div>
                <div className="model-view-wrapper">
                  <ModelViewerThree
                    containerType={this.state.containerType}
                    contentIndex={this.state.modelSelected}
                    clickCount={this.state.clickCount}
                    key={this.state.clickCount}
                  />
                  <div className="model-description">{modelDescription[this.state.modelSelected - 1]}</div>
                </div>
                <div className="btn-full-screen" onClick={this.fullScreenClicked}></div>
              </div>
              {/* Gallery media screen end*/}
              <div
                className="btn btn-close"
                onClick={() => {
                  this.openContainerClicked();
                }}
              ></div>
            </div>
            <div className="content-bottom">
              <div className="content-bottom-wrapper">
                <h1>{modalWindowText[this.state.containerIndex][0]}</h1>
                <p>{modalWindowText[this.state.containerIndex][1]}</p>
              </div>
            </div>
          </div>
          <div className="window-content" style={{ display: this.state.containerType === "virtual-reality" ? "flex" : "none" }}>
            <div className="btn btn-close" onClick={this.openContainerClicked}></div>
            <p>Jūs įeinate į 360° turą</p>
            <div className="btn btn-confirm-vr" onClick={this.btnVRConfirmClicked}>
              Ok
            </div>
          </div>
          <div
            className="window-content window-content-model-view"
            style={{ display: this.state.containerType === "model-view" ? "flex" : "none" }}
          >
            <div className="btn btn-close" onClick={this.openContainerClicked}></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modelLoaded: state.setModelLoaded.modelLoaded
  };
};

const mapDispatchToProps = {
  playBackgroundAudio,
  setModelLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveMap);
