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

const Addcontact = ({ navigation: {navigate} }) => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const state = useSelector((state) => state);
  const [image, setImage] = useState('');
=======
  // image value
  const [img, setImg] = useState('http://s3.amazonaws.com/37assets/svn/765-default-avatar.png');
  // name
>>>>>>> 3b21f1dffca3cedb8d3359e882a60fdc9257a50c
  const [name, setName] = useState(null);
  // full pohne number
  const [PhoneNumber, setPhone] = useState(null);
  // phone number validation
  const [Phonevalid, setPhonevalid] = useState(null);
<<<<<<< HEAD
  function cleardata() {
    dispatch({type: 'ADD_CONTACT_NEW_1', payload: {ImageNew: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}});
  }
  function createcontact() {
    console.log(state.Image);
    console.log(state.Phone);
    setImage(state.Image);
    setPhone(state.Phone);
    setPhonevalid(state.Phonevalid);
    // herna mundi send gogn i bakenda
    console.log('image', image ,'name',name,'email',Email,'Phone', Phone, 'Phonevalid', Phonevalid);
    cleardata();
    // restarta redux
    }
=======

  const phoneInput = useRef(null);
  

function addContact() {
    console.log("image:",img,"name:",name,"phone:",PhoneNumber,"phonevalid:",Phonevalid);
    navigate('Contact');
}


>>>>>>> 3b21f1dffca3cedb8d3359e882a60fdc9257a50c
  return (
    <View>
       <FormControl mt="3">
          <Contactimage Img={img}/>
        <FormControl mt="3" >
          <AddImage setImage={setImg} />
        </FormControl>
        </FormControl>
        <FormControl mt="3" w="310" alignSelf="center">
            <Input 
            size="xl" 
            placeholder="Name" 
            backgroundColor="#FFFFFF" 
            onChangeText={(text) => {
            setName(text)}}
            />
        </FormControl>
        <FormControl mt="3" alignSelf="center">
            <PhoneNumberInput phoneInput={phoneInput} setPhonevalid={setPhonevalid} setPhone={setPhone}/>
        </FormControl>
        <FormControl mt="3" w="auto" alignSelf="center">
        <Button.Group>
            <Button colorScheme="coolGray" variant="ghost"
                onPress={() => navigate('Contact')}>
                    Cancel
                  </Button>
<<<<<<< HEAD
              <Button onPress={() => 
              {setImage(state.Image);
    setPhone(state.Phone);
    setPhonevalid(state.Phonevalid);
    console.log('image', image ,'name',name,'email',Email,'Phone', Phone, 'Phonevalid', Phonevalid);
    }}>Create Contact</Button>
=======
              <Button onPress={() => addContact()}>Create Contact</Button>
>>>>>>> 3b21f1dffca3cedb8d3359e882a60fdc9257a50c
            </Button.Group>
        </FormControl>
    </View>
  );
};

export default Addcontact;
