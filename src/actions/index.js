export const mouseEnterMap = (bool) => {
  return {
    type: "MOUSE_ENTER_MAP",
    payload: bool
  };
};

export const setScrollPosition = (number) => {
  return {
    type: "SET_SCROLL_POSITION",
    payload: number
  };
};

export const playBackgroundAudio = (bool) => {
  return {
    type: "PLAY_BACKGROUND_AUDIO",
    payload: bool
  };
};
