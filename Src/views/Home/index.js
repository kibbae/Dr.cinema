import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesreducer } from "../../DataSystem/ReduxStates/slices/MovieSlice";
import {SetupData} from "../../DataSystem/ReduxStates/SetupData";



const Home = () => {


    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => dispatch(getMoviesreducer(token))}>Get Movies</button>
        </div>
    )
}

export default Home