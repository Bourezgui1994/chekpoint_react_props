
import './App.css';
import Profil from './profile/profilComponent.js';


function App() {
  return (
    <div className="App">
    
  
      <Profil fullName="Amal Bourezgui" bio="I'am 27 years old"
       profession="Developper web & UX/UI designer"> 

      <img src="./img.jpg" alt="imageProfile" style={{border: 'solid 2px aqua', width:250}}/> 

      </Profil>
      
    </div>
  );
}

export default App;
