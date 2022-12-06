import React from "react";
import {
  View,
  Text,
} from "react-native";
import {
  FormControl,
} from "native-base";
import cinemasjason from "../../resources/cinemas.json";
import DropDown from "../../components/DropDown";

import MovieList from "../../components/MovieList";
import allMovies from "../../resources/movies.json";


const Upcoming = () => {
  const [CinemasData, setCinemasData] = React.useState(cinemasjason); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');
  console.log('id: ',ChosenCinemaId)
  return (
    <View>
       <FormControl mt="3">
       <DropDown ChosenCinemaId={ChosenCinemaId} setChosenCinemaId={setChosenCinemaId} CinemasData={CinemasData} />
        <Text>{ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text>
        </FormControl>
        <Text>Upcoming</Text>
        <MovieList ChosenCinemaId={ChosenCinemaId} MovieInfo={allMovies}/>
    </View>
  );
};

export default Upcoming;
