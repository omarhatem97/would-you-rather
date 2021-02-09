import { receiveUsers, RECEIVE_USERS } from "../actions/users";
import { receiveQuestions, RECEIVE_QUESTIONS } from "../actions/questions";
import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../utils/_DATA";
import { saveAnswer } from "../actions/questions";
import { saveUserAnswer } from "../actions/users";
import { addQuestion } from "../actions/questions";
import setAuthedUser from "../actions/authedUser";

export function handleInitialData(authedUser = null) {
  return (dispatch) => {
     

    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });

    dispatch(setAuthedUser(authedUser));
    
    return _getUsers().then((users) => {
        dispatch(receiveUsers(users));
      });
  };
}

export function handleSaveQuesiton(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((formattedQuestion) => {
      dispatch(addQuestion(formattedQuestion));
      console.log("finished dispatching now");
    });
  };
}

export function handleSaveAnswer(authedUser, qid, answer) {
  console.log(authedUser);
  console.log(qid);
  console.log(answer);

  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveAnswer(authedUser, answer, qid));
      dispatch(saveUserAnswer(authedUser, qid, answer));
    });
  };
}
