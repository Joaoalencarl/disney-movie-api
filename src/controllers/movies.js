const moviesJson = require('../../disney_movies.json');

exports.get = (req, res) => {

    const filters = req.body.filter;

    const movies = moviesJson.filter(movie => {
        year = movie.release_date.split('/')[2];
        genre = movie.genre;
        years = filters.years.split(',');

        if (filters.years == '' && filters.genre == '') {
            return movie;
        }

        if (filters.years == '' && genre === filters.genre) {
            return movie;
        }

        if (filters.genre == '' && years.includes(year)) {
            return movie;
        }

        if (years.includes(year) && genre === filters.genre) {
            return movie;
        }

    });

    res.json(movies);
}