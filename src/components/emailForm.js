import * as React from 'react'
import * as styles from '../stylesheets/emailForm.module.css'

const EmailForm = () => {
    return(
        <form className={styles.form} action="email-form">
            <label>Name: <input type="text" className={styles.text_input} /></label>
            <label>Email: <input type="email" className={styles.email_input} /></label>
            <textarea name="comments" id="footer-comments" cols="30" rows="10"></textarea>
            <input type="submit" className={styles.submit_btn}/>
        </form>
    )
}

export default EmailForm;