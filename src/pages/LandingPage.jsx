import React from "react";
import styles from "../styles/Global";
import "../styles/App.css";

const LandingPage = ({
  title,
  description,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <>
      <div
        className={`min-h-screen ${styles.section} ${
          reverse ? styles.bgWhite : styles.bgPrimary
        } 
      ${banner}`}
      >
        <div
          className={`flex items-center ${
            reverse ? styles.boxReverseClass : styles.boxClass
          } w-11/12 sm:w-full minmd:w-3/4`}
        >
          <div
            className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}        
        ${reverse ? styles.textRight : styles.textLeft}        
         `}
          >
            <h1
              className={`${styles.h1Text} ${
                reverse ? styles.blackText : styles.whiteText
              }`}
            >
              {title}
            </h1>
            <p
              className={`${styles.descriptionText} ${
                reverse ? styles.blackText : styles.whiteText
              }`}
            >
              {description}
            </p>

            {/*  {showBtn && <Button assetUrl={assets.expo} Link="deplopyed" />}

            //component:
          <div className={`${styles.btnBlack}, ${styles.btnIcon}}`}  onClick={() => window.open(Link, "_blank")}>
          <img src={assetUrl} alt="expo_icon" className={styles.btnIcon}></img>
            <div className="flex flex-col justify-start ml-4">
              <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
              <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
            </div>
          </div> */}
          </div>

          <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
            <img
              src={mockupImg}
              className={`
          ${reverse ? "fadeLeftMini" : "fadeRightMini"}, 
          ${styles.sectionImg}`}
              alt="mockup"
            ></img>
          </div>
        </div>
      </div>
      <div id="pageContent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 align-self-center">
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
              {/* <div id="logoContainer">
           { <img src={logo}></img>}
          </div> */}
            </div>
            <h1
              className={`${styles.h1Text} ${styles.blackText}  ${styles.whiteText}`}
              id="signInTitle"
            >
              Lappsnet wallet
            </h1>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
            {/* <a>try the wallet</a> */}
            {/*    <a href="" style="color: white;">
          <p className="btn btn-success">Try the wallet</p>
        </a> */}
            <p>
              Lappsnet is an experimental smart contract network that can easily
              be used by lightning network users. You can purchase and redeem
              ESAT tokens from{" "}
              <a href="https://web.lappsnet.io">the project website</a>.
            </p>
            <h4>How does the wallet work?</h4>
            <p>
              The wallet generates a key, which is encrypted using a security
              device, such as your screen lock. The encrypted key is stored in
              the browser, and you can authenticate with our servers to decrypt
              the key, or recover from a password-protected backup.
            </p>
            <h4>Are there any requirements?</h4>
            <p>You will need one of the following browsers:</p>
            <ul>
              <li>Chrome 67+, Firefox 60+, Safari 13+, Edge 18+</li>
              <li>(Android) Chrome latest</li>
              <li>(iOS) Safari 14.4+, Firefox latest, Chrome latest</li>
            </ul>
            {/*           <p className="mt-4 text-center"><a href=""><strong className="navBtn">Documentation</strong></a></p>
             */}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
