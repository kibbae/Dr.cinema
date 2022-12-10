import { StyleSheet } from "react-native";

// for darkMode
// backgroundColor: "#101010",

export default StyleSheet.create({
    menuBar: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 5,
        height: "100%",
        justifyContent: 'space-around',
        backgroundColor: "#D9D9D9",
    },
    menuBarIcons: {
        flexDirection: 'column',
        alignItems: 'center',
    }, 
    cinematext: {
        color: 'white',
        fontWeight: 'bold',
    }, 
    inCinemaContainer: {
        justifyContent: 'center',
        marginHorizontal: 15,
        backgroundColor: '#263238',
        marginTop: 10,
        flexDirection: 'row',
    },
    inCinemaStart: {
        fontSize: 25,
        color: 'white',
    },
    incinema: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      },
});

