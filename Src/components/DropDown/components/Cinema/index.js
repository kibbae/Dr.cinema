

const filterByCinemaID = (cinemaID, orgAllCinema, setListAllCinemaFilter, setListAllCinema) => {
    if (cinemaID !== 'all') {
      const filterdMovies = orgAllCinema.filter(OneCinema => 
        OneCinema.id === cinemaID
        );
        setListAllCinemaFilter(filterdMovies)
        setListAllCinema(filterdMovies);
    } else {
        setListAllCinemaFilter(orgAllCinema)
        setListAllCinema(orgAllCinema);
    }
  }

export default filterByCinemaID;