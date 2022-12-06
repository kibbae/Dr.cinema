import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../views/Home"
import Upcoming from "../views/Upcoming"
import AboutCinema from "../views/AboutCinema"
import AboutMovie from "../views/AboutMovie"

const homeName = "Home";
const UpcomingName = "Upcoming";
const AboutCinemaName = "AboutCinema";
const AboutMovieName = "AboutMovie";

const Stack = createStackNavigator();
const Routes = () => (
    <Tab.Navigator
      initialRouteName={homeName}
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name={homeName}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={UpcomingName}
        component={Upcoming}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AboutCinemaName"
        component={AboutCinema}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="AboutMovie" component={AboutMovie} />
    </Tab.Navigator>
  );

export default Routes;