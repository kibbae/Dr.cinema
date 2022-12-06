import React from "react";
import { View, Text, } from "react-native";

import MovieList from "../../components/MovieList";
import allMovies from "../../resources/movies.json";
import cinemas from "../../resources/cinemas.json";


const Home = ({ navigation: {navigate} }) => {

  return (
    <View>
        <Text>Home</Text>
        <MovieList MovieInfo={allMovies}/>
    </View>
  );
};

export default Home;
