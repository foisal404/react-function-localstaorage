import React, { useEffect, useState } from 'react';
import { displayAll } from '../../utilities/function';
import Person from '../person/Person';

const Contact = () => {
    //data load from local Json file
    const [contacts,setContacts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setContacts(data));
    },[])
    return (
        <div>
            <h1>hello load local data</h1>
            {/* {
                contacts.map(contact=> <Person contact={contact} key={contact.id}></Person>)
            } */}
            {
                displayAll(contacts)
            }
            <button onClick={()=>displayAll(contacts)}>load</button>
        </div>
    );
};

export default Contact;