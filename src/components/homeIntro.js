import * as React from 'react'
import CongressImg from '../images/congress.jpg'
import * as styles from '../stylesheets/layout.module.css'

const HomeIntro = () => {
    return(
        <div style={{display: `flex`,  justifyContent: `center`}}>
            <img src={CongressImg} alt="andrea-profile" className={styles.introImage}  ></img>
        </div>
    )
}

export default HomeIntro;