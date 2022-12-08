import React from "react";
import { View, Text, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import store from "../../DataSystem/Redux/store";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";



const LoadPage = () => {
    
    const AllDataLoaded = useSelector(state => state.AllDataLoaded);
    const allMovies = useSelector(state => state.fetchMovies);
    const { navigate } = useNavigation();

    const checkLoading = () => {
        if (AllDataLoaded.loaded === true) 
        {
            //wait for half a second
            setTimeout(() => {
                navigate("Home");
            }, 500);  
        }

    }

    //checkLoading();

    return (
        <SafeAreaView>
        <Text>LoadPage</Text>
        <Text>{AllDataLoaded.loaded}</Text>
        <Button title="Test" onPress={checkLoading()}/>
        </SafeAreaView>
    )

        
    }

export default LoadPage