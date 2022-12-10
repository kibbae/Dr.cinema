import {
    Center,
    Box,
    Select,
    CheckIcon
  } from "native-base";

import Cinema from "./components/Cinema"
import Movie from "./components/Movie"



const getSelectionFromData = (CinemaData) => {
    CinemaData.sort((a,b) => a.name.localeCompare(b.name))
    return CinemaData.map((item) => { 
      const Final = {
        id: item.id,
        name: item.name,
        address: item['address\t'] + ', ' + item.city,
        phone: item.phone,
        website: item.website,
        description: item.description,
        display_list_name: item.name + " | " + item.website,
      };
      return Final;
    }
    );
  };

const DropDown = ({ ChosenCinemaId, setChosenCinemaId, CinemasData, orgAllMovies, setListAllMoviesFilter, setListAllMovies, fromToWhere }) => {
  // það þarf að refresha síðuna til að sýna allan listan aftur. 
  // þarf hjálp á morgun til að laga þetta.
  const filterByCinemaID = (cinemaID) => {
    if (fromToWhere === "Movie") {
      Movie(cinemaID, orgAllMovies, setListAllMoviesFilter, setListAllMovies)
    } else if (fromToWhere === "Cinema") {
      Cinema(cinemaID, orgAllMovies, setListAllMoviesFilter, setListAllMovies)
    }
  }

  
    return <Center style={{height: 55}}>
        <Box maxW="300" >
          <Select selectedValue={ChosenCinemaId} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={(itemValue) => {setChosenCinemaId(itemValue), filterByCinemaID(itemValue)}} style={{color: 'white'}}>
            {getSelectionFromData(CinemasData).map((item) => (
              <Select.Item label={item.display_list_name} value={item.id} key={item.id} />
            ))}
            <Select.Item label='All Cinemas' value='all'/>
          </Select>
        </Box>
      </Center>;
  };

export default DropDown;