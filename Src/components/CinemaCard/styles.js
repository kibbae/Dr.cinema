import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  MainContainer: {
    margin: 10,
      alignItems: 'center',
      backgroundColor: '#37474F',
      borderRadius: 20,
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
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingLeft: 5,
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 10,
      textAlign: 'center',
    },
    phone: {
      color: 'white',
      fontSize: 16,
    },
    description : {
      color: 'white',
      paddingLeft: 5,
      paddingRight: 5,
      textAlign: 'center',
    },
    link: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth: 1,
      boarderColor: 'white',
      backgroundColor: '#263238',
      paddingLeft: 10,
      paddingRight: 10,
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


