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
import cinemasjason from "../../resources/cinemas.json";
import DropDown from "../../components/DropDown";
import UpcomingMovieList from "../../components/UpcomingMovieList";
import allMovies from "../../resources/movies.json";
import styles from "./styles";
import { useSelector } from "react-redux";
//import UpcomingMovies from "../../DataSystem/API/API";




const Upcoming = ({ navigation: {navigate} }) => {
  const state = useSelector(state => state)
  const [data, setData] = useState(state)
  const upcoming = data['Upcoming'].Data


  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.comingsoon}>Coming Soon</Text>
      </View>
      <View style={styles.screen}>
              <UpcomingMovieList MovieInfo={upcoming}/>
      </View>
    </SafeAreaView>
  );
};

export default Upcoming;
