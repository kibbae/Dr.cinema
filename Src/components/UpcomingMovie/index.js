import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styl from "./styles"





const UpcomingMovie = ({ MovieInfo }) => {
    const { navigate } = useNavigation();
    


        return (
            <View style={styl.container}>
            <TouchableOpacity onPress={() => navigate('AboutUpcomingMovie', {info: MovieInfo})}>
                {/* The Poster Img */}
                <View>
                    <Image style={styl.tinyLogo} source={{ uri: MovieInfo.poster, }} />
                </View>
            {/* The Movie Title and other info */}
                <View>
                    <Text style={styl.moviename}>{MovieInfo.title}</Text>
                    <Text style={styl.coming} >Coming: {MovieInfo["release-dateIS"]}</Text>
                </View>
            </TouchableOpacity>
            </View>
        );
        }


export default UpcomingMovie;