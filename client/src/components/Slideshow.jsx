import "../assets/styles/slideshow.css";
import Dot from "./Dot";
import Slide from "./Slide";
import { useEffect, useState } from "react";

export default function Slideshow() {
   let myData = [
      {
         index: 0,
         url: "https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho=",
         youtube: false,
      },
      {
         index: 1,
         url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
         youtube: false,
      },
      {
         index: 2,
         url: "https://www.w3schools.com/howto/img_lights_wide.jpg",
         youtube: false,
      },
      {
         index: 3,
         url: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
         youtube: false,
      },
      {
         index: 4,
         url: "K4TOrB7at0Y?si=Vt1ZKrUQLhlRBwGE",
         youtube: true,
      },
   ];

   const [displayData, setDisplayData] = useState(myData);
   const [currImage, setCurrImage] = useState(0);

   const [dataAPI, setDataApi] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch("http://localhost:3000/api/content"); // Adjust the URL as needed
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setDataApi(result);
         } catch (error) {
            setError(error.message);
         }
      };

      fetchData();
   }, []);

   console.log(dataAPI);

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
            <Slide
               propsYoutube={displayData[currImage].youtube}
               contentUrl={dataAPI.imgUrl}
            />

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
