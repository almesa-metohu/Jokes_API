import React, {useState} from "react";
import axios from "axios";

const JokeForm = (props) => {

    const { jokes, setJokes } = props
    const [ setup, setSetup ] = useState("");
    const [ punchline, setPunchline ] = useState("")

    const CreateJoke = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/api/jokes`, {
            setup,
            punchline
        })
        .then(res => setJokes([...jokes, res.data]))
    }

    return(
        <form onSubmit={ CreateJoke }>
            <h2>Jokes</h2><br/>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Setup</label>
                <div className="col-sm-7">
                    <input type="text" className="form-control" onChange={(e) => setSetup(e.target.value)}/>
                </div>
            </div><br/>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Punchline</label>
                <div className="col-sm-7">
                    <input type="text" className="form-control" onChange={(e) => setPunchline(e.target.value)}/>
                </div>
            </div><br/>
            <button type="submit">Create</button>
        </form>
    )
}

export default JokeForm;