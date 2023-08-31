export default async function Home() {
  return (
    <main>
      {/* Just some information to display on the home page.
        Per the task this page should have an index where you can click on items, however, 
        with the search feature I added, this page does not house
        any items to click on, instead, each search provides a dynamic index for that search term.
        For example, if you search for "curry", you can click on any of the curries to access more details about them.
        In this way, the path /curry is an index of curries, and /curry/52814 is specifically the thai green curry.
      */}
      <div className="homepage-container">
        <h1 className="homepage-heading">Welcome to the food app</h1>
        <h3 className="homepage-subheading">
          Look for a meal you want to prepare, e.g. "curry"
        </h3>
        <p className="homepage-ptext">
          Click on the burger (🍔) in the navigation bar at any time to return
          home.
        </p>
      </div>
    </main>
  );
}
