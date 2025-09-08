export default function IngredientList(props) {

    const ingredientsEles = props.ingredients.map((ele,index) => {
    return <li key={index}>{ele}</li>
    })

    return (
    <div className="ingreds my-4">
        <h3 className="fw-bold">Ingredients on hand:</h3>
        <ul>
            {ingredientsEles}
        </ul>
    </div>
    )
}