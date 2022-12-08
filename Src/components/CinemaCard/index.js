import React from 'react';
import { View, Image, Text, TouchableOpacity,Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styl from "./styles"





const Cinema = ({ CinemaInfo }) => {
    // remvoe \t from description and replace with space and remove <br> from description and replace with new line and if description is empty then set it to "No description available"
    // CinemaInfo.description = CinemaInfo.description.replace(/\\t/g, ' ').replace(/<br>/g, '{"\n"}');
    // remove <b> from description make it bold and replace with new line

    // cinemaInfo.description = cinemaInfo.description.replace(/<b>/g
    return (
            <View style={styl.container}>
    <TouchableOpacity>
    {/* The Poster Img */}
        <View>
            <Image style={styl.tinyLogo} source={{uri:"https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg"}} />
            
        </View>
    {/* The Movie Title and other info */}
        <View>
            <Text style={styl.moviename}>{CinemaInfo.name}</Text>
            <Text>Full Adress: {CinemaInfo.address}</Text>
            <Text>Phone Number: {CinemaInfo.phone}</Text>
            <Text>Website:</Text>
            <Text style={{color: 'blue'}} onPress={() => console.log(Linking.openURL('http://'+CinemaInfo.website))}>{CinemaInfo.website}</Text>
            <Text>Website: {CinemaInfo.website}</Text>
            <Text>Description:</Text>
            <Text>{CinemaInfo.description === null ? 'No description available' : CinemaInfo.description.replace(/\\t/g, ' ').replace(/<br>/g, "\n").replace(/<b>/g, "") }</Text>
        </View>
    </TouchableOpacity>
    </View>
        )
        };

export default Cinema;