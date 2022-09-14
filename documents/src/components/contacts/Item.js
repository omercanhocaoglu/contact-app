import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/ContactSlices';

function Item ( { item } ) {
  
  const dispatch = useDispatch();

  const HandleDelete = (id) => {

    
    if (window.confirm("Are You Sure?")) {  dispatch(deleteContact(id)) }
   
    

  };


  if (!item.name && item.phone_number) {return false}
  
  else if (item.name  === "") {return false}

  else if (item.phone_number  === "") {return false};

  

  


  
    return (
      
  <div>

  
 
    <ul className='container'>

      <li className='bg-danger text-light offset-sm-2 row col-sm-8 d-flex justify-content-center text-capitalize'>
       
        {`Name: ${item.name} -----`  }   {`Phone Number: ${item.phone_number}`  } 
        
        <span onClick={ () => HandleDelete(item.id) } className='bg-primary col-sm-1 ms-5' style={{cursor:"pointer"}}>x</span>
      
        </li>
    
    </ul>

  
  </div>
  )
};

export default Item;