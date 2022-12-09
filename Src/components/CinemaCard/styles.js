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
      marginTop: 10,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',



    },
    text: {
      color: 'white',
      fontSize: 16,
      fontStyle: 'italic',
      marginBottom: 10,



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
      borderWidth: 1,
      boarderColor: 'white',
      backgroundColor: '#263238',
      width:  180,
      height: 50,
      marginVertical: 10,
      marginHorizontal: 10,

    },
    buttons: {
      justifyContent: 'center',
      flex: 1,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    }

  });

export default styles;


