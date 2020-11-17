const initialState = {
  scrollPosition: 0
};

const setScrollPosition = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCROLL_POSITION":
      return { ...state, scrollPosition: action.payload };
    default:
      return state;
  }
};

export default setScrollPosition;
