import React from 'react';
import { View, Image, Text, TouchableOpacity,Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import call from 'react-native-phone-call'
import styl from "./styles"





const Cinema = ({ CinemaInfo }) => {

    const triggerCall = () => {

        const args = {
            number: CinemaInfo.phone,
            prompt: true,
            skipCanOpen: true
        };
        // make call
        call(args).catch(console.error)
    };

    return (
            <View style={styl.container}>
    <TouchableOpacity>
        <View>
            <Text style={styl.moviename}>{CinemaInfo.name}</Text>
            <Text style={styl.text}>Adress: {CinemaInfo.address}</Text>
            <Text style={styl.description}>{CinemaInfo.description === null ? null : CinemaInfo.description.replace(/\\t/g, ' ').replace(/<br>/g, "\n").replace(/<b>/g, "") }</Text>
            <View style={{marginLeft: 'auto', marginRight: 'auto'}} >

            {CinemaInfo.phone === null ? null : <TouchableOpacity style={styl.link} onPress={triggerCall}>
            <Text  > {CinemaInfo.phone}</Text></TouchableOpacity>}

            <TouchableOpacity style={styl.link}>
            <Text  onPress={() => console.log(Linking.openURL('http://'+CinemaInfo.website))}>{CinemaInfo.website}</Text>
            </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
    </View>
        )
        };

export default Cinema;