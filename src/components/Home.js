import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home(options) {
  return (
    <div className="main">
      <header className="header">
        <Header />
        <div className="filter-zone">
          <h1>Find a home that fits your needs</h1>
          <button className="btn btn-find">Find your home</button>
          <Link className="link" to="/find">
            <button className="btn btn-find">next page</button>
          </Link>
        </div>
      </header>

      <Footer />
    </div>
  );
}
