
import React from "react";


const Profil = ({fullName,bio,profession,children}) => {
 
    const handleClick = e => {
      e.preventDefault();
      alert(fullName);
    }

    return (
      <div>
    
          <h1> Welcome to my profile</h1>

          <h2> {fullName} </h2>

          <h3> A {profession}</h3>

          <p> {bio} motivated and dynamic,with a very good level of communication <br/>
          with a strong ability to adapt and manage stress </p>
          <div > {children} </div>  

          <a href="/" onClick={handleClick} style={{color:'aqua', fontWeight:'bold'}} >
          Click me
          </a>


      </div>

    );
};

export default Profil;