import { combineReducers } from "redux";
import mouseEnterMap from "./mouseEnterMapReducer";
import setScrollPosition from "./scrollPositionReducer";
import playBackgroundAudio from "./playBackgroundAudioReducer";
import setModelLoaded from "./setModelLoadedReducer";

export default combineReducers({
  mouseEnterMap: mouseEnterMap,
  setScrollPosition: setScrollPosition,
  playBackgroundAudio: playBackgroundAudio,
  setModelLoaded: setModelLoaded
});
