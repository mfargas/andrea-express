import * as React from 'react'
import CongressImg from '../images/congress.jpg'
import { introArch, importImage } from '../stylesheets/layout.module.css'

const HomeIntro = () => {
    return(
        <div>
            <svg className="introArch" >
                <defs>
                    <clipPath clipPathUnits="objectBoundingBox" id="mask">
                        <path d="M317,325.55h-.75a4.82,4.82,0,0,1,0-.77.38.38,0,0,1,.7,0A6.26,6.26,0,0,1,317,325.55Z"
                            transform="translate(-316.26 -324.55)" fill="none" />
                    </clipPath>
                </defs>
                <img src={CongressImg} alt="andrea-profile" className="intro-image" ></img>
            </svg>
        </div>
    )
}

export default HomeIntro;