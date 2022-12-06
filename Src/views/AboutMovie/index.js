import React from "react";
import { View, Text, Image, } from "react-native";

import styl from "./style"


const AboutMovie = ({ route, navigation }) => {
    const { title, year, poster, genres, durationMinutes, omdb } = route.params.info
    console.log("siggi var her")
    console.log(title)
    console.log(year)
    console.log(genres[1])
    console.log(durationMinutes)
    console.log(omdb[0].imdbRating)
    console.log(omdb[0].Plot)
    if (genres.length > 1) {
        var theGenra = genres[0].NameEN + "/" + genres[1].NameEN
    } else {
        var theGenra = genres[0].NameEN
    }
    console.log(theGenra)

  return (
    <View>
        <Image style={styl.tinyLogo} source={{ uri: poster, }} />
        <Text>{title}</Text>
        <View>
            <Text>{year}</Text>
            <Text>{theGenra}</Text>
            <Text>{durationMinutes}</Text>
        </View>
        <View>
            <Text>{omdb[0].imdbRating}</Text>
        </View>
        <View>
            <Text>{omdb[0].Plot}</Text>
        </View>
    </View>
  );
};

export default AboutMovie;
