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
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "../../views/Contact/styles";
import AddImage from "../../components/AddImage";
import Contactimage from "../../components/ContactImage";
import {useSelector, useDispatch} from "react-redux";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import { parsePhoneNumber } from 'react-phone-number-input'

const Home = ({ navigation: {navigate} }) => {

  return (
    <View>
       <FormControl mt="3">

        </FormControl>
    </View>
  );
};

export default Home;
