import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import {navigate} from '@reach/router';
import styles from './Pet.module.css';

const EditPet = (props) => {
    const [formInfo, setFormInfo] = useState({
        petName:"",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
        likes: 0,
    })
    
    const [errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>{
                console.log(res)
                setFormInfo(res.data.results)
            })
            .catch(err=>console.log(err))
    }, [])

    const updateInfo = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, formInfo)
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

    const changeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col">
                    <h1>Update information about {formInfo.petName}</h1>
                </div>
                <div className="col">
                    <Link to="/">Main Page</Link>
                </div>
            </div>
            <div className="row">
                <form onSubmit={updateInfo}>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="petName" value={formInfo.petName}/>
                                <p className="text-danger">{errors.petName? errors.petName.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="type" value={formInfo.type}/>
                                <p className="text-danger">{errors.type? errors.type.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea onChange={changeHandler} type="textarea" className="form-control" name="description" value={formInfo.description}/>
                                <p className="text-danger">{errors.description? errors.description.message: ""}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Skill 1 (Optional)</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="skill1" value={formInfo.skill1}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Skill 2 (Optional)</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="skill2" value={formInfo.skill2}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Skill 3 (Optional)</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="skill3" value={formInfo.skill3}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <button type="submit">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPet;