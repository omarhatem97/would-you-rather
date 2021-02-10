import setAuthedUser from "../actions/authedUser";
import {
  addQuestion,
  receiveQuestions,
  saveAnswer,
} from "../actions/questions";
import {
  receiveUsers,
  saveUserAnswer,
  saveUserQuestion,
} from "../actions/users";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";

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

export function handleSaveQuesiton(authedUser, question) {
  return (dispatch) => {
    return _saveQuestion(question).then((formattedQuestion) => {
      dispatch(addQuestion(formattedQuestion));
      dispatch(saveUserQuestion(authedUser, formattedQuestion.id));
    });
  };
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveAnswer(authedUser, answer, qid));
      dispatch(saveUserAnswer(authedUser, qid, answer));
    });
  };
}
