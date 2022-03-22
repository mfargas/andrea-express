import * as React from 'react'
import LegalPaper from '../images/legal-paper.svg'
import Capitol from '../images/capitol.svg'
import Certificate from '../images/certificate.svg'
import * as styles from '../stylesheets/skillList.module.css'

const SkillList = () => {
    return(
        <section className={styles.list}>
            <div className={styles.skill}>
                <h3>Legal Assistant Experience</h3>
                <img className={styles.skillIcon} src={LegalPaper} alt="legal-doc"></img>
            </div>
            <div className={styles.skill}>
                <h3>Congressional Intern Experience</h3>
                <img className={styles.skillIcon} src={Capitol} alt="capitol"></img>
            </div>
            <div className={styles.skill}>
                <h3>B.A. Women & Gender Studies</h3>
                <img className={styles.skillIcon} src={Certificate} alt="degree"></img>
            </div>
        </section>
    )
}

export default SkillList;