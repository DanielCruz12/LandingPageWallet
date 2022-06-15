//import logo from './logo.svg';
import LandingPage from "./pages/LandingPage";
import assets from "./assets";
import "./styles/App.css";

function App() {
  return (
    <>
      <LandingPage
        title="Lappsnet wallet"
        description=" It's an experimental smart contract network that can easily
              be used by lightning network users."
        showBtn
        mockupImg={assets.first}
        banner="banner"
        reverse
      />
    </>
  );
}

export default App;
