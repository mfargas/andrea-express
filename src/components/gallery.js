import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../stylesheets/gallery.module.css'

const Gallery = () => {
    return(
        <div className={styles.gallery}>
            <Link to="https://www.esperanza-la.org/" className={styles.gallery__item_1}>
            </Link>
            <Link to="https://www.humanrightsfirst.org/" className={styles.gallery__item_2}>
            </Link>
            <Link to="https://www.carecen-la.org/legal_services" className={styles.gallery__item_3}>
            </Link>
            <Link to="https://www.csulb.edu/student-affairs/panetta" className={styles.gallery__item_4}>
            </Link>
        </div>
    )
}

export default Gallery;