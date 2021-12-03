import Header from "./Header";

export default function Home(options) {
  return (
    <div className="main">
      <header className="header">
        <Header />
        <div className="filter-zone">
          <h1>Find a home that fits your needs</h1>
          <button className="btn btn-find">Find your home</button>
        </div>
      </header>
    </div>
  );
}
