import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  FormControl,
} from "native-base";
import { useSelector, useDispatch } from "react-redux"

import cinemasjason from "../../resources/cinemas.json";
import DropDown from "../../components/DropDown";
import MovieList from "../../components/MovieList";
import allMovies from "../../resources/movies.json";
import styles from "./styles";
import MovieSearch from "../../components/MovieSearch";
import LoadPage from "../LoadPage";
import { fetchMovies } from "../../DataSystem/Redux/store"



const Home = () => {
  const state = useSelector(state => state)
  const [data, setData] = useState(state)
  const [CinemasData, setCinemasData] = React.useState(data["Cinemas"].Data); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');

  // for Filter by cinemas
  const [listAllMoviesFilter, setListAllMoviesFilter] = React.useState(allMovies);
  // for search
  const [listAllMovies, setListAllMovies] = React.useState(listAllMoviesFilter)



  return (
    <SafeAreaView >
       <FormControl mt="3" >
       <DropDown 
       ChosenCinemaId={ChosenCinemaId} 
       setChosenCinemaId={setChosenCinemaId} 
       CinemasData={CinemasData} 
       orgAllMovies={allMovies}
       //awsome
       setListAllMoviesFilter={setListAllMoviesFilter}
       setListAllMovies={setListAllMovies}
       />
        <Text>{ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text>
        </FormControl>
        <MovieSearch listAllMovies={listAllMovies} setListAllMovies={setListAllMovies} orgAllMovies={listAllMoviesFilter}/>
        <Text styles={styles.conteiner} >Home</Text>
        <MovieList ChosenCinemaId={ChosenCinemaId} MovieInfo={listAllMovies} />
    </SafeAreaView>

  );
};

export default Home;