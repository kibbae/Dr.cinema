import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      marginHorizontal: 20,
      backgroundColor: '#37474F',
      flexDirection:'row',
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
    tinyLogo: {
      //position: 
      width: 156,
      height: 217,
      left: 0,
      top: 0,
      borderRadius: 5,
      
    },
    logo: {
      width: 66,
      height: 58,
    },
    moviename: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      position: 'absolute',
      width: 150,
      height: 100,
      left: 170,
      top: -180,

    },
    coming: {
      color: 'white',
      fontSize: 15,
      textAlign: 'left',
      position: 'absolute',
      left: 170,
      bottom: 20,

    }
  });

export default styles;


