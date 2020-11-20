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
            <p className="text" style={{ height: this.state.readMoreLtClicked ? "20rem" : "9rem" }}>
              Projektas Šeduvos virtualus turas „Kelionė laiku“ kviečia keliauti trimis skirtingais maršrutais: „Šeduvos istorija“, „Šeduvos
              legendos“ ir „Šeduva dabar“. Pirmame maršrute „Šeduvos istorija“ susipažinsite su miesto istorija, apžiūrėsite Daugyvenės
              muziejaus Šeduvos kraštotyros skyriaus rinkinių 3D parodą, išgirsite Šeduvos Babos – Emilijos Brajinskienės pasakojimą apie
              miesto kilmę. <br /> Maršrute „Legendos“ pamatysite 7 žymiausias ir įdomiausias Šeduvos krašto legendas, kurias vizualizuos
              bei įgarsins profesionalūs ir žinomi Valstybinio Šiaulių dramos teatro aktoriai: Sigitas Jakubauskas, Monika
              Šaltytė-Dovydavičienė, Nomeda Bėčiutė, Severinas Norgaila bei „Šeduvos bernai“. Trečiajame maršrute „Šeduva dabar“ keliausite
              po Šeduvos lankytinas vietas bei kultūros paveldo objektus 360° kampu.
            </p>
            <div className="btn btn-read-more" onClick={this.readMoreLtClicked}>
              {this.state.readMoreLtClicked ? "Skaityti mažiau" : "Skaityti daugiau"}
            </div>
          </div>
          <div className="text-box">
            <h1>About project:</h1>
            <p className="text " style={{ height: this.state.readMoreEnClicked ? "21.5rem" : "10.5rem" }}>
              The project Šeduva virtual Tour "Journey in Time" invites you to travel on three different routes: "History of Šeduva",
              "Legends of Šeduva" and "Šeduva nowadays". On the first route "History of Šeduva" you will get acquainted with the history of
              the town, see a 3D exhibition of Šeduva Local Ethnographic Department Daugyvene Museum‘s collections , listen to the story of
              Šeduva‘s Baba - Emilija Brajinskienė about the origin of the city. <br /> On the route "Legends" you will see 7 most famous
              and interesting legends of Šeduva region, which will be visualized and dubbed by professional and well-known actors of
              Šiauliai State Drama Theater: Sigitas Jakubauskas, Monika Šaltytė-Dovydavičienė, Nomeda Bėčiutė, Severinas Norgaila and
              "Šeduva‘s Guys"folk group. On the third route "Šeduva nowadays" you will travel around the sights and cultural heritage
              objects of Šeduva at a 360 ° angle.
            </p>
            <div className="btn btn-read-more" onClick={this.readMoreEnClicked}>
              {this.state.readMoreEnClicked ? "Read less" : "Read more"}
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
