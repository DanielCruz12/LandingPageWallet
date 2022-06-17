//import logo from './logo.svg';
import LandingPage from "./pages/LandingPage";
import Landing from "./pages/Landing";
import assets from "./assets";
import "./styles/App.css";

function App() {
  //const linkProject = "https://web.lappsnet.io/"
  return (
    <>
      <LandingPage
        title="What is Lappsnet?"
        description=" It's an experimental smart contract network that can easily
              be used by lightning network users. You can purchase and redeem ESAT tokens from"  
        showBtn
        mockupImg={assets.first}
        banner="banner"
      />

      <Landing title="How does the wallet work?"
        description=" The wallet generates a key, which is encrypted using a security
              device, such as your screen lock. The encrypted key is stored in
              the browser."
        showBtn
        mockupImg={assets.first}
        reverse/>
    </>
  );
}

export default App;
