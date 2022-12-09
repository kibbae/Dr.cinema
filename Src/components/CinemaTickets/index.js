import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

import Ticket from "./components/Ticket";
import styl from "./style"

const CinemaTickets = ({ AllShowTimes, ChosenCId }) => {

    const flatListShowTimes = () => {
        return (
            <View>
                <Text style={styl.title}>{AllShowTimes.cinema.name}</Text>
                <ScrollView horizontal={true}>
                    {AllShowTimes.schedule.map((scheduleInfo) => <Ticket scheduleInfo={scheduleInfo}/>)}
                </ScrollView>
            </View>
        )
    }

    if (ChosenCId === "all") {
        return (flatListShowTimes())
    } else if (ChosenCId === AllShowTimes.cinema.id) {
        return (flatListShowTimes())
    } 

};

export default CinemaTickets;