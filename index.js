const express = require("express");
const path = require("path");

// // HomeRequest
// const handleHomeRequest = (req, res) => {
//   const homePage = path.join(__dirname, "public", "index.html");
//   res.sendFile(homePage);
//   console.log("Home Page Is Connected")
// };

// // AboutRequest
// const handleAboutRequest = (req, res) => {
//     const aboutPage = path.join(__dirname, "public", "about.html");
//     res.sendFile(aboutPage);
//     console.log("About Page Is Connected")
//   };
//   // ContactRequest
// const handleContactRequest = (req, res) => {
//     const contactPage = path.join(__dirname, "public", "contact.html");
//     res.sendFile(contactPage);
//     console.log("Contact Page Is Connected")
//   };
//   // ServiceRequest
// const handleServiceRequest = (req, res) => {
//     const servicePage = path.join(__dirname, "public", "service.html");
//     res.sendFile(servicePage);
//     console.log("Service Page Is Connected")
//   };

// const middleware = (req, res, next) => {
//  //console.log("Middleware");
//   next();
// };

const server = express();
server.use(express.static(path.join(__dirname, "public")))
// server.use(middleware);
// server.get("/service", handleServiceRequest)
// server.get("/contact", handleContactRequest)
// server.get("/about", handleAboutRequest)
// server.get("/", middleware, handleHomeRequest);

server.listen(3001, "localhost", () => {
  console.log("Server is Connected");
});
