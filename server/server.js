require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const contentful = require("./routes/contentful")

app.use(cors());
app.use("/contentful", contentful);
app.use(express.json())

// app.get("/data/test", (req, res) => {
//    res.send("My data test");
// })

app.post("/data/test", (req, res) => {
   const { name, email } = req.body;

   console.log(`Name: ${name} Email: ${email}`)

   res.send();
}) 



app.listen(PORT, (error) => {
   if (!error)
      console.log(
         "Server is Successfully Running, and App is listening on port " + PORT
      );
   else console.log("Error occurred, server can't start", error);
});
