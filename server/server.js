require("dotenv").config();
const contentfulClient = require("./contentfulClient");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const cors = require("cors");
app.use(cors());

app.get("/api/slideshow", async (req, res) => {
   try {
      const entries = await contentfulClient.getEntries({
         content_type: "mediaForSlideshow",
      });

      let dataForSlideshow = [];
      // console.log(entries.items.length);
      for (let i = 0; i < entries.items.length; i++) {
         const link = entries.items[i].fields.isItAVideo
            ? entries.items[i].fields.youtubeUrl.content[0].content[0].value
            : entries.items[i].fields.media.fields.file.url;

         dataForSlideshow.push({
            id: i + 1,
            isVideo: entries.items[i].fields.isItAVideo,
            entryName: entries.items[i].fields.entryName,
            url: link,
         });
      }

      res.json(dataForSlideshow);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data from contentful" });
   }
});

function parseDate(dateString) {
   const date = new Date(dateString);

   // Extract year, month, and day
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
   const day = String(date.getDate()).padStart(2, "0");

   return { year, month, day };
}

app.get("/api/news-announcement", async (req, res) => {
   const entries = await contentfulClient.getEntries({
      content_type: "churchNews",
   });

   let dataForNews = [];

   for (let i = 0; i < entries.items.length; i++) {
      // let dateArray = parseDate(entries.items[i].fields.dateOfEvent);
      // // dateArray[2] = dateArray[2].substring(0, 2);

      // let createdDateArray = parseDate(entries.items[i].sys.createdAt);
      // console.log(createdDateArray);

      let dateAnnouncement = parseDate(entries.items[i].fields.dateOfEvent);
      let dateCreated = parseDate(entries.items[i].sys.createdAt);

      dataForNews.push({
         id: i + 1,
         title: entries.items[i].fields.title,
         body: entries.items[i].fields.newsBody,
         announcementDate: dateAnnouncement,
         createdDate: dateCreated,
      });
   }
   res.json(dataForNews);
});

app.listen(PORT, (error) => {
   if (!error)
      console.log(
         "Server is Successfully Running, and App is listening on port " + PORT
      );
   else console.log("Error occurred, server can't start", error);
});
