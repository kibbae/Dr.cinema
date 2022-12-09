import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#2B2B2B',
      height: 56,
      width: 109,
      borderRadius: 15,
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        width: "100%"
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#D0D0D0',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        color: '#D0D0D0',
        fontSize: 15,
        fontWeight: 'bold',
    },
  });

export default styles;


