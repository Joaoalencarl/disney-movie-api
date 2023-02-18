const fs = require('fs');

const moviesJson = require('../../disney_movies.json');

    var years = [];
    var genres = [];

exports.get = (req, res) => {


    moviesJson.forEach(movie => {
        var year = movie.release_date.split('/')[2];
        var genre = movie.genre;

        if (!years.includes(year) && movie.release_date !== null && movie.release_date !== '') {
            years.push(year);
        }

        if (!genres.includes(genre) && genre !== null && genre !== '') {
            genres.push(genre);
        }
    });

    const response = {
        years: years,
        genres: genres
    }

    res.json(response);
}


