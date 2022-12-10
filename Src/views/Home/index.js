import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  FormControl,
} from "native-base";
import { useSelector, useDispatch } from "react-redux"
import DropDown from "../../components/DropDown";
import MovieList from "../../components/MovieList";
import styles from "./styles";
import MovieSearch from "../../components/MovieSearch";



const Home = () => {
  // Get all the data for evrything
  const state = useSelector(state => state)
  const [data, setData] = useState(state)

  // Get data for Movies
  const allMovies = data['Movies'].Data
  // Get data for Cinemas
  const CinemasData = data["Cinemas"].Data; 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');
  // data fro filters
  const [listAllMoviesFilter, setListAllMoviesFilter] = React.useState(allMovies);
  // data for search
  const [listAllMovies, setListAllMovies] = React.useState(listAllMoviesFilter)

  var name = "in Cinemas"
  var startName = "All Movies"
  if (ChosenCinemaId !== "all") {
    const filterdMovies = CinemasData.filter(OneCinema => 
      OneCinema.id === ChosenCinemaId
      );
      const NotReddyName = filterdMovies[0].name
      name = NotReddyName
      startName = "Playing Now at"
  }


  return (
    <SafeAreaView style={{ flex:1, backgroundColor: '#263238', marginBottom:64 }}>
      
       <FormControl mt="3" style={{marginTop: 10,}}>
       <DropDown 
        ChosenCinemaId={ChosenCinemaId} 
        setChosenCinemaId={setChosenCinemaId} 
        CinemasData={CinemasData} 
        orgAllMovies={allMovies}
        setListAllMoviesFilter={setListAllMoviesFilter}
        setListAllMovies={setListAllMovies}
        fromToWhere={"Movie"}
       />
        {/* <Text style={styles.cinematext} >{ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text> */}
        </FormControl>
        <MovieSearch listAllMovies={listAllMovies} setListAllMovies={setListAllMovies} orgAllMovies={listAllMoviesFilter}/>
        <View style={styles.inCinemaContainer}>
          <Text style={styles.inCinemaStart}>{startName} </Text>
          <Text style={styles.incinema}>{name}</Text>
        </View>
        <MovieList ChosenCinemaId={ChosenCinemaId} MovieInfo={listAllMovies} />
    </SafeAreaView>

  );
};

export default Home;