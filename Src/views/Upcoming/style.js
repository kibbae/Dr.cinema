import { StyleSheet } from "react-native";

// for darkMode
// backgroundColor: "#101010",

export default StyleSheet.create({
    container: {
        paddingTop: "20%",
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    imgSizer: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        borderWidth: 2,
        backgroundColor: "white",
    },
    textPadding: {
        paddingBottom: 20,
    },
    boxSmall: {
        marginBottom: 15,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 5,
        height: 50,
        width : "100%",
        borderRadius: 15,
        flexDirection: "row",
        backgroundColor: "#a9a9a9",
        justifyContent: "space-between",
    },        
    boxLarge: {
        marginBottom: 15,
        paddingLeft: 8,
        paddingTop: 5,
        height: 105,
        width : "100%",
        borderRadius: 15,
        backgroundColor: "#a9a9a9",
    },
    boxSmallCenter: {
        marginBottom: 15,
        paddingLeft: 8,
        justifyContent: "center",
        height: 50,
        width : "100%",
        borderRadius: 15,
        backgroundColor: "#a9a9a9",
    },
    redText: {
        color: "#E02D2D"
    },
});

