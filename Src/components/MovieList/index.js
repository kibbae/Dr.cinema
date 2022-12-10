import React from "react";
import { View, Text, FlatList } from "react-native";

import Movie from "../Movie"

const MovieList = ({ MovieInfo,ChosenCinemaId }) => {
    //console.log(MovieInfo)
    //const strAscending = [...MovieInfo].sort((a, b) => a.name > b.name ? 1 : -1,);

    return (
            <FlatList
                numColumns={1}
                data={MovieInfo}
                renderItem={({item}) => (
                    <Movie MovieInfo={item} ChosenCinemaId={ChosenCinemaId}/>
                )}
                style={{marginTop: 10}}
            />
    );
};

export default MovieList;