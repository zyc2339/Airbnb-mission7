// import { useState } from "react";

// export default function ImageCard2(props) {
//   const [showMore, setShowMore] = useState("img-container1");

//   const goLeft = () => {
//     setShowMore("img-container24");
//     console.log(showMore);
//   };

//   const goBack = () => {
//     setShowMore("img-container1");
//     console.log(showMore);
//   };

//   return (
//     <div className="section-img-container">
//       <div className={showMore}>
//         <div className="img-grid" onMouseOver={goLeft} onMouseOut={goBack}>
//           <img className="container-img" src={props.image1} alt="house" />
//           <h4>{props.p1}</h4>
//         </div>
//         <div className="img-grid">
//           <img className="container-img" src={props.image2} alt="house" />
//           <h4>{props.p2}</h4>
//         </div>
//         <div className="img-grid">
//           <img className="container-img" src={props.image3} alt="house" />
//           <h4>{props.p3}</h4>
//         </div>
//         <div className="img-grid">
//           <img className="container-img" src={props.image4} alt="house" />
//           <h4>{props.p4}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }
