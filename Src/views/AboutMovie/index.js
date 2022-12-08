import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styl from "./style"


const AboutMovie = ({ route, navigation }) => {
    const { title, year, poster, genres, durationMinutes, omdb } = route.params.info

    if (genres.length > 1) {
        var theGenra = genres[0].NameEN + "/" + genres[1].NameEN
    } else {
        var theGenra = genres[0].NameEN
    }

  return (
    <View style={styl.container}>
        <ImageBackground style={styl.backgroundImage} source={{ uri: poster, }} resizeMode="cover"> 
            <LinearGradient 
            colors={['rgba(21,21,21,0.55)', 'rgba(21,21,21,1)']} 
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.5 }}
            style={styl.background}>

            </LinearGradient>
        </ImageBackground>
    </View>
  );
};

export default AboutMovie;

// {/* <Image style={styl.tinyLogo} source={{ uri: poster, }} />
// {/* Title, Movie Info and rating */}
//     <View>
//     {/* The title senter */}
//         <Text>{title}</Text>
//     {/* In line text */}
//         <View>
//             <Text>{year}</Text>
//             <Text>{theGenra}</Text>
//             <Text>{durationMinutes}</Text>
//         </View>
//     {/* Star rating */}
//         <View>
//             <Text>{omdb[0].imdbRating}</Text>
//         </View>
//     </View>
// {/* Plot */}
//     <View>
//         <Text>{omdb[0].Plot}</Text>
//     </View> */}
