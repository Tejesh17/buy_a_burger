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
            <p>Current Price: ₹<strong>{props.price}</strong></p>
            {controls.map ((label) => <BuildControl 
                key= {label.label} 
                label = {label.label} 
                addIng={()=> props.addIng(label.type)} 
                remIng= {()=> props.remIng(label.type)}
                isDisabled = {props.isDisabled[label.type]}
            />
            )}
            <button className={styles.OrderButton  } disabled= {!props.isPurchaseable}>ORDER NOW</button>

        </div>
    )

}

export default buildControls