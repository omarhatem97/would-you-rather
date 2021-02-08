import { receiveUsers, RECEIVE_USERS } from "../actions/users";
import { receiveQuestions, RECEIVE_QUESTIONS } from "../actions/questions";
import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../utils/_DATA";
import { saveAnswer } from "../actions/questions";
import { saveUserAnswer } from "../actions/users";

export function handleInitialData() {
  return (dispatch) => {
    _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });

    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleSaveAnswer(authedUser, qid, answer) {
    console.log(authedUser)
    console.log(qid)
    console.log(answer)

  return (dispatch) => {
    _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
      dispatch(saveAnswer(authedUser, answer, qid));
      dispatch(saveUserAnswer(authedUser, qid, answer));
    });
  };
}
