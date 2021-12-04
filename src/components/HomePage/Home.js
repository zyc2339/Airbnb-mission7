import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageCard from "./ImageCard";

export default function Home() {
  const [showLeft, setShowLeft] = useState(false);
  //control the container move to left or right
  const showLeftButton = () => {
    if (showLeft === true) {
      setShowLeft(false);
    } else setShowLeft(true);
  };

  return (
    <div className="main">
      <header className="header">
        <Header />
        <div className="filter-zone">
          <h1>Find a home that fits your needs</h1>
          <button className="btn btn-find">Find your home</button>
          <Link className="link" to="/find">
            <button className="btn btn-find">→</button>
          </Link>
        </div>
      </header>
      <div className="home-container">
        <div className="section-container">
          <div
            className={showLeft === false ? "section" : "active-button-left"}
          >
            <div className="filter-description">
              <h2>Neighbourhoods</h2>
              <p>
                Our residential property management division extends its
                services across the entire Auckland region- from Orewa to
                Pukekohe and Waiheke Island.
              </p>
            </div>
            <ImageCard
              image1="image/section1-1.png"
              image2="image/section1-2.png"
              image3="image/section1-3.png"
              image4="image/section1-4.png"
              p1="Northshore"
              p2="Northshore"
              p3="Northshore"
              p4="Northshore"
            />

            <button className="arrow-right" onClick={showLeftButton}>
              〉
            </button>
          </div>
        </div>
        <div className="section-container">
          <div
            className={showLeft === false ? "section" : "active-button-left"}
          >
            <div className="filter-description">
              <h2>Neighbourhoods</h2>
              <p>
                Our residential property management division extends its
                services across the entire Auckland region- from Orewa to
                Pukekohe and Waiheke Island.
              </p>
            </div>
            <ImageCard
              image1="image/section2-1.png"
              image2="image/section2-2.png"
              image3="image/section2-3.png"
              image4="image/section2-4.png"
              p1="Northshore"
              p2="Northshore"
              p3="Northshore"
              p4="Northshore"
            />

            <button className="arrow-right" onClick={showLeftButton}>
              〉
            </button>
          </div>
        </div>
        <div className="section-container">
          <div
            className={showLeft === false ? "section" : "active-button-left"}
          >
            <div className="filter-description">
              <h2>Neighbourhoods</h2>
              <p>
                Our residential property management division extends its
                services across the entire Auckland region- from Orewa to
                Pukekohe and Waiheke Island.
              </p>
            </div>
            <ImageCard
              image1="image/section3-1.png"
              image2="image/section3-2.png"
              image3="image/section3-3.png"
              image4="image/section3-4.png"
              p1="Northshore"
              p2="Northshore"
              p3="Northshore"
              p4="Northshore"
            />

            <button className="arrow-right" onClick={showLeftButton}>
              〉
            </button>
          </div>
        </div>
        <div className="section-container">
          <div
            className={showLeft === false ? "section" : "active-button-left"}
          >
            <div className="filter-description">
              <h2>Neighbourhoods</h2>
              <p>
                Our residential property management division extends its
                services across the entire Auckland region- from Orewa to
                Pukekohe and Waiheke Island.
              </p>
            </div>
            <ImageCard
              image1="image/section4-1.png"
              image2="image/section4-2.png"
              image3="image/section4-3.png"
              image4="image/section4-4.png"
              p1="Northshore"
              p2="Northshore"
              p3="Northshore"
              p4="Northshore"
            />

            <button className="arrow-right" onClick={showLeftButton}>
              〉
            </button>
          </div>
        </div>
        <div className="section-container">
          <div
            className={showLeft === false ? "section" : "active-button-left"}
          >
            <div className="filter-description">
              <h2>Neighbourhoods</h2>
              <p>
                Our residential property management division extends its
                services across the entire Auckland region- from Orewa to
                Pukekohe and Waiheke Island.
              </p>
            </div>
            <ImageCard
              image1="image/section5-1.png"
              image2="image/section5-2.png"
              image3="image/section5-3.png"
              image4="image/section5-4.png"
              p1="Northshore"
              p2="Northshore"
              p3="Northshore"
              p4="Northshore"
            />

            <button className="arrow-right" onClick={showLeftButton}>
              〉
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}