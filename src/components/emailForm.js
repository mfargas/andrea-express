import * as React from 'react'
import * as styles from '../stylesheets/layout.module.css'

const EmailForm = () => {
    return(
        <form className={styles.form} action="email-form">
            <input type="text" />
            <input type="email" />
            <textarea name="comments" id="footer-comments" cols="30" rows="10"></textarea>
            <input type="submit" />
        </form>
    )
}

export default EmailForm;