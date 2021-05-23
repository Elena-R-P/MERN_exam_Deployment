import './App.css';
import AllPets from './components/AllPets';
import {Router} from '@reach/router';
import CreatePet from './components/CreatePet';
import Details from './components/Details';
import EditPet from './components/EditPet';


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Pet Shelter</h1>
        </div>
      </div>
      <div className="row">
        <Router>
          <AllPets path="/"></AllPets>
          <CreatePet path="/pets/create"></CreatePet>
          <Details path="/pets/:id"></Details>
          <EditPet path="/pets/update/:id"></EditPet>
        </Router>
      </div>
      
      
      
      
    </div>
  );
}

export default App;
