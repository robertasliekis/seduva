import "./App.css";
import Header from "./components/Header";
import WebsiteInfo from "./components/WebsiteInfo";
import InteractiveMap from "./components/InteractiveMap";

// "homepage": "http://https://robertasliekis.github.io/seduva/",

function App() {
  return (
    <div className="App">
      <div className="website-wrapper">
        <Header />
        <WebsiteInfo />
        <InteractiveMap />
      </div>
    </div>
  );
}

export default App;
