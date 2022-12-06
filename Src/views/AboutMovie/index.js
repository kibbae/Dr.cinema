import React from "react";
import { View, Text, TextInput, Button, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

import customFonts from "../../styles/font"
import ContactsList from "../../components/ContactsList";
import styles from "./styles";
import simg from "../../resources/search.png"
import { Contacts } from "expo";
import { themeTools } from "native-base";
import data from "../../resources/data.json";



const Contact = ({ navigation: {navigate} }) => {
    // data = [this.state.contactsInfo]
    const [contacts, setContact] = useState(data.contacts);
    // clear search input with calcel button 
    const [search, setSearch] = useState("");
    
    // það þarf að refresha síðuna til að sýna allan listan aftur. 
    // þarf hjálp á morgun til að laga þetta.
    const handleSearch = (text) => {
        setSearch(text);
        const new_arr = data.contacts.filter((contact) => {
                text = text.toLowerCase();
                let contactName = contact.name.toLowerCase();
                return contactName.indexOf(text) > -1;
            });
        setContact(new_arr);
    }

    // find the hight of the screen
    const windowHeight = Dimensions.get('window').height;
    const customConHeight = (windowHeight/1.45)


    return (

        <View>
            <View style={styles.container}>
                
            {/* H1 Titel */}
                <Text style={customFonts.h1}>Contact</Text>

            {/* Search Bar */}
                <View style={styles.sectionStyle}>
                    <MaterialIcons name="search" size={30} color="black" />
                {/* Search Input */}
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <TextInput
                            style={{flex: 1}}
                            onChangeText={(value) => handleSearch(value)}
                            value={search}
                            placeholder="Search..."
                            placeholderTextColor={'black'}
                        />
                    </TouchableWithoutFeedback>
                {/* Cansel Search */}
                    <TouchableOpacity onPress={() => {setSearch(""), setContact(data.contacts)}}>
                        <Feather name="x-circle" size={24} color="black" />
                    </TouchableOpacity>
            {/* The line between search and contact */}
                </View>
                <View style={styles.searchContainer}></View>

            {/* Hear is the main view {list views} */}
                <View style={{height: customConHeight}}>
                    <ContactsList contactsInfo={contacts} />
                </View>
            </View>

        {/* Menu Bar */}
            <View style={styles.menuBar}>
                <TouchableOpacity style={styles.menuBarIcons}>
                    <Ionicons name="ios-star" size={30} color="black" />
                    <Text>Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBarIcons}>
                    <Ionicons name="person-circle" size={30} color="black" />
                    <Text>Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBarIcons} onPress={() => navigate('Addcontact')}>
                    <Ionicons name="add-circle" size={30} color="black" />
                    <Text>Add Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default Contact;