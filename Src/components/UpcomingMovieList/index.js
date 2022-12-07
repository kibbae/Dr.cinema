import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";

import Movie from "../UpcomingMovie"

const MovieList = ({ MovieInfo,ChosenCinemaId }) => {
   // console.log(MovieInfo)
    //const strAscending = [...MovieInfo].sort((a, b) => a.name > b.name ? 1 : -1,);

    return (
        <SafeAreaView>
            <FlatList
                numColumns={1}
                data={MovieInfo}
                renderItem={({item}) => (
                    <Movie MovieInfo={item}/>
                )}
            />
        </SafeAreaView>
    );
};

export default MovieList;