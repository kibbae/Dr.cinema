import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

import Movie from "../Movie"

const CinemaTickets = ({ AllShowTimes, ChosenCId }) => {
    console.log("CinemaTickets file checking data from AllShowTimes")
    console.log(AllShowTimes.cinema.id)
    console.log(ChosenCId)

    const flatListShowTimes = () => {
        return (
            <ScrollView horizontal={true}>
                <Text style={{color: 'red'}}>{AllShowTimes.cinema.name}</Text>
                {AllShowTimes.schedule.map((scheduleInfo) => <Text>{scheduleInfo.time}</Text>)}
                
            </ScrollView>
        )
    }

    if (ChosenCId === "all") {
        console.log("in the all show times")
        return (flatListShowTimes())
    } else if (ChosenCId === AllShowTimes.cinema.id) {
        return (flatListShowTimes())
    } 

};

export default CinemaTickets;