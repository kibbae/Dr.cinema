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

  console.log("AboutCinema file checking data from data[Cinemas].Data")
  const allCinemas = data["Cinemas"].Data
  
  const [dummy, setDummy] = React.useState(null)
  const [CinemasData, setCinemasData] = React.useState(allCinemas); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');
  // if ChosenCinemaId is not all then filter the data by cinema id and display only cinema with that id

  // for Filter by cinemas


    return(
      <NativeBaseProvider>
        <View safeArea style={styles.container}>
            <FormControl p={'12'}>
            <DropDown 
              ChosenCinemaId={ChosenCinemaId} 
              setChosenCinemaId={setChosenCinemaId} 
              CinemasData={allCinemas} 
              orgAllMovies={allCinemas}
              setListAllMoviesFilter={setDummy}
              setListAllMovies={setCinemasData}
              fromToWhere={"Cinema"}
              />
            </FormControl>
            <CinemaList CinemaInfo={CinemasData} ChosenCinemaId={ChosenCinemaId} />
        </View>
      </NativeBaseProvider>
    )
};

export default AboutCinema;