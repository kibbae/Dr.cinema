import React, { useState } from "react";
import { View, Text, Heading, Center,HStack, NativeBaseProvider,Stack, Container, Image, Box, FormControl } from "native-base";
import { SafeAreaView } from "react-native";
import DropDown from "../../components/DropDown";
import { useSelector, useDispatch } from "react-redux"
import CinemaList from "../../components/CinemaList";
import styles from "./styles";


const AboutCinema = () => {
  const state = useSelector(state => state)
  const [data, setData] = useState(state)
  const [CinemasData1, setCinemasData1] = React.useState(data["Cinemas"].Data); 
  const [CinemasData2, setCinemasData2] = React.useState(data["Cinemas"].Data); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');
  const notFixallMovies = data['Movies']
  const allMovies = notFixallMovies.Data
  // if ChosenCinemaId is not all then filter the data by cinema id and display only cinema with that id

  // for Filter by cinemas
    const [listAllMoviesFilter, setListAllMoviesFilter] = React.useState(allMovies);
  // for search
    const [listAllMovies, setListAllMovies] = React.useState(listAllMoviesFilter)
    return(
      <NativeBaseProvider>
        <View safeArea style={styles.container}>
            <FormControl p={'12'}>
            <DropDown 
              ChosenCinemaId={ChosenCinemaId} 
              setChosenCinemaId={setChosenCinemaId} 
              CinemasData={CinemasData1} 
              orgAllMovies={allMovies}
              setListAllMoviesFilter={setListAllMoviesFilter}
              setListAllMovies={setListAllMovies}
              />
            </FormControl>
            <CinemaList CinemaInfo={CinemasData2} ChosenCinemaId={ChosenCinemaId} />
        </View>
      </NativeBaseProvider>
    )
};

export default AboutCinema;