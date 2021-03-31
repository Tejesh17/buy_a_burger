import React from 'react'
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let ingredients = Object.keys(props.type).map((index)=>{
            return  [...Array(props.type[index])].map((__, id)=>{
                return <BurgerIngredient id= {index + id } type = {index} /> 
            })
        }).reduce((prev, curr)=>{
            return prev.concat(curr)
        },[])
    
    if (ingredients.length === 0){
        ingredients = <p>Please Start Adding Ingredients!</p>
    }

    return (
        <>
        <div className={styles.Burger}>
            <BurgerIngredient type = 'bread-top'></BurgerIngredient>
            {ingredients}
            <BurgerIngredient type ='bread-bottom'></BurgerIngredient>
        </div>
        </>
    )
}

export default burger