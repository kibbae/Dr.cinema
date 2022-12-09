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
  const state = useSelector(state => state)
  const [data, setData] = useState(state)
  const notFixallMovies = data['Movies']
  const allMovies = notFixallMovies.Data
  const [CinemasData, setCinemasData] = React.useState(data["Cinemas"].Data); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');
  const [listAllMoviesFilter, setListAllMoviesFilter] = React.useState(allMovies);
  const [listAllMovies, setListAllMovies] = React.useState(listAllMoviesFilter)


  return (
    <SafeAreaView style={{ flex:1, backgroundColor: '#263238', marginBottom:64 }}>
      
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
    </SafeAreaView>

  );
};

export default Home;