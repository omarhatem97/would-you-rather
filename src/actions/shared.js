import {receiveUsers, RECEIVE_USERS} from '../actions/users'
import {receiveQuestions, RECEIVE_QUESTIONS} from '../actions/questions'
import {_getUsers, _getQuestions} from '../utils/_DATA'




export function handleInitialData () {

    return(dispatch) =>{
        _getUsers().then((users)=> {            
            dispatch(receiveUsers(users));
        });

        _getQuestions().then((questions)=> {
            dispatch(receiveQuestions(questions));
        });
    }
}

