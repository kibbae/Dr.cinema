import React from 'react';
import { Rating } from 'react-native-ratings';
import { View, Image } from "react-native";

import styl from '../style';


const RatingMovies = ({ rating }) => {

    return (
        <View style={styl.row}>
            <Rating
                type='custom'
                imageSize={20}
                ratingColor={'#F6C700'}
                tintColor={'rgba(21,21,21,1)'}
                startingValue={rating}
                readonly={true}
                isDisabled={true}
            />
            <Image style={styl.IMDB} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png', }}/>
        </View>
    )
}

export default RatingMovies;