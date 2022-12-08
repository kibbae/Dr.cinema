import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";

import Movie from "../UpcomingMovie"

const UpcomingMovieList = ({ MovieInfo,ChosenCinemaId }) => {
   // console.log(MovieInfo)
    MovieInfo.sort((a,b) => a["release-dateIS"].localeCompare(b["release-dateIS"]))


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

export default UpcomingMovieList;