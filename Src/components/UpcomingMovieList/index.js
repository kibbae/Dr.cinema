import React from "react";
import { View, Text, FlatList } from "react-native";

import Movie from "../UpcomingMovie"

const UpcomingMovieList = ({ MovieInfo,ChosenCinemaId }) => {
   // console.log(MovieInfo)
    MovieInfo.sort((a,b) => a["release-dateIS"].localeCompare(b["release-dateIS"]))


    return (
        <View>
            <FlatList
                numColumns={1}
                data={MovieInfo}
                renderItem={({item}) => (
                    <Movie MovieInfo={item}/>
                )}
            />
        </View>
    );
};

export default UpcomingMovieList;