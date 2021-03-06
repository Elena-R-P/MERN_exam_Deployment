import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import styles from './Pet.module.css';

const AllPets = () => {
    const [allPets, setAllPets] = useState([]);
    const [likeClicked, setLikeClicked] = useState(0);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                console.log(res)
                setAllPets(res.data.results)
            })
            .catch(err=>console.log(err))
    }, [likeClicked]);

    const addLike = (e, pet) =>{
        setLikeClicked(likeClicked+1)
        pet.likes+=1
        axios.put(`http://localhost:8000/api/pets/update/${pet._id}`, pet)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div className={styles.container}>
            <div className="mb-3">
                <Link to="/pets/create" className={styles.link}>+ add a pet to the shelter</Link>
            </div>
            <div className="row">
                <h1>These pets are looking for a good home!</h1>
                <table className="table table-hover table-dark mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                            <th scope="col">Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPets.map((pet, idx) =>{
                                return <tr key={idx}>
                                    <th scope="row">{pet.petName}</th>
                                    <th scope="row">{pet.type}</th>
                                    <th scope="row">
                                        <Link to={`/pets/update/${pet._id}`} className="btn btn-warning">Edit</Link>
                                        <Link to={`/pets/${pet._id}`} className="btn btn-info ml-3">Details</Link>
                                    </th>
                                    <th scope="row" className={styles.likes}><button onClick={(e)=>addLike(e, pet)} className="btn btn-danger">Like</button> <img height="20px" width="20px" src="data:image/jpeg;base64,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"></img> {pet.likes}</th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            
        </div>
    );
};

export default AllPets;
