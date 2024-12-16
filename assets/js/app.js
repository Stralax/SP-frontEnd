import express from "express";
//import {dirname, join} from "path";  // <- KREIRAJ NOVI FAJL
//import {fileURLToPath} from "url";      // <- KREIRAJ NOVI FAJL
//import hbsRooter from ".hbs/routes/hbs.js"  // <- KREIRAJ NOVI FAJL

const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('../html/homepage.html'); // Renders the 'home.handlebars' view
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
