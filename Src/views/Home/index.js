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
} from "native-base";


const Home = ({ navigation: {navigate} }) => {

  return (
    <View>
       <FormControl mt="3">
        <Text>Home</Text>
        </FormControl>
    </View>
  );
};

export default Home;
