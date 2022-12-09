import React from 'react';
import { Rating } from 'react-native-ratings';
import { View, Image } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import styl from '../style';


const PlayVideo = ({routes}) => {
    const [playing, setPlaying] = React.useState(false);
    const togglePlaying = () => {
        setPlaying(!playing);
    };

    return (
     <YoutubePlayer
     height={250}
     width={400}
     play={playing}
     videoId={routes}/>
    )
 };

export default PlayVideo;