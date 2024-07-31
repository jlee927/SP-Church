import "../assets/styles/slideshow.css";

export default function Slide(props) {
   return (
      <div className="mySlides fade">
         <img
            className="slide--image"
            src={props.imgSrc}
            alt="temp-img"
         />
      </div>
   );
}
