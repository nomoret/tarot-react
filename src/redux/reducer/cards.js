const SELECT_CARD = "SELECT_CARD";
const CLEAR_CARD = "CLEAR_CARD";

const initialState = {
  selectList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selectList: [...state.selectList, action.data] };
    case CLEAR_CARD:
      return { ...state, selectList: [] };
    default:
      return state;
  }
};

export default reducer;
