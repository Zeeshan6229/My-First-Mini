import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(express.static("Public"));

app.get("/", (req, res) => {
  res.render("NameLength.ejs",{
    // message:"Enter Your Name Below. "
    message:"Enter Your Credentials Below. "
  })
});

app.post("/submit", (req, res) => {
  const firstName= req.body["fName"];
  const lastName= req.body["lName"];

  const sumName=firstName+lastName;
  let nameSize=sumName.length;
  let newMessage="Hello "+firstName+" !  your full  name is of length "+nameSize+" !!";
 
  res.render("index.ejs",{
    message:newMessage,
  });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
