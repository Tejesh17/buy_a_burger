import React from 'react'
import styles from './Layout.module.css'
// import './Layout.css'

const layout = (props) =>{
    return(
        <>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
        </>
    )
}

export default layout