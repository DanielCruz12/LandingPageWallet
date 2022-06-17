import React from 'react'
import styles from '../../styles/Global'

const Button = () => {

    const Link = "https://wallet.lappsnet.io/wallet";

  return (
    <div className={styles.btnBlack}
    onClick={() => window.open(Link, "_blank")}> 
        <div className="flex flex-col justify-start  ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>try the</p>
        <p className={`${styles.btnText} font-bold text-sm`}>wallet</p>
      </div>
    </div>
  )
}

export default Button