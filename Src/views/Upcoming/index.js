import React from "react";
import { View, Text, TextInput, Button, Image, Icon, TouchableOpacity } from "react-native";
import call from 'react-native-phone-call'
import { Ionicons } from '@expo/vector-icons'; 

import ContactNoImg from "../../components/ContactNoImg/index";
import customFont from "../../styles/font"
import styl from "./style"


const ViewContact = ({ route, navigation }) => {
    const { img, name, phoneNumber } = route.params.contact
    if (typeof phoneNumber === 'string') {
        console.log("it is a string")
    } else {
        console.log("it not a string")
    }

    //When exicuted this function will call the phone number
    const triggerCall = () => {

        const args = {
            number: phoneNumber,
            prompt: true,
            skipCanOpen: true
        };
        // make call
        call(args).catch(console.error)
    };

    return (
        <View style={styl.container}>
        {/* Photo */}
            <View>
                {img === null ? <ContactNoImg name={name} size={"large"}/> : <Image style={styl.imgSizer} source={{url: img}}/>}
            </View>
        {/* Text */}
            <View>
                <TextInput style={[ customFont.titelName, styl.textPadding ]} value={name} />
            </View>
        {/* Call Phone number function */}
            <TouchableOpacity style={styl.boxSmall} onPress={triggerCall}>
                <View>
                    <Text style={customFont.extraInfo}>Phone</Text>
                    <TextInput style={customFont.displayName} value={phoneNumber} />
                </View>
                <Ionicons name="call" size={35} color="black" />
            </TouchableOpacity>
        {/* Add to favorites */}
            <TouchableOpacity style={styl.boxSmallCenter}>
                <Text style={customFont.displayName}>Add To Favorites</Text>
            </TouchableOpacity>
        {/* Note for dysplaying information about contact */}
            <View style={styl.boxLarge}>
                <TextInput style={customFont.extraInfo} placeholder='Note' />
                
            </View>
        {/* Delete Contact */}
            <TouchableOpacity style={styl.boxSmallCenter}>
                <Text style={[ customFont.displayName, styl.redText ]}>Delete Contact</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ViewContact;