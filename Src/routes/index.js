import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Contact from "../views/Contact"
import Addcontact from "../views/Addcontact"
import ViewContact from "../views/ViewContact"

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Contact">
            <Stack.Screen name="Contact" component={Contact}  />
            <Stack.Screen name="Addcontact" component={Addcontact}  />
            <Stack.Screen name="ViewContact" component={ViewContact}  />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;