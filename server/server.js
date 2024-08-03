require("dotenv").config();
const contentfulClient = require("./contentfulClient");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const cors = require("cors");
app.use(cors());

app.get("/api/content", async (req, res) => {
   try {
      const entries = await contentfulClient.getEntries();
      //   let pageData = { imgUrl: entries.items[0].fields.image1.fields.file.url };
      //   res.json(entries.items);

      let dataForSlideshow = [];

      for (let i = 0; i < entries.items.length; i++) {
         if (entries.items[i].sys.contentType.sys.id == "mediaForSlideshow") {
            console.log(entries.items[i].sys.contentType.sys.id);
            console.log("True");

            const link = entries.items[i].fields.isItAVideo
               ? entries.items[i].fields.youtubeUrl.content[0].content[0].value
               : entries.items[i].fields.media.fields.file.url;
               
            dataForSlideshow.push({
               id: i + 1,
               isVideo: entries.items[i].fields.isItAVideo,
               name: entries.items[i].fields.entryName,
               url: link,
            });
         } else {
            console.log(entries.items[i].sys.contentType.sys.id);
            console.log("False");
         }
      }
      //   console.log(entries.items[0].sys.contentType.sys.id);
      //   res.json(entries.items);
      res.json(dataForSlideshow);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data from contentful" });
   }
});

app.listen(PORT, (error) => {
   if (!error)
      console.log(
         "Server is Successfully Running, and App is listening on port " + PORT
      );
   else console.log("Error occurred, server can't start", error);
});
