import React from "react";
import { View, Text, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import store from "../../DataSystem/Redux/store";
import { useNavigation } from "@react-navigation/native";



const LoadPage = () => {
    
    const AllDataLoaded = useSelector(state => state.AllDataLoaded);
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
        <View>
        <Text>LoadPage</Text>
        <Text>{AllDataLoaded.loaded}</Text>
        <Button title="Test" onPress={checkLoading()}/>
        </View>
    )

        
    }

export default LoadPage