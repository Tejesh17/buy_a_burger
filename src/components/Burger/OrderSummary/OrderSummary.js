import React from 'react'
import Button from '../../UI/Button/Button'

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
        <p>And costs ₹{props.totalPrice}, Continue to Checkout?</p>
        <Button btnType="Danger" click={props.cancel}>CANCEL</Button>
        <Button btnType ="Success"click = {props.continue}>CONTINUE</Button>
        </>
    )
}

export default orderSummary