import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    height: '100%',
    marginHorizontal: 24,
    alignItems: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  poster: {
    width: 346,
    height: 374,
    borderRadius: 40,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 42,
  },
  infoInRow: {
    paddingTop: 19,
    flexDirection: 'row'
  },
  MovieInfo: {
    fontSize: 15,
    color: '#B3B3B3',

  },
});

export default styles;