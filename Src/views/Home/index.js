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

import cinemasjason from "../../resources/cinemas.json";
import DropDown from "../../components/DropDown";
import MovieList from "../../components/MovieList";
import styles from "./styles";
import MovieSearch from "../../components/MovieSearch";
import LoadPage from "../LoadPage";
import { fetchMovies } from "../../DataSystem/Redux/store"



const Home = () => {
  const state = useSelector(state => state)
  const [data, setData] = useState(state)
  const notFixallMovies = data['Movies']
  const allMovies = notFixallMovies.Data
  console.log('shittt ', allMovies)
  const [CinemasData, setCinemasData] = React.useState(data["Cinemas"].Data); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');

  // for Filter by cinemas
  const [listAllMoviesFilter, setListAllMoviesFilter] = React.useState(allMovies);
  // for search
  const [listAllMovies, setListAllMovies] = React.useState(listAllMoviesFilter)
  console.log("this is the world")
  console.log(listAllMovies)



  return (
    <SafeAreaView style={{ flex:0, backgroundColor: '#263238' }}>
      <ScrollView>
       <FormControl mt="3" >
       <DropDown 
       ChosenCinemaId={ChosenCinemaId} 
       setChosenCinemaId={setChosenCinemaId} 
       CinemasData={CinemasData} 
       orgAllMovies={allMovies}
       setListAllMoviesFilter={setListAllMoviesFilter}
       setListAllMovies={setListAllMovies}
       />
        {/* <Text style={styles.cinematext} >{ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text> */}
        </FormControl>
        <MovieSearch listAllMovies={listAllMovies} setListAllMovies={setListAllMovies} orgAllMovies={listAllMoviesFilter}/>
        <MovieList ChosenCinemaId={ChosenCinemaId} MovieInfo={listAllMovies} />
        </ScrollView>
    </SafeAreaView>

  );
};

export default Home;