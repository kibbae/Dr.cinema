

const filterByCinemaID = (cinemaID, orgAllMovies, setListAllMoviesFilter, setListAllMovies) => {
    if (cinemaID !== 'all') {
      const filterdMovies = orgAllMovies.filter(movie => 
        movie.showtimes.some(cinemas => cinemas.cinema.id === cinemaID)
        );
      setListAllMoviesFilter(filterdMovies)
      setListAllMovies(filterdMovies);
    } else {
      setListAllMoviesFilter(orgAllMovies)
      setListAllMovies(orgAllMovies);
    }
  }

export default filterByCinemaID;