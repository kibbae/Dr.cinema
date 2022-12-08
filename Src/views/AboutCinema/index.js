import React from "react";
import { View, Text, Heading, Center, NativeBaseProvider,Stack, Container, Image, Box } from "native-base";
import { SafeAreaView } from "react-native";




const AboutCinema = () => {
    return(
        <View backgroundColor={'#263238'} height='full' width='full'>
            <Center marginTop={'2/4'} >
                <Image size={'2xl'} source={require('../../resources/popi2.gif')} alt="Loading" />
            </Center>
            <Center >
            <Image size={'sm'} width='200' height='100' source={require('../../resources/loding.gif')} alt="Loading" />
            </Center>
        </View>

    )
};

export default AboutCinema;