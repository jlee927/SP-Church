import "../assets/styles/slideshow.css";
import ReactPlayer from "react-player";

export default function Slide(props) {
   return (
      <div>
         {props.isVideo ? (
            <div className="myVideo fade">
               <ReactPlayer
                  className="react-player"
                  url={props.contentUrl}
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
   );
}
