import {
    Center,
    Box,
    Select,
    CheckIcon
  } from "native-base";

const getSelectionFromData = (CinemaData) => {
    return CinemaData.map((item) => { 
      const Final = {
        id: item.id,
        name: item.name,
        address: item['address\t'] + ', ' + item.city,
        phone: item.phone,
        website: item.website,
        description: item.description,
        display_list_name: item.name + " | " + item.website.slice(4),
      };
      return Final;
    }
    );
  };

const DropDown = ({ChosenCinemaId,setChosenCinemaId,CinemasData}) => {
    return <Center>
        <Box maxW="300">
          <Select selectedValue={ChosenCinemaId} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue =>setChosenCinemaId(itemValue)}>
            {getSelectionFromData(CinemasData).map((item) => (
              <Select.Item label={item.display_list_name} value={item.id} />
            ))}
            <Select.Item label='All Cinemas' value='all' />
          </Select>
        </Box>
      </Center>;
  };

export default DropDown;