import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  FormControl,
} from "native-base";

import cinemasjason from "../../resources/cinemas.json";
import DropDown from "../../components/DropDown";
import MovieList from "../../components/MovieList";
import allMovies from "../../resources/movies.json";
import styles from "./styles";
import MovieSearch from "../../components/MovieSearch";



const Home = () => {
  console.log('Siggi this is working')
  const [CinemasData, setCinemasData] = React.useState(cinemasjason); 
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

export default Home