import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, ...props }) => { // o ...props ´w para podermos passar qualquer propiredade no butto la no form ex:onClick
    return (
        <button {...props} className={styles.button}>{children}</button>
    )
}

export default Button
