import { actions } from "../action/constants";

const initialState = {
  currentEmotion: "neutral"
};

export const emotions = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_EMOTION:
      return {
        ...state,
        currentEmotion: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
