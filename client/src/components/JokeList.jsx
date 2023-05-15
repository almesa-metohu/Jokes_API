import React, { useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const JokeList = (props) => {

    const { removeFromDom, jokes, setJokes } = props;

    const deleteJoke = (jokeId) => {
        axios.delete('http://localhost:8000/api/jokes/' + jokeId)
            .then(res => removeFromDom(jokeId))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/jokes')
            .then((res) => setJokes(res.data.jokes))
            .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            {
                jokes.map((joke, index) => {
                    return (<div key={index}>
                        <Link to={`/joke/${joke._id}`}>Joke {index+1}</Link>&nbsp;|&nbsp; 
                        <Link to={`/jokes/edit/${joke._id}`}>Edit</Link>
                        &nbsp;&nbsp;&nbsp;<button onClick={(e) => {deleteJoke(joke._id)}}>Delete</button>
                    </div>)
                })
            }  
        </div>
    )
}

export default JokeList;