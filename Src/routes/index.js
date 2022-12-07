import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from "../views/Home"
import AboutMovie from "../views/AboutMovie"

const Tap = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
       <HomeStack.Screen name="Home" component={Home} options={{headerShown: false,}}/> 
       <HomeStack.Screen name="AboutMovie" component={AboutMovie} options={{headerShown: false,}}/>            
      </HomeStack.Navigator>
     );
   }

const Taps = () => {
    return(
        <Tap.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName
                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
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
            <Tap.Screen name="Home" component={HomeStackScreen} />
        </Tap.Navigator>
    );
};

export default Taps;