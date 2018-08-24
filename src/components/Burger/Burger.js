import React from 'react';
//import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let noIngredientsMsg = '';
  //max solution
  const transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type = {ingredientKey} />
      });
    }).reduce((prevResult, currentVal) => {
      return prevResult.concat(currentVal);
    }, []);


// below my solution, much cleaner, only they must
// be render as a BurgerIngredient with key prop
// const transIngredient = [];
// const ingKeys = Object.keys(ingredients);
// for(let ingredient of ingKeys) {
//  for(let i=1; i<=ingredients[ingredient]; i++) {
//    transIngredient.push(ingredient);
//  }
// }

  if (transformedIngredients.length === 0) {
    noIngredientsMsg = 'Please start adding ingredients!';
  }
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {noIngredientsMsg}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
// pozwala na dostęp do propsów routingowych
// w componencie nie użytym wproct w route
//export default withRouter(burger);
