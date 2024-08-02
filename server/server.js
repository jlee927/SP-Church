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
      res.json(entries.items);
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
