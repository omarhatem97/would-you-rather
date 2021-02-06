export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(authedUser, option1, option2) {
  return {
    type: SAVE_QUESTION,
    authedUser,
    option1,
    option2,
  };
}

export function saveAnswer(authedUser, answer, question) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    question,
    answer,
  };
}
