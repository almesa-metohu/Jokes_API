import React, {useState} from "react";
import JokeForm from '../components/JokeForm';
import JokeList from '../components/JokeList';

const Main = () => {
    const [jokes, setJokes] =useState([])
    
    const removeFromDom = jokeId => {
        setJokes(jokes.filter(joke => joke._id != jokeId))
    }

    return(
        <div>
            <JokeForm jokes={jokes} setJokes={setJokes}/>
            <hr/>
            <JokeList jokes={jokes} setJokes={setJokes} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;