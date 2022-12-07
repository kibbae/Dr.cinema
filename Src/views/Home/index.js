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


const Home = ({ navigation: {navigate} }) => {
  const [CinemasData, setCinemasData] = React.useState(cinemasjason); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');

  // data = [this.state.contactsInfo]
  const [listAllMovies, setListAllMovies] = React.useState(allMovies);

  return (
    <View>
       <FormControl mt="3">
       <DropDown 
       ChosenCinemaId={ChosenCinemaId} 
       setChosenCinemaId={setChosenCinemaId} 
       CinemasData={CinemasData} 
       listAllMovies={allMovies}
       setListAllMovies={setListAllMovies}
       />
        <Text>{ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text>
        </FormControl>
        <Text>Home</Text>
        <MovieList ChosenCinemaId={ChosenCinemaId} MovieInfo={listAllMovies}/>
    </View>
  );
};

export default Home;
