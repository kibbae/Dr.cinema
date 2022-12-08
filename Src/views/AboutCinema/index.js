import React, { useState } from "react";
import { View, Text, Heading, Center,HStack, NativeBaseProvider,Stack, Container, Image, Box, FormControl } from "native-base";
import { SafeAreaView } from "react-native";
import DropDown from "../../components/DropDown";
import { useSelector, useDispatch } from "react-redux"
import CinemaList from "../../components/CinemaList";

const Card = () => {
    return <Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Box>
            <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
               About Smarabio
              </Heading>
              <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                Adress: 
              </Text>
              <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                Phoen Number: 
              </Text>
              <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                website: 
              </Text>
            </Stack>
            <Heading size="md" ml="-1">
            Description
              </Heading>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's high-tech
              industry. The city is also known for its parks and nightlife.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>;
  };
{/* <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'left'}} >Address: {ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text> */}

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
        <NativeBaseProvider >
        <View safeArea>
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
            <FormControl>
            <CinemaList CinemaInfo={CinemasData2} ChosenCinemaId={ChosenCinemaId} />
            </FormControl>

            
        </View>
          </NativeBaseProvider>
    )
};

export default AboutCinema;