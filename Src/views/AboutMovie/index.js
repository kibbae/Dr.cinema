import React from "react";
import { View, Text, Image, } from "react-native";

import styl from "./style"


const AboutMovie = ({ route, navigation }) => {
    const { title, year, poster, genres, durationMinutes, omdb } = route.params.info

    if (genres.length > 1) {
        var theGenra = genres[0].NameEN + "/" + genres[1].NameEN
    } else {
        var theGenra = genres[0].NameEN
    }

  return (
    <View>
        <Image style={styl.tinyLogo} source={{ uri: poster, }} />
    {/* Title, Movie Info and rating */}
        <View>
        {/* The title senter */}
            <Text>{title}</Text>
        {/* In line text */}
            <View>
                <Text>{year}</Text>
                <Text>{theGenra}</Text>
                <Text>{durationMinutes}</Text>
            </View>
        {/* Star rating */}
            <View>
                <Text>{omdb[0].imdbRating}</Text>
            </View>
        </View>
    {/* Plot */}
        <View>
            <Text>{omdb[0].Plot}</Text>
        </View>
    </View>
  );
};

export default AboutMovie;
