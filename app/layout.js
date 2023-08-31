import Link from "next/link";
import SearchBar from "./components/SearchBar";
// Global styles
import "@/app/styles/globalStyles.css";

// Font from Google fonts.
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"] });

// Metadata for SEO
export const metadata = {
  title: "Recipe finder",
  description:
    "An app used to find recipes from a database. Type in the name of a food category and click search. Click on any of the results to see details.",
};
// The basic layout for all the pages. This is the navigation bar with the search bar inside.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <nav className="navigation-container">
          <Link href="/">🍔</Link>
          <SearchBar />
        </nav>
        {children}
      </body>
    </html>
  );
}
