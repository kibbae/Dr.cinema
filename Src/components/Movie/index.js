import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styl from "./style"

const DisplayAnImage = ({ MovieInfo }) => {
    console.log("MovieInfo mus check out!!")
    console.log(MovieInfo)
    const { navigate } = useNavigation();

  return (
    <View style={styl.container}>
    <TouchableOpacity onPress={() => navigate('AboutMovie', {info: MovieInfo})}>
    {/* The Poster Img */}
        <View>
            <Image style={styl.tinyLogo} source={{ uri: MovieInfo.poster, }} />
        </View>
    {/* The Movie Title and other info */}
        <View>
            <Text>{MovieInfo.title}</Text>
            <Text>{MovieInfo.year}</Text>
            <Text>{MovieInfo.genres[0].NameEN}</Text>
        </View>
    </TouchableOpacity>
    </View>
  );
}

export default DisplayAnImage;