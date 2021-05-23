import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Pet.module.css';
import {Link} from '@reach/router';
import {navigate} from '@reach/router';

const Details = (props) => {
    const [details, setDetails] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res=>{
            console.log(res)
            setDetails(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])

    const adoptPetHandler = () =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
        .then(res=>{
            console.log("this will be deleted", res)
            navigate("/")
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col d-flex">
                    <h1>Details about:</h1>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                    <Link to="/">Main Page</Link>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <h1>{details.petName}</h1>
                    <hr/>
                    <h3>Type: {details.type}</h3>
                    <hr/>
                    <h3>Description: {details.description}</h3>
                    <hr/>
                    <h3>Skills:</h3>
                        <p>{details.skill1}</p>
                        <p>{details.skill2}</p>
                        <p>{details.skill3}</p>
                </div>
                <div>
                    <button onClick={adoptPetHandler} className="btn btn-danger">Adopt {details.petName}</button>
                </div>
                
            </div>
            
        </div>
    );
};


export default Details;