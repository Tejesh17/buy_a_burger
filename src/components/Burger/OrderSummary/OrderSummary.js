import React from 'react'

const orderSummary = (props) =>{

    const ingredients = Object.keys(props.ingredients)
        .map((ing)=>(
            
                <li key={ing}>
                    <span style ={{textTransform: 'capitalize'}}>{ing}</span> : {props.ingredients[ing]}
                </li>
        ))

    return(
        <>
        <h3>Your Order</h3>
        <p>Your Burger will have the following ingredients:</p>
        <ul>
            {ingredients}
        </ul>
        <p>Continue to Checkout?</p>
        </>
    )
}

export default orderSummary