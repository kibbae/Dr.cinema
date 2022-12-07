import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styl from "./styles"





const UpcomingMovie = ({ MovieInfo }) => {
   // console.log(MovieInfo, 'movieInfo')
   // console.log(newdate)
    const date = new Date() 
    let newdate = date.getFullYear() +'-'+ parseInt(date.getMonth() +1) +'-'+ date.getDate()
    console.log(newdate, 'dagurinn í dag nýtt format')
    console.log(MovieInfo)
    console.log(MovieInfo["release-dateIS"] < newdate)
    const { navigate } = useNavigation();
    
    if (MovieInfo["release-dateIS"] < newdate) {
   // console.log(newdate, 'dagurinn í dag nýtt format')
    console.log(MovieInfo["release-dateIS"], 'dagur í mynd')
     console.log(MovieInfo["release-dateIS"] > date)
    console.log(MovieInfo.title, 'myndin er')
    console.log('-----------------') 


        return (
            <View style={styl.container}>
            <TouchableOpacity onPress={() => navigate('AboutMovie', {info: MovieInfo})}>
                {/* The Poster Img */}
                <View>
                    <Image style={styl.tinyLogo} source={{ uri: MovieInfo.poster, }} />
                </View>
            {/* The Movie Title and other info */}
                <View>
                    <Text>{MovieInfo.title}</Text>
                    <Text>Coming : {MovieInfo["release-dateIS"]}</Text>
                    <Text>{MovieInfo.genres[0].NameEN}</Text>
                </View>
            </TouchableOpacity>
            </View>
        );
        }
    } 

export default UpcomingMovie;