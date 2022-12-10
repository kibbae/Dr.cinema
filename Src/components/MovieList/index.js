import React from "react";
import { View, Text, FlatList } from "react-native";

import Movie from "../Movie"

const MovieList = ({ MovieInfo,ChosenCinemaId }) => {

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