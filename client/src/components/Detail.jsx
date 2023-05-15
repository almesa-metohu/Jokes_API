import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [joke, setJoke] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/jokes/' + id)
            .then(res => setJoke(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
        </div>
    )
}

export default Detail;