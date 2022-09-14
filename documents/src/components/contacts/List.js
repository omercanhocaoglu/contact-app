import { useSelector } from 'react-redux';

import { contactSelector } from '../../redux/ContactSlices';

import Item from './Item';

function List() {
  
  const contacts = useSelector(contactSelector.selectAll);

  
  
  
return (

    
    
    <div>
       
        {contacts.map( (contact) => <Item key={contact.id} item={contact} /> )}
    
    </div>
  )
};

export default List;