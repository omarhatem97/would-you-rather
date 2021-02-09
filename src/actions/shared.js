import setAuthedUser from "../actions/authedUser";
import {
  addQuestion,
  receiveQuestions,
  saveAnswer,
} from "../actions/questions";
import { receiveUsers, saveUserAnswer } from "../actions/users";
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
