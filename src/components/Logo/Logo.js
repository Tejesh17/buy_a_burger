import React from 'react'
import BurgerLogo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css'

const logo = (props) =>{
    return(
        <div className={styles.Logo}>
            <img src={BurgerLogo} alt="Burger Logo"></img>
        </div>
    )
}

export default logo