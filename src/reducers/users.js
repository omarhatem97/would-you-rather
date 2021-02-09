import {
  RECEIVE_USERS,
  SAVE_USER_ANSWER,
  SAVE_USER_QUESTION,
} from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SAVE_USER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(
            action.questionid
          ),
        },
      };

    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionid]: action.answer,
          },
        },
      };

    default:
      return state;
  }
}
