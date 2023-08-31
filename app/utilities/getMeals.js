// I decided to remove the api call so I can do it from anywhere in future.
// This function simply returns the meals based on a search term.
// Meals are spaced with underscores, so I replace the spaces with underscores before fetching the search term.

const getMeals = async (searchTerm) => {
  const formattedSearchTerm = String(searchTerm)
    .replaceAll(" ", "_")
    .toLowerCase();
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${formattedSearchTerm}`
  );
  // If the data is not fetched properly, throw an error.
  if (!data.ok) {
    throw new Error("Failed to fetch data.");
  }
  // Otherwise return the meals array of the response.
  const res = await data.json();
  return res.meals;
};

export default getMeals;
