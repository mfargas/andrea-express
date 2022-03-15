import * as React from 'react'
import * as styles from '../stylesheets/causes.module.css'

const CauseList = () => {
    return (
        <CauseList className={styles.list}>
            <div className={styles.cause}>
                <h3>Legal Assistant Experience</h3>
            </div>
            <div className={styles.cause}>
                <h3>Congressional Intern Experience</h3>
            </div>
            <div className={styles.cause}>
                <h3>B.A. Women & Gender Studies</h3>
            </div>
        </CauseList>
    )
}

export default CauseList;