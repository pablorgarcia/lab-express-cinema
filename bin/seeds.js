require("dotenv").config();

const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movie_data = require("./seeds_data");

const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() => {
  console.log(`conectado ${dbURL}`);
  
  Movie.create(movie_data)
    .then((m) => {
      console.log(m);
    })
    .catch((err) => {
      console.log(err);
    })
});
