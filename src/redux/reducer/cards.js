export const CREATE_SHUFFLE_DECK_SUCCESS = "CREATE_SHUFFLE_DECK_SUCCESS";
export const CREATE_SHUFFLE_DECK_FAILURE = "CREATE_SHUFFLE_DECK_FAILURE";
export const CREATE_SHUFFLE_DECK_REQUEST = "CREATE_SHUFFLE_DECK_REQUEST";

export const REDRAW_DECK_SUCCESS = "REDRAW_DECK_SUCCESS";
export const REDRAW_DECK_FAILURE = "REDRAW_DECK_FAILURE";
export const REDRAW_DECK_REQUEST = "REDRAW_DECK_REQUEST";

export const SELECT_CARD_SUCCESS = "SELECT_CARD_SUCCESS";
export const SELECT_CARD_FAILURE = "SELECT_CARD_FAILURE";
export const SELECT_CARD_REQUEST = "SELECT_CARD_REQUEST";

export const CLEAR_CARD_SUCCESS = "CLEAR_CARD_SUCCESS";
export const CLEAR_CARD_FAILURE = "CLEAR_CARD_FAILURE";
export const CLEAR_CARD_REQUEST = "CLEAR_CARD_REQUEST";

const initialState = {
  cardList: [],
  selectList: [],
  isShuffling: false,
  isShuffledDeck: false,
  isSelected: false,
  isCleared: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHUFFLE_DECK_REQUEST:
      return { ...state, isShuffling: true, isShuffledDeck: false };
    case CREATE_SHUFFLE_DECK_SUCCESS: {
      const { deckList, selectCount } = action.data;
      return {
        ...state,
        cardList: deckList,
        selectCount: selectCount,
        isShuffling: false,
        isShuffledDeck: true
      };
    }
    case CREATE_SHUFFLE_DECK_FAILURE:
      return { ...state, isShuffling: false, isShuffledDeck: false };
    case SELECT_CARD_REQUEST:
      return { ...state, isSelected: false };
    case SELECT_CARD_SUCCESS:
      return {
        ...state,
        isSelected: true,
        selectList: [...state.selectList, action.data]
      };
    case SELECT_CARD_FAILURE:
      return { ...state, isSelected: false };
    case CLEAR_CARD_REQUEST:
      return { ...state, isCleared: false };
    case CLEAR_CARD_SUCCESS: {
      return {
        ...state,
        isCleared: true,
        selectList: []
      };
    }
    case CLEAR_CARD_FAILURE:
      return { ...state, isCleared: false };
    default:
      return state;
  }
};

export default reducer;
