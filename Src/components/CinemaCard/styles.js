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



    },
    text: {
      color: 'white',
      fontSize: 16,



    },
    phone: {
      color: 'white',
      fontSize: 16,


    },
    description : {
      color: 'white',


    },
    link: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: '#F6C700',
      width:  200,
      height: 50,
      marginVertical: 10,

    },
    buttons: {
      justifyContent: 'center',
      flex: 1,
    },

  });

export default styles;


