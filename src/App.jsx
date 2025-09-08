import { useState } from "react"
import Header from "./assets/components/header"
import IngredientList from "./assets/components/ingredientList"
import {getRecipeFromMistral} from './ai'
import ReactMarkDown from "react-markdown"

function App() {

  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")

  // Add Ingredient Button
  function addIngreds(formData) {
    const ingred = formData.get("ingred")
    // To Not Add Empty String
    if (ingred.length > 2) 
      setIngredients(prevIngreds => [...prevIngreds,ingred])
  }
  
  
  // Get Recipe Button
  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients)
    setRecipe(generatedRecipe)
  }

  return (
    <>
      <Header/>
      <main className="p-5">
        {/* Add An Ingredient */}
        <form action={addIngreds} className="addIngreds w-100 d-flex align-items-stretch">
          <input type="text" name="ingred" id="ingred" placeholder="e.g. milk (must add 3 or more ingredients)" className="w-75 rounded p-2"/>
          <button className="bg-black text-white ms-2 rounded">+ Add ingredient</button>
        </form>

        {/* Ingredients List */}
        <IngredientList ingredients={ingredients}/>

        {/* Show This Div If More Than Three Ingredients */}
        {ingredients.length > 2 &&
          <div className="getRecipe d-flex align-items-center justify-content-between bg-secondary-subtle rounded p-3 px-4">
            <div className="text">
              <h5>Ready for recipe?</h5>
              <p className="text-secondary mb-0">Generate a recipe from your list of ingredients.</p>
            </div>
            <button className="text-white rounded p-2" onClick={getRecipe}>Get a recipe</button>
          </div>
        }

        {/* Generated Recipe */}
        <div className="generated-recipe my-4">
          <ReactMarkDown>{recipe}</ReactMarkDown>
        </div>
      </main>
    </>
  )
}

export default App
