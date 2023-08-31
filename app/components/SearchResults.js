import getMeals from "../utilities/getMeals";
import Image from "next/image";
import Link from "next/link";

// This is a simple async component that takes in a searchterm as a prop,
// fetches the meals related to that search term and displays them on the page.
const SearchResults = async ({ searchTerm }) => {
  const meals = await getMeals(searchTerm);

  // If the search term brings no results, return no results.
  if (!meals) {
    return (
      <p className="results-display-status">
        No results for "{searchTerm.replaceAll("%20", " ")}".
      </p>
    );
  }
  return (
    <div>
      <p className="results-display-status">
        Showing results for "{searchTerm.replaceAll("%20", " ")}".
      </p>
      <div className="results-container">
        {/* Map over the meals and return a card for each meal. */}
        {meals.map((meal) => {
          return (
            <Link className="link-card" href={`/${searchTerm}/${meal.idMeal}`}>
              <div className="card" key={meal.idMeal}>
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={300}
                  height={300}
                />
                <p>{meal.strMeal}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
