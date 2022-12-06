import axios from "axios";


const username = "hopur26"
const password = "dominos5812345"
// Send a HTTP POST request to http://api.kvikmyndir.is/authenticate and include the username and password in the body
export const authenticate = (username, password) => {
  return axios.post("http://api.kvikmyndir.is/authenticate", {
    username,
    password,
  });
}

// Send a HTTP GET request to http://api.kvikmyndir.is/movies and include the token in the header
export const getMovies = (token) => {
    return axios.get("http://api.kvikmyndir.is/movies?token=" + token , {
    });
    }

export const getCinemas = (token) => {
    return axios.get("http://api.kvikmyndir.is/cinemas?token=" + token , {
    });
    }

export const getUpcomingMovies = (token) => {
    return axios.get("http://api.kvikmyndir.is/upcoming?token=" + token , {
    });
    }
