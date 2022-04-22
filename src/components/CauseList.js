import * as React from 'react'
import * as styles from '../stylesheets/causes.module.css'
import { Link } from 'gatsby'


const CauseList = () => {
    return (
        <section className={styles.list}>
            <div className={styles.cause}>
                <h3>Long Beach Justice Fund</h3>
                <Link to='https://www.immdef.org/lbjf' target='_blank' className={styles.causeLink}>Go to Organization</Link>
                <p>Long Beach initiative that provides legal representation for immigrants who live or work in Long Beach and are facing deportation.</p>
            </div>
            <div className={styles.cause}>
                <h3>Ukraine Humanitarian Fund</h3>
                <Link to='https://crisisrelief.un.org/ukraine-crisis' target='_blank' className={styles.causeLink}>Go to Organization</Link>
                <p>United Nations initiative delivering assistance and protection to the people of Ukraine.</p>
            </div>
        </section>
    )
}

export default CauseList;