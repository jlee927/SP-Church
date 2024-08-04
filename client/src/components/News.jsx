import "../assets/styles/news.css";
import NewsEntry from "./NewsEntry";

export default function News() {
   return (
      <div className="news--container">
         <h1 className="news--title"><span>교회 소식</span></h1>

         <NewsEntry />


      </div>
   );
}
