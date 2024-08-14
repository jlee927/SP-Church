import "../assets/styles/news-full-post.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function NewsEntryFullPost() {
   const { id } = useParams();
   const location = useLocation();
   const dateCreated = location.state || {};

   console.log(location);

   const [dataAPI, setDataAPI] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `http://localhost:3000/contentful/single-news-announcement/${id}`
            );
            if (!res.ok) {
               throw new Error("Network response was not okay");
            }
            const result = await res.json();
            setDataAPI(result);
         } catch (error) {
            console.error(error); // Log error for debugging
         }
      };

      fetchData();
   }, []);

   function parseDate(dateString) {
      const date = new Date(dateString);

      // Extract year, month, and day
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
      const day = String(date.getDate()).padStart(2, "0");

      return { year, month, day };
   }

   const isNumberedList = /^\d+\.\s+/;
   let renderedContent;
   let isBulletPoint = isNumberedList.test(dataAPI.body);
   // Check if the text contains bullet points or numbered lists
   if (isBulletPoint) {
      // Split the text into an array of list items
      const items = dataAPI.body.split(/\d+\.\s+/).filter(Boolean);

      // Store the list in the variable
      renderedContent = (
         <div className="entry--full--body">
            <ol >
               {items.map((item, index) => (
                  <li  key={index}>
                     {item.trim()}
                  </li>
               ))}
            </ol>
         </div>
      );
   } else {
      // Store the plain text in the variable
      renderedContent = <p className="entry--full--body">{dataAPI.body}</p>;
   }

   console.log(dataAPI);
   const announcementDate = parseDate(dataAPI.announcementDate);
   return (
      <div className="news--full--container">
         <div className="news--full--body">
            <h1 className="entry--full--date">
               {announcementDate.month}월 {announcementDate.day}일
            </h1>

            {dateCreated ? (
               <h3 className="entry--full--posted">
                  작성일자
                  <span>
                     {" "}
                     {dateCreated.month}월 {dateCreated.day}, {dateCreated.year}
                  </span>
               </h3>
            ) : (
               <h3>No date available</h3>
            )}

            {renderedContent}
         </div>
      </div>
   );
}
