import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import * as ACTIONS from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {  

    constructor(props){
        super(props);

        console.log(props);
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }             
        this.props.addPerson(newPerson);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.removePerson(person.id)}/>
                ))}
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        persons: state.persons
    }
}  

const mapDispatchToProps = (dispatch)=>{
    return {
        addPerson: (person)=>dispatch({
            type: ACTIONS.ADD_PERSON,
            payload: person}),
        removePerson: (id)=>dispatch({
            type:ACTIONS.REMOVE_PERSON,
            payload:id})
    }
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Persons);