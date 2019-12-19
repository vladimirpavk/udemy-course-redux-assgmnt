import * as ACTIONS from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case(ACTIONS.ADD_PERSON):{            
            return {
                persons: [...state.persons, action.payload]                                        
            }
        }
        case(ACTIONS.REMOVE_PERSON):{
            return {
                persons: state.persons.filter(person => person.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default reducer;