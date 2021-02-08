

export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}




export function saveAnswer(authedUser, answer, questionid) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    answer,
    questionid,
  };
}
