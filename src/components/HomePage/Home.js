import Header from "../Header";
import Footer from "../Footer";

// import { useState } from "react";
import ImageCard from "./ImageCard";
import ImageCard2 from "./ImageCard-2";
import FilterInHomePage from "./FilterInHomePage";

export default function Home() {
  // const [showLeft, setShowLeft] = useState(false);
  //control the container move to left or right
  // const showLeftButton = () => {
  //   if (showLeft === true) {
  //     setShowLeft(false);
  //   } else setShowLeft(true);
  // };

  return (
    <div className="main">
      <header className="header">
        <Header />
        <div className="filter-zone">
          <h1>Find a home that fits your needs</h1>
          <FilterInHomePage />
        </div>
      </header>
      <div className="home-container">
        <div className="container-hr">
          <div className="section">
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
              p2="Central"
              p3="East Auckland"
              p4="CBD"
            />
          </div>
          <hr></hr>
        </div>

        <div className="container-hr">
          <div className="section">
            <div className="filter-description">
              <h2>Find all types of properties. </h2>
              <p>
                Our core focus is client satisfation and we are proud of our
                reputation being built on delivering exceptional personal
                service to our tenants.
              </p>
            </div>
            <ImageCard
              image1="image/section2-1.png"
              image2="image/section2-2.png"
              image3="image/section2-3.png"
              image4="image/section2-4.png"
              p1="Units"
              p2="Terraced Homes"
              p3="Apartments"
              p4="Houses"
            />
          </div>
          <hr></hr>
        </div>
        <div className="container-hr">
          <div className="section">
            <div className="filter-description">
              <h2>Featured Auckland properties. </h2>
              <p>
                View some of the best homes and deals in the Auckland area. Hand
                selected by our team of over 20 specialist rental property
                managers.
              </p>
            </div>
            <ImageCard
              image1="image/section3-1.png"
              image2="image/section3-2.png"
              image3="image/section3-3.png"
              image4="image/section3-4.png"
              p1="Titirangi"
              p2="Kohimarama"
              p3="Hobsonville Point"
              p4="Long Bay"
            />
          </div>
          <hr></hr>
        </div>
        <div className="container-hr">
          <div className="section">
            <div className="filter-description">
              <h2>Popular Amenities. </h2>
              <p>
                Our portfolio includes more than 2400 managed rental properties.
                With that in mind we can find exactly what your looking for.
              </p>
            </div>
            <ImageCard
              image1="image/section4-1.png"
              image2="image/section4-2.png"
              image3="image/section4-3.png"
              image4="image/section4-4.png"
              p1="Washer"
              p2="Parking"
              p3="Pet Friendly"
              p4="Furnished"
            />
          </div>
          <hr></hr>
        </div>
        <div className="section">
          <div className="filter-description">
            <h2>Tenant Info Center </h2>
            <p>
              The Property Management Tenant Info Centre is one of the many ways
              we are able to deliver resourceful information and share valuable
              tips to help you while you rent one of our properties.
            </p>
          </div>
          <ImageCard
            image1="image/section5-1.png"
            image2="image/section5-2.png"
            image3="image/section5-3.png"
            image4="image/section5-4.png"
            p1="Tenancy
              Handbook"
            p2="Our 
              Services"
            p3="Useful
              Resources"
            p4="Inspection
              Guide"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
