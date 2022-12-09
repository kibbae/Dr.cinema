import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Button, Actionsheet, useDisclose, Center, NativeBaseProvider } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { Rating } from 'react-native-ratings';
import { Entypo } from '@expo/vector-icons';

import styl from "./style"
import CinemaTickets from "../../components/CinemaTickets"


const AboutMovie = ({ route, navigation }) => {
    const { title, year, poster, genres, durationMinutes, ratings, omdb, showtimes } = route.params.info
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
    var rating
    var plot
    const ChosenCId = route.params.ChosenCinemaId
    console.log("AboutMovie file check showtimes")
    console.log(showtimes)

    if (ratings.imdb === null) {
        var { plot } = route.params.info
        console.log(plot)
        rating = false
    } else {
        plot = omdb[0].Plot
        rating = ratings.imdb
    }

    if (genres.length > 1) {
        var theGenra = genres[0].NameEN + "/" + genres[1].NameEN
    } else {
        var theGenra = genres[0].NameEN
    }

    const IfTherIsRating = () => {
        return (
            <View style={styl.row}>
                <Rating
                    type='custom'
                    imageSize={20}
                    ratingColor={'#F6C700'}
                    tintColor={'rgba(21,21,21,1)'}
                    startingValue={rating/2}
                    readonly={true}
                    isDisabled={true}
                />
                <Image style={styl.IMDB} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png', }}/>
            </View>
        )
    }

	// var TicketsBox = [];

	// for(let i = 0; i < noGuest; i++){

	// 	payments.push(
	// 		<View key = {i}>
	// 			<View>
	// 				<TextInput />
	// 			</View>
	// 			<View>
	// 				<TextInput />
	// 			</View>
	// 			<View>
	// 				<TextInput />
	// 			</View>
	// 		</View>
	// 	)
	// }



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
                        <Entypo name="dot-single" size={18} color="white" />
                        <Text style={styl.MovieInfo}>{theGenra}</Text>
                        <Entypo name="dot-single" size={18} color="white" />
                        <Text style={styl.MovieInfo}>{durationMinutes}</Text>
                    </View>
                    <View style={styl.infoInRow}>
                    {rating === false ? <Text style={{color: "#F6C700", fontWeight: "bold"}}>Note This Movie Hase No Rating</Text> : <IfTherIsRating /> }
                    </View>
                    <Text style={[styl.MovieInfo, styl.plot]}>{plot}</Text>
                    <View style={styl.coverButton}>
                        <TouchableOpacity style={styl.GetTicketButton} onPress={onOpen}>
                            <Text>Get Ticket</Text>
                        </TouchableOpacity>
                        
                        <Actionsheet isOpen={isOpen} onClose={onClose}>
                            <Actionsheet.Content style={styl.GetTicketView}>
                                <View style={styl.containerListInfo}>
                                    <View style={styl.row}>
                                        <Text style={styl.ListInfoTitle}>Cinema Room = </Text>
                                        <Text style={[styl.ListInfoTitle, {color: "#F6C700"}]}>CR</Text>
                                    </View>
                                    <View style={styl.row}>
                                        <Text style={styl.ListInfoTitle}>Language = </Text>
                                        <Text style={[styl.ListInfoTitle, {color: "#F6C700"}]}>L</Text>
                                    </View>
                                </View>
                                <ScrollView style={{marginTop: 20, width: '100%'}}>
                                    {showtimes.map((showtime) => <CinemaTickets AllShowTimes={showtime} ChosenCId={ChosenCId}/> )}
                                </ScrollView>
                            </Actionsheet.Content>
                        </Actionsheet>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
    </View>
  );
};

export default AboutMovie;
