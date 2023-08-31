import SearchResults from "../components/SearchResults";
// Display the SearchResults component based on the searchterm in the path.
// the search term is a dynamic path from the root directory indicated by the square brackets.
const ResultsPage = async ({ params }) => {
  return (
    <main>
      {/* params gives access to the path. the searchterm is the first part of the path indicated by the dynamic route [searchterm] */}
      <SearchResults searchTerm={params.searchterm} />
    </main>
  );
};

export default ResultsPage;
