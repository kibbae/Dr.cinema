import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "../views/Home"
// import AboutCinema from "../views/AboutCinema"
import AboutMovie from "../views/AboutMovie"
// import Upcoming from "../views/Upcoming"

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}  />
            {/* <Stack.Screen name="AboutCinema" component={AboutCinema}  /> */}
            <Stack.Screen name="AboutMovie" component={AboutMovie}  />
            {/* <Stack.Screen name="Upcoming" component={Upcoming}  />  */}
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;