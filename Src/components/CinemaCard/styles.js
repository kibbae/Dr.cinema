import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      margin: 10,
      backgroundColor: '#37474F',
      flexDirection:'row',
      borderRadius: 5,

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
      width: 170,
      height: 100,
      left: 170,
      top: -180,

    },
    genres: {
      color: 'white',
      fontSize: 15,
      textAlign: 'left',
      position: 'absolute',
      left: 170,
      bottom: 20,

    },
    year: {
      color: 'white',
      fontSize: 15,
      textAlign: 'left',
      position: 'absolute',
      left: 170,
      bottom: 40,

    },

  });

export default styles;


