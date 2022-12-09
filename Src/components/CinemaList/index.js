import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";

import Cinema from "../CinemaCard";

const getSelectionFromData = (CinemaData,ChosenCinemaId) => {
    // if ChosenCinemaId is not "all" then filter the data by cinema id and display only cinema with that id

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

const CinemaList = ({ CinemaInfo,ChosenCinemaId }) => {
    //console.log('CinemaInfo',ChosenCinemaId)
    // if ChosenCinemaId is not "all" then filter the data by cinema id and display only cinema with that id
    const [filterdata, setFilterData] = React.useState(getSelectionFromData(CinemaInfo));
    //console.log('filterd',filterdata)


    return (
        <SafeAreaView>
            <FlatList
                numColumns={1}
                data={filterdata}
                renderItem={({item}) => (
                    <Cinema CinemaInfo={item}/>
                )}
            />
        </SafeAreaView>
    );
};

export default CinemaList;