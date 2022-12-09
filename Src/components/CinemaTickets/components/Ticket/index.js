import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

import styl from "./style"

const Ticket = ({ scheduleInfo }) => {

    const splitTime = scheduleInfo.time.split("(")
    const movieTime = splitTime[0]
    var langage
    var room
    if ( splitTime[1].length > 3 ) {
        const splitTRoom = splitTime[1].split(" ")
        room = "(" + splitTRoom.slice(-1).pop()
        langage = "(" + splitTRoom[0].split('(').join("") + ")"
    } else {
        room = splitTime[1]
        langage = "(EN)"
    }

    return (
        <TouchableOpacity style={styl.container} onPress={() => console.log(Linking.openURL(scheduleInfo.purchase_url))}>
            <Text style={styl.title}>{movieTime}</Text>
            <View style={styl.bottom}>
                <View style={styl.row}>
                    <Text style={[styl.text, {color: "#F6C700"}]}>CR</Text>
                    <Text style={styl.text}>{room}</Text>
                </View>
                <View style={styl.row}>
                    <Text style={[styl.text, {color: "#F6C700"}]}>L</Text>
                    <Text style={styl.text}>{langage}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

};

export default Ticket;