import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  Image,
  Center,
  Popover,
  Button,
  Input,
  FormControl,
  Box,
  NativeBaseProvider,
  Select,
  CheckIcon
} from "native-base";
import cinemas from "../../resources/cinemas.json";
// import DropDown from '../../components/DropDown';

const getSelectionFromData = (CinemaData) => {
  console.log(CinemaData);
  return CinemaData.map((cinema) => {
    return {
      label: cinema.name,
      value: cinema.id,
    };
  });
};

const DropDown = () => {
  const [data, setdata] = React.useState(cinemas); 
  const [service, setService] = React.useState("");
  console.log(getSelectionFromData(data));
  return <Center>
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
    </Center>;
};


const Home = ({ navigation: {navigate} }) => {

  return (
    <View>
       <FormControl mt="3">
       <DropDown/>
        <Text>Home</Text>
        </FormControl>
    </View>
  );
};

export default Home;
