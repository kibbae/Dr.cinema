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


const Home = ({ navigation: {navigate} }) => {
  const [CinemasData, setCinemasData] = React.useState(cinemasjason); 
  const [ChosenCinemaId, setChosenCinemaId] = React.useState('all');
  console.log('id: ',ChosenCinemaId)
  return (
    <View>
       <FormControl mt="3">
       <DropDown ChosenCinemaId={ChosenCinemaId} setChosenCinemaId={setChosenCinemaId} CinemasData={CinemasData} />
        <Text>{ChosenCinemaId === 'all' ? CinemasData.map((item) => ' - ' + item.name) : CinemasData.find((item) => item.id === ChosenCinemaId).name}</Text>
        </FormControl>
    </View>
  );
};

export default Home;
