const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const DB = require("../utils/db");

//Checking  if x exists in any object of array
// function existsIn(x, arr) {
//   let result = false;
//   arr.forEach((e) => {
//     if (String(Object.values(e)) === x) {
//       result = true;
//     }
//   });
//   return result;
// arr.some((e) =>  e.a_name === x);

//*desc add new MOvie
//*route /db/movie/add
//*access Privet
const movieAdd = asyncHandler(async (req, res) => {
  try {
    const movie = ({ imdbID, title, year, imdbRating, director, plot, genres, actors } = req.body);
    console.log(movie);
    //  req.body.genres; //string of genres need to be parsed to array
    //  req.body.actors; // string of actors need to be parsed to array

    if (!imdbID || !title || !year || !imdbRating || !director || !plot || !genres || !actors) {
      res.json({ message: "All fields need to be field in" });
      return;
    }

    //if movie is not in a table already
    const movieInDB = await DB.any("SELECT imdb_id FROM movies WHERE imdb_id=($1)", [imdbID]);
    console.log("finding movie in DB:");
    console.log(movieInDB);
    if (movieInDB.length === 0) {
      //add to the director table if wasn't there before
      const directorInDB = await DB.any("SELECT d_name FROM directors Where d_name=($1)", [director]);
      if (directorInDB.length === 0) {
        await DB.none(`INSERT INTO directors(d_name) VAlUES($1)`, [director]);
      }

      //  add to movie to movies Table
      await DB.none("INSERT INTO movies(imdb_id, m_title, m_year, imdb_rating, director, plot) VALUES($1, $2, $3, $4, $5, $6)", [imdbID, title, year, imdbRating, director, plot]);
      message = `movie added`;
      console.log("movie Added");
      //

      // if actors not exist already in a table then  add actors to actors Table  and joint table movies_actors
      const actorsArr = actors.split(", ");
      console.log("actorsArr:");
      console.log(actorsArr);
      const actorsInDB = await DB.any("SELECT a_name FROM actors");
      console.log("actorsInDB: ");
      const actorsObj = [...actorsInDB];
      console.log(actorsObj);
      actorsArr.forEach(async (actor) => {
        //REFACTOR: replace "existsIn" with SQL option or similar or similar but conventional function
        const actorInDB = actorsInDB.some((actorInDB) => actorInDB.a_name === actor);
        if (!actorInDB) {
          console.log(actor + " not in DB: " + !actorInDB);
          await DB.none(`INSERT INTO actors(a_name) VAlUES($1)`, [actor]);
        }

        console.log("trying to insert actor: " + actor);
        await DB.none("INSERT INTO movies_actors(imdb_id, actor) VALUES($1, $2)", [imdbID, actor]);
      });

      // if actors not exist already in a table then  add actors to actors Table and joint table movies_genre
      const genresArr = genres.split(", ");
      console.log(genresArr);
      const existingGenres = await DB.any("SELECT genre FROM genres");
      console.log("existingGenres:");
      console.log(existingGenres);
      genresArr.forEach(async (genre) => {
        console.log("-----------------");
        console.log(genre);

        //REFACTOR: replace "existsIn" with SQL option or similar but conventional function
        const genreInDB = existingGenres.some((existingGenre) => existingGenre.genre === genre);
        console.log();
        if (!genreInDB) {
          await DB.none(`INSERT INTO genres(genre) VAlUES($1)`, [genre]);
        }
        await DB.none("INSERT INTO movies_genres(imdb_id, genre) VALUES($1, $2)", [imdbID, genre]);
      });
      res.json({ message: "movie added", movie });
    } else {
      res.json({ message: `movie  already in a Library` });
    }
  } catch (error) {
    res.json({ error });
  }

  //   DB.none("INSERT INTO actors (imdb_id, a_fullName ) VALUES ($1,$2)", [imdbID, actors]);
});

//*desc show all Movies
//*route /db/movie/all
//*access Privet
const movieAll = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

//*desc show Movie info
//*route /db/movie/info:id
//*access Privet
const movieInfo = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

//*desc edit Movie
//*route /db/movie/edit:id
//*access Privet
const movieEdit = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

//*desc delete Movie
//*route /db/movie/delete:id
//*access Privet
const movieDelete = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

module.exports = {
  movieAdd,
  movieAll,
  movieInfo,
  movieEdit,
  movieDelete,
};
