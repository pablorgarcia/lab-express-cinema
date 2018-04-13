const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie")

/* GET home page */
/* router.get("/movies", (req, res) => {
  res.render("movies");
}); */


router.get("/", (req, res) => {
   Movie.find().then( movies => {
    res.render("movies", {movies});
    //res.render("movie_list", {movies});
   }) 
});













module.exports = router;