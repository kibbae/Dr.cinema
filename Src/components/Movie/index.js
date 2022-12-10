import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styl from "./style"

const DisplayAnImage = ({ MovieInfo, ChosenCinemaId }) => {
    //console.log("MovieInfo mus check out!!")
    //console.log(MovieInfo)
    const { navigate } = useNavigation();


    if (MovieInfo.genres.length > 1) {
        var theGenra = MovieInfo.genres[0]['NameEN\t'] + " / " + MovieInfo.genres[1]['NameEN\t']
    } else {
        var theGenra = MovieInfo.genres[0]['NameEN\t']
    }

  return (
    <View style={styl.container}>
    <TouchableOpacity onPress={() => navigate('AboutMovie', {info: MovieInfo, ChosenCinemaId: ChosenCinemaId})}>
    {/* The Poster Img */}
        <View>
            <Image style={styl.tinyLogo} source={{ uri: MovieInfo.poster, }} />
        </View>
    {/* The Movie Title and other info */}
        <View>
            <Text style={styl.moviename}>{MovieInfo.title}</Text>
            <Text style={styl.genres}>{theGenra}</Text>
            <Text style={styl.year}>{MovieInfo.year}</Text>
            
        </View>
    </TouchableOpacity>
    </View>
  );
}

export default DisplayAnImage;