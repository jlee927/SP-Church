import "../assets/styles/news.css";

export default function NewsEntry(props) {
   return (
      <div className="news--body">
         <h2 className="entry--date">{props.dateAnnouncement.month}월 {props.dateAnnouncement.day}일</h2>
         <h3 className="entry--posted">작성일자 {props.dateCreated.month}월 {props.dateCreated.day}, {props.dateCreated.year}</h3>
         <p>
            {props.body}
         </p>

         <h3 className="entry--category">
            카테고리 교회 소식. 고유주소 북마크.
         </h3>
      </div>
   );
}
