import React from 'react';
import { addLocalStorage, removeLocalStorage } from '../../utilities/function';
import './Person.css'

const Person = (props) => {
    const {name,id,age,gender,balance}=props.contact;
    return (
        <div className='Person'>
            <h1>Name :{name}</h1>
            <p>id :{id}</p>
            <p>sallary {balance}</p>
            <p><small>Age :{age}</small>
            <small> {gender}</small></p>
            
            <button onClick={()=>addLocalStorage(id)}>add</button>
            <button onClick={()=>removeLocalStorage(id)}>remove</button>
        </div>
    );
};

export default Person;