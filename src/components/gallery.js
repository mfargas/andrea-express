import * as React from 'react'
import { Link } from 'gatsby'
import Carecen from '../images/carecen-logo.svg'
import HumanRF from '../images/hrf-org-logo.svg'

const Gallery = () => {
    return(
        <div>
            <Link to="https://www.carecen-la.org/legal_services" className="gallery__item gal-1">
                <img src={Carecen} alt="img 1"></img>
            </Link>
            <Link to="https://www.humanrightsfirst.org/" className="gallery__item gal-2">
                <img src={HumanRF} alt="img 2"></img>
            </Link>
            <Link to="https://www.esperanza-la.org/" className="gallery__item gal-3">
                <img src={Carecen} alt="img 1"></img>
            </Link>
            <Link to="https://www.csulb.edu/student-affairs/panetta" className="gallery__item gal-4">
                <img src={HumanRF} alt="img 2"></img>
            </Link>
        </div>
    )
}

export default Gallery;