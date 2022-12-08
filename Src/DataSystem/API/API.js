import axios from 'axios';


async function authenticate(username, password) {
     const response = await axios.post("https://api.kvikmyndir.is/authenticate", {
        username: username,
        password: password
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
    });
    return response;

    }

async function getMovies (token) {
    return await axios.get("https://api.kvikmyndir.is/movies?token=" + token, {
    });
    }

async function getCinemas (token) {
    return await axios.get("https://api.kvikmyndir.is/cinemas?token=" + token, {
    });
    }

async function getGenres (token) {
    return await axios.get("https://api.kvikmyndir.is/genres?token=" + token, {
    });
    }

async function getUpcomingMovies (token) {
    return await axios.get("https://api.kvikmyndir.is/upcoming?token=" + token, {
    });
    }


export { authenticate, getMovies, getCinemas, getGenres, getUpcomingMovies };