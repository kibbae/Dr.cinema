import { StyleSheet } from "react-native";

// for darkMode
// backgroundColor: "#101010",

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    searchContainer: {
        //flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
    },
    listItem: {
        fontStyle: 'Bold',
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#D9D9D9",
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 5
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
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
    }
});

