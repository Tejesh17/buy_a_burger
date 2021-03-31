import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
]


const buildControls = (props) =>{
    return (
        <div className={styles.BuildControls}> 
            {controls.map ((label) => <BuildControl key= {label.label} label = {label.label}></BuildControl>)}
        </div>
    )

}

export default buildControls