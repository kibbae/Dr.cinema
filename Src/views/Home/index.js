import React from "react";
import {
  View,
  Text,
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


const Home = ({ navigation: {navigate} }) => {
  const [CinemasData, setCinemasData] = React.useState(cinemasjason); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');
  console.log('id: ',ChosenCinemaId)
  return (
    <View>
    <View>
       <FormControl mt="3">
       <DropDown ChosenCinemaId={ChosenCinemaId} setChosenCinemaId={setChosenCinemaId} CinemasData={CinemasData} />
        <Text>{ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text>
        </FormControl>
        <Text>Home</Text>
        <MovieList ChosenCinemaId={ChosenCinemaId} MovieInfo={allMovies}/>
    </View>
      <View style={styles.menuBar}>
                <TouchableOpacity style={styles.menuBarIcons} onPress={() => navigate('Home')}>
                    {/* <Ionicons name="person-circle" size={30} color="black" /> */}
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBarIcons} onPress={() => navigate('Upcoming')}>
                    {/* <Ionicons name="add-circle" size={30} color="black" /> */}
                    <Text>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBarIcons} onPress={() => navigate('')}>
                    {/* <Ionicons name="add-circle" size={30} color="black" /> */}
                    <Text>About </Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};

export default Home;
