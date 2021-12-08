import { useState } from "react";

export default function ImageCard(props) {
  const [showMore, setShowMore] = useState("img-container");

  const goRight = () => {
    setShowMore("img-container135");
  };

  const goBack = () => {
    setShowMore("img-container");
  };

  return (
    <div className="section-img-container">
      <div className={showMore}>
        <div className="img-grid">
          <img className="container-img" src={props.image1} alt="house" />
          <h4>{props.p1}</h4>
        </div>
        <div className="img-grid">
          <img className="container-img" src={props.image2} alt="house" />
          <h4>{props.p2}</h4>
        </div>
        <div className="img-grid">
          <img className="container-img" src={props.image3} alt="house" />
          <h4>{props.p3}</h4>
        </div>
        <div className="img-grid" onMouseOver={goRight} onMouseOut={goBack}>
          <img className="container-img" src={props.image4} alt="house" />
          <h4>{props.p4}</h4>
        </div>
      </div>
    </div>
  );
}
