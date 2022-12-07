import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar, SafeAreaView } from "react-native";
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
        <ImageBackground style={styl.backgroundImage} source={{ uri: poster, }} resizeMode="cover" blurRadius={1}> 
            <LinearGradient 
            colors={['rgba(21,21,21,0.55)', 'rgba(21,21,21,1)']} 
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.5 }}
            style={styl.background}>
                <SafeAreaView style={styl.mainContainer}>
                    <Image style={styl.poster} source={{ uri: poster, }}/>
                    <Text style={styl.title}>{title}</Text>
                    <View style={styl.infoInRow}>
                        <Text style={styl.MovieInfo}>{year}</Text>
                        <Text style={styl.MovieInfo}>{theGenra}</Text>
                        <Text style={styl.MovieInfo}>{durationMinutes}</Text>
                    </View>
                    <View>
                        <Text>{omdb[0].imdbRating}</Text>
                    </View>
                    <View>
                        <Text style={styl.MovieInfo}>{omdb[0].Plot}</Text>
                    </View> 
                </SafeAreaView>
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
