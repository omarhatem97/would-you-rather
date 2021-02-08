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
import setAuthedUser from '../actions/authedUser'

export function handleInitialData(authedUser=null) {
  return (dispatch) => {
    _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });

    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });

    dispatch(setAuthedUser(authedUser))
  };
}

export function handleSaveQuesiton(question) {
  return (dispatch) => {
    _saveQuestion(question).then((formattedQuestion) => {
      dispatch(addQuestion(formattedQuestion));
    });
  };
}

export function handleSaveAnswer(authedUser, qid, answer) {
  console.log(authedUser);
  console.log(qid);
  console.log(answer);

  return (dispatch) => {
    _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveAnswer(authedUser, answer, qid));
      dispatch(saveUserAnswer(authedUser, qid, answer));
    });
  };
}
