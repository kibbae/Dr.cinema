import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar, SafeAreaView, TouchableOpacity, Linking, ScrollView, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import YoutubePlayer from "react-native-youtube-iframe";

import styl from "./style";
import RatingMovies from "./components/rating";
import PlayVideo from "./components/playvideo";


const AboutUpcomingMovie = ({ route, navigation }) => {
    const { title, year, poster, genres, Runtime, ratings, omdb, trailers } = route.params.info
    const [playing, setPlaying] = React.useState(false);
    var rating
    var plot
    if (omdb === [] || omdb[0].imdbRating === "N/A" ) {

        var { plot } = route.params.info
        //console.log(plot)
        rating = false
    } else {
        plot = omdb[0].Plot
        rating = omdb[0].imdbRating
    }

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
                <View style={styl.screen}>
                    {/* <TouchableOpacity onPress={togglePlaying}> */}
                    {/* <Image style={styl.poster} source={{ uri: poster, }} /> */}
                    {/* </TouchableOpacity> */}
                    {trailers[0].results[0] === undefined ? <Image style={styl.poster} source={{ uri: poster, }} /> : <PlayVideo routes={trailers[0].results[0].key}/>  }
                    {/* <YoutubePlayer
                        height={250}
                        width={400}
                        play={playing}
                        videoId={route.params.info['trailers'][0].results[0].key}
                    /> */}
                    {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying}/> */}
                    {/* <Image style={styl.poster} source={{ uri: poster, }} /> */}
                    </View>
                    <Text style={styl.title}>{title}</Text>
                    <View style={styl.infoInRow}>
                        <Text style={styl.MovieInfo}>{year}</Text>
                        <Entypo name="dot-single" size={18} color="white" />
                        <Text style={styl.MovieInfo}>{theGenra}</Text>
                        <Entypo name="dot-single" size={18} color="white" />
                        <Text style={styl.MovieInfo}>{Runtime}</Text>
                    </View>
                    <View style={styl.infoInRow}>
                    {rating === false ? <Text style={{color: "#F6C700", fontWeight: "bold"}}>Note This Movie Hase No Rating</Text> : <RatingMovies rating={rating}  /> }
                    </View>
                    <Text style={[styl.MovieInfo, styl.plot]}>{plot}</Text>
                </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
    </View>
  );
};

export default AboutUpcomingMovie;

