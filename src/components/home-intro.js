import * as React from 'react'
import CongressImg from '../images/congress.jpg'
import { introImage } from '../stylesheets/layout.module.css'

const HomeIntro = () => {
    return(
        <div>
            <img src={CongressImg} clipPath="url(#mask)" alt="andrea-profile" className={introImage} ></img>
        </div>
    )
}

export default HomeIntro;