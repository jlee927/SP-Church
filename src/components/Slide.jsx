import "../assets/styles/slideshow.css";
import ReactPlayer from "react-player";

export default function Slide(props) {
   return (
      <div>
         {props.propsYoutube ? (
            <div className="myVideo fade">
               <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=K4TOrB7at0Y"
                
               />
            </div>
         ) : (
            <div className="mySlides fade">
               <img
                  className="slide--image"
                  src={props.contentUrl}
                  alt="temp-img"
               />
            </div>
         )}
      </div>

      // <div className="mySlides fade">
      //    <img
      //       className="slide--image"
      //       src={props.imgSrc}
      //       alt="temp-img"
      //    />
      // </div>
   );
}
