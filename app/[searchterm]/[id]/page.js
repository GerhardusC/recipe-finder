import getMeals from "@/app/utilities/getMeals";
import Image from "next/image";
import Link from "next/link";
// Once you click on a specific meal in the index/search results page, you are linked here to a specific food item.
const FoodItem = async ({ params }) => {
  // Go through these search results again. They are cached by default at this point already.
  // This works because of the Next.js app router.
  // Note here also that params.searchterm is the dynamic route -> [searchterm]
  const meals = await getMeals(params.searchterm);

  if (!meals) {
    return <p className="results-display-status">Nothing to display.</p>;
  }

  // Loop through the meals, and if the meal's ID equals the meal that was clicked on, return the meal.
  // Params.id is the value of the id path, which is also a dynamic route.
  for (let i = 0; i < meals.length; i++) {
    if (meals[i].idMeal === params.id) {
      return (
        <div className="specific-meal-container">
          <h1>{meals[i].strMeal}</h1>
          <Image
            src={meals[i].strMealThumb}
            alt={meals[i].strMeal}
            width={400}
            height={400}
          />
          <p className="meal-category">{meals[i].strCategory}</p>
          <p className="meal-origin">{meals[i].strArea}</p>
          <p className="preparation-instructions">{meals[i].strInstructions}</p>
          {/* A back button that goes back to the search term's dynamic route. */}
          <Link className="back-button" href={`/${params.searchterm}`}>
            Back
          </Link>
        </div>
      );
    }
  }
  // If the meal isn't found for some reason, just give an error and a back button.
  return (
    <div>
      <p className="results-display-status">This meal was not found.</p>
      <Link className="back-button" href={`/${params.searchterm}`}>
        Back
      </Link>
    </div>
  );
};

export default FoodItem;
