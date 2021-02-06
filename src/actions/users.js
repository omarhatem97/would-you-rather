export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveUserQuestion(question) {
  return {
    type: SAVE_USER_QUESTION,
    question,
  };
}

export function saveUserAnswer(question, answer) {
  return {
    type: SAVE_USER_ANSWER,
    question,
    answer,
  };
}
