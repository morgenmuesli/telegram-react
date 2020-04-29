import { actions } from "../action/constants";

const initialState = {
  currentEmotion: "neutral",
  isLocked: false
};

export const emotions = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_EMOTION:
      if(!state.isLocked){
        return {
          ...state,
          currentEmotion: action.payload
        };
      }else {
        return {
          ...state
        }
      }
    case actions.TOGGLE_LOCK:
      return {
        ...state,
        isLocked: !state.isLocked
      }
    default:
      return {
        ...state
      };
  }
};
