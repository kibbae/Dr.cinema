import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";
import {
  FormControl,
} from "native-base";
import { useSelector } from "react-redux";

import cinemasjason from "../../resources/cinemas.json";
import DropDown from "../../components/DropDown";
import UpcomingMovieList from "../../components/UpcomingMovieList";
import allMovies from "../../resources/movies.json";
import MovieSearch from "../../components/MovieSearch";
import styles from "./styles";
//import UpcomingMovies from "../../DataSystem/API/API";




const Upcoming = ({ navigation: {navigate} }) => {
  const state = useSelector(state => state)
  const [data, setData] = useState(state)

  const upcoming = data['Upcoming'].Data
  const [searchUpcoming, setSearchUpcoming] = useState(upcoming)


  return (
    <SafeAreaView style={styles.screen}>
      <MovieSearch listAllMovies={searchUpcoming} setListAllMovies={setSearchUpcoming} orgAllMovies={upcoming}/>
      <View>
        <Text style={styles.comingsoon}>Coming Soon</Text>
      </View>
      <View style={styles.screen}>
              <UpcomingMovieList MovieInfo={searchUpcoming}/>
      </View>
    </SafeAreaView>
  );
};

export default Upcoming;
