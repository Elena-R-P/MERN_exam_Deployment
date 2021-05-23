import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import {navigate} from '@reach/router';
import styles from './Pet.module.css';

const CreatePet = () => {
    const [formInfo, setFormInfo] = useState({
        petName:"",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
        likes: 0,
    })
    
    const [errors, setErrors] = useState({});
    
    const changeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pets/create", formInfo)
        .then(res=>{
            console.log(res)
            if(res.data.errors){
                setErrors(res.data.errors)
            } else {
                navigate("/")
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col">
                    <h1>Know a pet needing a home?</h1>
                </div>
                <div className="col">
                <Link to="/">Main Page</Link>
                </div>
            </div>
            <div className="row mt-3">
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="petName"/>
                                <p className="text-danger">{errors.petName? errors.petName.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="type"/>
                                <p className="text-danger">{errors.type? errors.type.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea onChange={changeHandler} type="textarea" className="form-control" name="description"/>
                                <p className="text-danger">{errors.description? errors.description.message: ""}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Skill 1 (Optional)</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="skill1"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Skill 2 (Optional)</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="skill2"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Skill 3 (Optional)</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="skill3"/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-end">
                        <button type="submit" className="btn btn-info">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default CreatePet;