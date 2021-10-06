import * as React from 'react'
import LegalPaper from '../images/legal-paper.svg'
import Capitol from '../images/capitol.svg'
import Certificate from '../images/certificate.svg'

const SkillList = () => {
    return(
        <section className="skills-list">
            <div className="skill skills-one">
                <h3>Legal Assistant Experience</h3>
                <img src={LegalPaper} alt="legal-doc"></img>
            </div>
            <div className="skill skills-two">
                <h3>Congressional Intern Experience</h3>
                <img src={Capitol} alt="capitol"></img>
            </div>
            <div className="skill skills-three">
                <h3>B.A. Women & Gender Studies</h3>
                <img src={Certificate} alt="degree"></img>
            </div>
        </section>
    )
}

export default SkillList;