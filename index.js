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
  res.render("LoginPage.ejs",{
    // message:"Enter Your Name Below. "
    message:"Enter Your Credentials Below. "
  })
});

app.post("/submit", (req, res) => {
  const ValidPassword="12345"
  const UserName= req.body["uName"];
  const Password= req.body["password"];
  const newMessage= "Hello "+UserName+" !! You are on HomePage";
  if(Password===ValidPassword)
    res.render("NameLength.ejs",{
    message:newMessage,
  });
  else
  res.render("LoginPage.ejs",{
    message:"Invalid Credential. Try Again",
  });

});

app.post("/calculate", (req, res) => {
  const firstName= req.body["fName"];
  const lastName= req.body["lName"];

  const sumName=firstName+lastName;
  let nameSize=sumName.length;
  let newMessage="Hello "+firstName+" !  your full  name is of length "+nameSize+" !!";
 
  res.render("NameLength.ejs",{
    message:newMessage,
  });


});

app.get("/about", (req, res) => {
  res.render("About.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


