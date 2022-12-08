import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import LoadPage from "../views/LoadPage"
import Home from "../views/Home"
import AboutMovie from "../views/AboutMovie"
import Upcoming from "../views/Upcoming"
import AboutUpcomingMovie from "../views/AboutUpcomingMovie"


const Tap = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
       <HomeStack.Screen name="Home" component={Home} options={{headerShown: false,}}/> 
       <HomeStack.Screen name="AboutMovie" component={AboutMovie} options={{headerShown: false,}}/>       
       <HomeStack.Screen name="AboutUpcomingMovie" component={AboutUpcomingMovie} options={{headerShown: false,}}/>            
      </HomeStack.Navigator>
     );
   }


const Taps = () => {
    return(
        <Tap.Navigator 
            initialRouteName="LoadPage"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName
                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Upcoming') {
                        iconName = focused ? 'exclamationcircle' : 'exclamationcircleo';
                    }
                    return <Ionicons name={iconName} size={24} color="white" />
                },
            headerShown: false,
            tabBarStyle: {
                height: 64,
                paddingHorizontal: 0,
                paddingTop: 12,
                backgroundColor: 'rgba(34,36,40,1)',
                position: 'absolute',
                borderTopWidth: 0,
            },
            tabBarShowLabel: false
          })
        }>
            <Tap.Screen name="LoadPage" component={LoadPage} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible:false //hide tab bar on this screen
                }}
            />
            <Tap.Screen name="Home" component={HomeStackScreen} />
            <Tap.Screen name="Upcoming" component={Upcoming}  /> 
        </Tap.Navigator>
    );
};


export default Taps;