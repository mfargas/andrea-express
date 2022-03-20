import * as React from 'react'
import * as styles from '../stylesheets/emailForm.module.css'

const EmailForm = () => {
    return(
        <form className={styles.form} action="email-form">
            <label>Name:
                <input type="text" className={styles.textInput} />
            </label>
            <label>Email:
                <input type="email" className={styles.emailInput} />
            </label>
            <textarea 
                className={styles.textArea} 
                name="comments" 
                id="footer-comments" 
                cols="30" 
                rows="10"
            />
            <input type="submit" className={styles.submitBtn}/>
        </form>
    )
}

export default EmailForm;