import React from "react";
import { View, Text, } from "react-native";
import { FormControl, } from "native-base";

import MovieList from "../../components/MovieList";
import allMovies from "../../resources/movies.json"


const Home = ({ navigation: {navigate} }) => {

  return (
    <View>
       <FormControl mt="3">
        <Text>Home</Text>
        <MovieList MovieInfo={allMovies}/>
        </FormControl>
    </View>
  );
};

export default Home;
