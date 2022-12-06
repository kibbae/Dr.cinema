import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import styl from "./style"

const MovieList = ({ MovieInfo }) => {
    console.log(MovieInfo.title)
    console.log(MovieInfo.year)
    const img = MovieInfo.poster
    console.log(MovieInfo.poster)
    const stir = "https://kvikmyndir.is/images/poster/9650_500.jpg"

    return (
        <View>
            <Text>{MovieInfo.title}</Text>
            <Text>{MovieInfo.year}</Text>
            <Text>{img}</Text>
            <Image
                style={styl.imgSizer}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Image style={styl.imgSizer} source={{url : "https://reactnative.dev/img/tiny_logo.png",}}/>
            <Image source={MovieInfo.poster}/>
        </View>
    );
};

export default MovieList;