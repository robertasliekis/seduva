const initialState = {
  mapEntered: false
};

const mouseEnterMap = (state = initialState, action) => {
  switch (action.type) {
    case "MOUSE_ENTER_MAP":
      return { ...state, mapEntered: action.payload };
    default:
      return state;
  }
};

export default mouseEnterMap;
