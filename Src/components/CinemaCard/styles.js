import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      margin: 10,
      backgroundColor: '#37474F',
      flexDirection:'row',
      borderRadius: 5,

    },
    tinyLogo: {
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
      left: 170,
      top: -180,

    },
    text: {
      color: 'white',
      fontSize: 16,
      width: 170,
      top: -155,
      left: 170,


    },
    phone: {
      color: 'white',
      fontSize: 16,
      width: 170,
      top: -152,
      left: 170,

    },
    description : {
      color: 'white',
      fontSize: 16,
      top: -60,

    },
    link: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: '#F6C700',
      width: 300,
      height: 50,
      top: -50,
      left: 50,
    },


  });

export default styles;


