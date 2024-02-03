import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";

import "./style/landingpage.css";
import SuperHero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trending section */}

      {/* suoerhero section */}
      <div className="superhero">
        <SuperHero />
      </div>
      {/* end of trending section */}
    </div>
  );
}

export default App;
