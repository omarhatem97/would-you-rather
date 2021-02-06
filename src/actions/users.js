export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveUserQuestion(authedUser, questionid) {
  return {
    type: SAVE_USER_QUESTION,
    authedUser,
    questionid
  };
}

export function saveUserAnswer(authedUser, questionid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    questionid,
    answer
  };
}
