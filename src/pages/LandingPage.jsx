import React from 'react'
import styles from "../styles/Global";
import '../styles/App.css'

const LandingPage = () => {
  return (
    <div id="pageContent">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 align-self-center">
          {/* <div id="logoContainer">
           { <img src={logo}></img>}
          </div> */}

        </div>
        <h1 className={`${styles.h1Text} ${
              styles.blackText}  ${styles.whiteText}`} id="signInTitle">Lappsnet wallet</h1>  
           <button type="button" className="btn btn-primary">Primary</button>
        {/* <a>try the wallet</a> */}
  {/*    <a href="" style="color: white;">
          <p className="btn btn-success">Try the wallet</p>
        </a> */}
        <p>
          Lappsnet is an experimental smart contract network that can easily
          be used by lightning network users. You can purchase and redeem ESAT
          tokens from{" "}
          <a href="https://web.lappsnet.io">the project website</a>.
        </p>
        <h4>How does the wallet work?</h4>
        <p>
          The wallet generates a key, which is encrypted using a security
          device, such as your screen lock. The encrypted key is stored in the
          browser, and you can authenticate with our servers to decrypt the
          key, or recover from a password-protected backup.
        </p>
        <h4>Are there any requirements?</h4>
        <p>You will need one of the following browsers:</p>
        <ul>
          <li>Chrome 67+, Firefox 60+, Safari 13+, Edge 18+</li>
          <li>(Android) Chrome latest</li>
          <li>(iOS) Safari 14.4+, Firefox latest, Chrome latest</li>
        </ul>
{/*           <p className="mt-4 text-center"><a href=""><strong className="navBtn">Documentation</strong></a></p>
*/}        </div>
    </div>
  </div>
  )
}

export default LandingPage