import { combineReducers } from "redux";
import mouseEnterMap from "./mouseEnterMapReducer";
import setScrollPosition from "./scrollPositionReducer";

export default combineReducers({
  mouseEnterMap: mouseEnterMap,
  setScrollPosition: setScrollPosition
});
