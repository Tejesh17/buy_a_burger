import React from 'react'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) =>{
    return(
        <>
        <SideDrawer></SideDrawer>
        <Toolbar></Toolbar>
        <main className={styles.content}>
            {props.children}
        </main>
        </>
    )
}

export default layout