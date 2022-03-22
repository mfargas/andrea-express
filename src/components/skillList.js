import * as React from 'react'
import {IoDocumentTextSharp} from 'react-icons/io5'
import {GiDiploma, GiCongress} from 'react-icons/gi'
import * as styles from '../stylesheets/skillList.module.css'

const SkillList = () => {
    return(
        <section className={styles.list}>
            
            <div className={styles.skill}>
                <h3>Legal Assistant Experience</h3>
                <IoDocumentTextSharp className={styles.skillIcon} alt="legal-doc" />
            </div>
            <div className={styles.skill}>
                <h3>Congressional Intern Experience</h3>
                <GiCongress className={styles.skillIcon} alt="capitol" />
            </div>
            <div className={styles.skill}>
                <h3>B.A. Women & Gender Studies</h3>
                <GiDiploma className={styles.skillIcon} alt="degree"  />
            </div>
        </section>
    )
}

export default SkillList;