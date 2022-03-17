const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const DB = require("../utils/db");

//*desc add new MOvie
//*route /db/movie/add
//*access Protected
const movieAdd = asyncHandler(async (req, res) => {
  try {
    const movie = ({ imdbID, title, year, imdbRating, director, plot, genres, actors, img_url } = req.body);
    //  genres and actors are string of genres need to be parsed to array

    if (!imdbID || !title || !year || !imdbRating || !director || !plot || !genres || !actors) {
      res.json({ message: "All fields need to be field in" });
      return;
    }
    console.log(req.user);

    //checking if movie is not in a table already
    const userHasMovie = await DB.any("SELECT * FROM users_movies WHERE user_id=$1 and imdb_id=$2", [req.user.user_id, imdbID]);
    // console.log("__________");
    if (userHasMovie.length === 0) {
      console.log("not in a library");

      const movieInDB = await DB.any("SELECT imdb_id FROM movies WHERE imdb_id=($1)", [imdbID]);
      if (movieInDB.length === 0) {
        console.log(1);
        //add Director to the director table if wasn't there before
        const directorInDB = await DB.any("SELECT d_name FROM directors Where d_name=($1)", [director]);
        if (directorInDB.length === 0) {
          console.log(2);
          await DB.none(`INSERT INTO directors(d_name) VAlUES($1)`, [director]);
        }
        console.log(3);
        //
        //  add to movie to movies Table
        await DB.none("INSERT INTO movies(imdb_id, m_title, m_year, imdb_rating, director, plot, img_url) VALUES($1, $2, $3, $4, $5, $6, $7)", [
          imdbID,
          title,
          year,
          imdbRating,
          director,
          plot,
          img_url,
        ]);
        message = `movie added`;
        console.log(4);
        //

        //

        // if actors not exist already in a table then  add actors to actors Table  and joint table movies_actors
        const actorsArr = actors.split(", ");
        const actorsInDB = await DB.any("SELECT a_name FROM actors");
        console.log(5);
        //checking each actor if they not in Db yet
        actorsArr.forEach(async (actor) => {
          const actorInDB = actorsInDB.some((actorInDB) => actorInDB.a_name === actor);
          console.log(6);
          if (!actorInDB) {
            await DB.none(`INSERT INTO actors(a_name) VAlUES($1)`, [actor]);
          }

          //adding Movie ID and Actor to movies_actors join table
          await DB.none("INSERT INTO movies_actors(imdb_id, actor) VALUES($1, $2)", [imdbID, actor]);
          console.log(7);
        });

        // if genre not exist already in a table then  add genre to genres Table and joint table movies_genre
        const genresArr = genres.split(", ");
        const existingGenres = await DB.any("SELECT genre FROM genres");
        console.log(8);
        //checking each genre if they not in Db yet
        genresArr.forEach(async (genre) => {
          console.log(9);
          const genreInDB = existingGenres.some((existingGenre) => existingGenre.genre === genre);
          if (!genreInDB) {
            console.log(10);
            await DB.none(`INSERT INTO genres(genre) VAlUES($1)`, [genre]);
          }
          //adding Movie ID and Genre to genre join table
          await DB.none("INSERT INTO movies_genres(imdb_id, genre) VALUES($1, $2)", [imdbID, genre]);
          console.log(11);
        });
        await DB.none("INSERT INTO users_movies (user_id, imdb_id) VALUES ($1, $2)", [req.user.user_id, imdbID]);
        res.json({ message: "movie added to Movies DB and  to users_movies DB", movie });
      } else {
        await DB.none("INSERT INTO users_movies (user_id, imdb_id) VALUES ($1, $2)", [req.user.user_id, imdbID]);
        res.json({ message: `movie added to users_movies DB ` });
      }
    } else {
      console.log("adding to the library");
    }
  } catch (error) {
    res.json({ error });
  }
});

module.exports = { movieAdd };
