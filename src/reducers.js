/* eslint-disable no-case-declarations */
import short from "shortid";
import { combineReducers } from "redux";

function cards(state = [], action) {
  switch (action.type) {
    case "ADD_CARD":
      return [
        ...state,
        { id: short.generate(), text: action.text, board: action.boardIndex }
      ];

    case "REMOVE_CARD":
      return state.filter(card => card.id !== action.id);

    case "TRANSFER_CARD":
      const index = state.findIndex(card => card.id === action.id);
      console.log(action.destinationBoardIndex);
      return [
        ...state.slice(0, index),
        { ...state[index], board: action.destinationBoardIndex },
        ...state.slice(index + 1)
      ];

    case "REMOVE_BOARD":
      return state.filter(card => card.board !== action.index);

    default:
      return state;
  }
}

function boards(state = [], action) {
  switch (action.type) {
    case "ADD_BOARD":
      return [...state, action.name];

    case "REMOVE_BOARD":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}

// a PURE takes in current state and action, and returns updated state

// function rootReducer(state = {}, action) {
//   return {
//     cards: cards(state.cards, action),
//     boards: boards(state.boards, action)
//   };
// }

const rootReducer = combineReducers({
  cards,
  boards
});

export default rootReducer;
