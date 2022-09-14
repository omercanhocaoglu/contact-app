import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from "react-redux";

import { addContact,contactSelector, deleteAllContact } from "../../redux/ContactSlices";

import { nanoid } from "@reduxjs/toolkit";

function Form() {
  
  const [name, setName] = useState("");

  const [number, setNumber] = useState();

  const dispatch = useDispatch();

  const total = useSelector(contactSelector.selectTotal)

  const HandeSubmit = (event) => {

    event.preventDefault();

    dispatch( addContact( { id:nanoid() , name, phone_number: number } ) );

    setName("");

    setNumber("");

    if (!name && !number) {return false};

    
  };

  const AllContactDeleted = () => {
    
    if (window.confirm("Are You Sure?")) { dispatch( deleteAllContact() ) }; 
};

 
 
  
    return (
    
    
    <div className="container mb-2 mt-5">

      <div className="bg-info row col-sm-8 justify-content-center offset-sm-2">

        <h1> Contacts({total}) </h1>

        <form onSubmit={HandeSubmit}>
             <input className="rounded-pill" placeholder="Name" value={name} onChange={ (event) => setName(event.target.value)  } />

             <input className="ms-md-1 rounded-pill" placeholder="Phone Number" value={number} onChange={ (event) => setNumber(event.target.value)  } /> <br/>

             <button className="btn mt-2 btn-dark rounded-pill mb-2" type="submit">Add</button>

             
        </form>

        <button onClick={ () => AllContactDeleted() } className="col-3 col-md-3 col-lg-2 btn mt-2 btn-dark rounded-pill ms-1 mb-2">Clear all</button>
        
      </div>
    
    </div>
  )
};

export default Form;