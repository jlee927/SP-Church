import "../assets/styles/slideshow.css";
import YoutubeEmbed from "./Youtube";

export default function Slide(props) {
   return (
      <div>
         {props.propsYoutube ? (
            <div className="mySlide fade">
               <YoutubeEmbed className="slide--image" embedId={props.contentUrl} />
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
