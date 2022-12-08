import React from "react";
import { View, Text, Button,Image , Spinner, HStack, Center, NativeBaseProvider } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import store from "../../DataSystem/Redux/store";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";



const LoadPage = () => {
    
    const AllDataLoaded = useSelector(state => state.AllDataLoaded);
    const allMovies = useSelector(state => state.fetchMovies);
    const { navigate } = useNavigation();

    const checkLoading = () => {
        console.log(allMovies)
        if (AllDataLoaded.loaded === true) 
        {
            //wait for half a second
            // wait for 1 milisecond

            setTimeout(() => {
                navigate("Home");
            }, 500);  
        }

    }

    //checkLoading();

    return (
        <View backgroundColor={'#263238'} height='full' width='full'>
            <Center marginTop={'2/4'} >
                <Image size={'2xl'} source={require('../../resources/popi2.gif')} alt="Loading" />
            </Center>
            <Center >
            <Image onPress={checkLoading()} size={'sm'} width='200' height='100' source={require('../../resources/loding.gif')} alt="Loading" />
            </Center>
        </View>
    )

        
    }

export default LoadPage