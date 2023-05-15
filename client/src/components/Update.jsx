import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {

    const { id } = useParams()

    const [setup, setSetup] = useState()
    const [punchline, setPunchline] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/jokes/' + id)
            .then(res => {
                setSetup(res.data.setup)
                setPunchline(res.data.punchline)
            })
            .catch(err => console.log(err))
    }, [])

    const UpdateJoke = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/jokes/' + id, {
            setup,
            punchline
        })
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a joke</h1>
            <form onSubmit={ UpdateJoke }>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Setup</label>
                    <div className="col-sm-7">
                        <input type="text" className="form-control" value={setup} onChange={(e) => setSetup(e.target.value)}/>
                    </div>
                </div><br/>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Punchline</label>
                    <div className="col-sm-7">
                        <input type="text" className="form-control" value={punchline} onChange={(e) => setPunchline(e.target.value)}/>
                    </div>
                </div><br/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Update;