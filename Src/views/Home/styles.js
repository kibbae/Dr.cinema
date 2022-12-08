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
    }
});

