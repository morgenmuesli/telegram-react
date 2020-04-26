import { combineReducers } from "redux";
import { emotions } from "./emotions";
import { emojis } from "./emojis";

const reducer = combineReducers({
  emotions,
  emojis
});

export default reducer;
