import React from "react";
import { View, Text, FlatList, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from '@expo/vector-icons';

import styl from "./style"

const MovieSearch = ({ listAllMovies, setListAllMovies, orgAllMovies }) => {
    // clear search input with calcel button 
    const [search, setSearch] = React.useState("");
    

    const handleSearch = (text) => {
        setSearch(text);
        const new_arr = orgAllMovies.filter((movie) => {
            text = text.toLowerCase();
            let contactName = movie.title.toLowerCase();
            return contactName.indexOf(text) > -1;
        });
        setListAllMovies(new_arr);
    }

    return (
        <View>
        {/* Search Bar */}
            <View style={styl.sectionStyle}>
            <MaterialIcons name="search" size={30} color="white" />
        {/* Search Input */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <TextInput
                style={{flex: 1}}
                onChangeText={(value) => handleSearch(value)}
                value={search}
                placeholder="Search..."
                placeholderTextColor={'#D0D0D0'}
                color={"white"}
                />
            </TouchableWithoutFeedback>
        {/* Cansel Search */}
            <TouchableOpacity onPress={() => {setSearch(""), setListAllMovies(orgAllMovies)}}>
                <Feather name="x-circle" size={24} color="white" />
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default MovieSearch;







