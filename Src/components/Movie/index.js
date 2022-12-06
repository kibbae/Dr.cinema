
import React from 'react';
import { View, Image, Text } from 'react-native';

import styl from "./style"

const DisplayAnImage = ({ MovieInfo }) => {

  return (
    <View style={styl.container}>
    <Image
        style={styl.tinyLogo}
        source={{ uri: MovieInfo.poster, }}
    />
    <Text>{MovieInfo.title}</Text>
    <Text>{MovieInfo.year}</Text>
    <Text>{MovieInfo.genres[0].NameEN}</Text>
    </View>
  );
}

export default DisplayAnImage;