import "../assets/styles/slideshow.css";
import Dot from "./Dot";
import Slide from "./Slide";
import { useState } from "react";

export default function Slideshow() {
   let myData = [
      {
         index: 0,
         url: "https://www.w3schools.com/howto/img_nature_wide.jpg",
      },
      {
         index: 1,
         url: "https://www.w3schools.com/howto/img_snow_wide.jpg",
      },
      {
         index: 2,
         url: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      },
      {
         index: 3,
         url: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      },
   ];

   const [displayData, setDisplayData] = useState(myData);
   const [currImage, setCurrImage] = useState(0);

   function handleDots(dotKey) {
      setCurrImage(dotKey);
   }

   function handleNext() {
      console.log("Next Test");

      if (currImage === displayData.length - 1) {
         setCurrImage(0);
      } else {
         setCurrImage(currImage + 1);
      }
   }

   function handlePrev() {
      console.log("Prev Test");
      if (currImage === 0) {
         setCurrImage(displayData.length - 1);
      } else {
         setCurrImage(currImage - 1);
      }
   }

   return (
      <div>
         <div className="slideshow-container">
            <Slide imgSrc={displayData[currImage].url} />

            <div className="arrow--container">
               <a onClick={handlePrev} className="prev">
                  &#10094;
               </a>
               <a onClick={handleNext} className="next">
                  &#10095;
               </a>
            </div>
         </div>

         <div className="dots--circles">
            <Dot
               numDots={displayData.length}
               currIndex={currImage}
               handleClick={handleDots}
            />
         </div>
      </div>
   );
}
