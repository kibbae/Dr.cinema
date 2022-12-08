import React from "react";
import { View, Text, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";




const Home = () => {


    const state = useSelector(state => state);
    const [data, setData] = useState(state);
    
    return (
        <View>
        <Text>{data.Auth.Data.token}</Text>
        <Button title="Test" onPress={console.log(data)}/>
        </View>
    )
}

export default Home