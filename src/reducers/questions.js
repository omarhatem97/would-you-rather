import setAuthedUser from "../actions/authedUser";
import {
  ADD_QUESTION,
  SAVE_ANSWER,
  RECEIVE_QUESTIONS,
} from "../actions/questions";

export function questions(state={}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case SAVE_ANSWER:
      const { authedUser, answer, questionid } = action;
      return {
        ...state,
        [questionid]: {
          ...state[questionid],
          [answer]: {
            ...state[questionid][answer],
            votes: state[questionid][answer].votes.concat(authedUser),
          },
        },
      };

    default:
      return state;
  }
}
