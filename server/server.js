const express = require("express");
const app = express(); 

app.listen(3000, (error) => {
   if (!error)
      console.log(
         "Server is Successfully Running, and App is listening on port " + PORT
      );
   else console.log("Error occurred, server can't start", error);
});