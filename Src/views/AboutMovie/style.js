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
    paddingTop: 25,
  },
  infoInRow: {
    paddingTop: 10,
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row'
  },
  IMDB: {
    marginLeft: 5,
    height: 20,
    width: 45.33,
  },
  MovieInfo: {
    fontSize: 15,
    color: '#B3B3B3',
  },
  TheDot: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  plot: {
    paddingTop: 30,
    textAlign: 'center',
  },
  coverButton: {
    position: 'absolute',
    alignItems: 'center',
    paddingTop: 40,
    top: '90%',
    height: '100%',
    width: '100%',
  },
  GetTicketButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#F6C700',
    width: 200,
    height: 50,
  },
  GetTicketView: {
    alignItems: "flex-start", 
    backgroundColor: '#151515',
  },
  containerListInfo: {
    flexDirection: 'row',
    justifyContent:'space-around',
    width: '100%',
  },
  ListInfoTitle: {
    color: '#D0D0D0',
    fontSize: 20,
    fontWeight: 'bold',
},
});

export default styles;