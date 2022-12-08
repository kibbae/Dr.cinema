import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
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
    <View style={styles.screen}>
        <View>
            <UpcomingMovieList MovieInfo={upcoming}/>
        </View>
    <View style={styles.menuBar}>
                <TouchableOpacity style={styles.menuBarIcons}>
                    {/* <Ionicons name="person-circle" size={30} color="black" /> */}
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBarIcons} onPress={() => navigate('')}>
                    {/* <Ionicons name="add-circle" size={30} color="black" /> */}
                    <Text>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBarIcons} onPress={() => navigate('')}>
                    {/* <Ionicons name="add-circle" size={30} color="black" /> */}
                    <Text>About </Text>
                    //awsome
                </TouchableOpacity>
            </View>
        </View>
  );
};

export default Upcoming;
