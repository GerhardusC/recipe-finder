"use client";
// In order to use state, this needs to be a client component.
// No engagement with the api is done here, because it is a client component.
// An api request is executed by navigating to the dynamic route based on the search term.
// useRouter is then used to access this dynamic route,
// which contains a loading state, an error state and a page with an async component.
import { useState } from "react";
import { useRouter } from "next/navigation";

// A simple search bar and a submit button in a form.
const SearchBar = () => {
  const [searchTerm, setSeachTerm] = useState("");
  const router = useRouter();
  return (
    <div className="search-form-container">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          // Route to the search term, this will initiate the api call on this dynamic route.
          router.push(`/${searchTerm}`);
          setSeachTerm("");
        }}
      >
        <input
          type="text"
          required
          name="mealReq"
          placeholder="Type the name of a meal."
          value={searchTerm}
          onChange={(e) => setSeachTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
