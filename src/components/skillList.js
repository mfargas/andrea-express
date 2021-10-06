import * as React from 'react'
import LegalPaper from '../images/legal-paper.svg'
import Capitol from '../images/capitol.svg'
import Certificate from '../images/certificate.svg'
import { list, skill, skillIcon } from '../stylesheets/layout.module.css'

const SkillList = () => {
    return(
        <section className={list}>
            <div className={skill}>
                <h3>Legal Assistant Experience</h3>
                <img className={skillIcon} src={LegalPaper} alt="legal-doc"></img>
            </div>
            <div className={skill}>
                <h3>Congressional Intern Experience</h3>
                <img className={skillIcon} src={Capitol} alt="capitol"></img>
            </div>
            <div className={skill}>
                <h3>B.A. Women & Gender Studies</h3>
                <img className={skillIcon} src={Certificate} alt="degree"></img>
            </div>
        </section>
    )
}

export default SkillList;